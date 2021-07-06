import ts from "typescript";
import { script } from "../config";
let callbacks: unknown;
callbacks = 0;
callbacks = {};
const RegisterNetEvent = (data: string) => {
  ts.transpile(`RegisterNetEvent(${data})`);
};
RegisterNetEvent(`gm_${script}:callback`);
onNet(`gm_${script}:callback`, (result: unknown, id: number) => {
  callbacks[id](result);
  delete callbacks[id];
});
const serverCallback = (name: string, data: unknown, cb: unknown): void => {
  let id: number;
  id = 0;
  id = Object.keys(callbacks).length++;
  callbacks[id] = cb;
  data["CallbackID"] = id;
  emitNet(name, data);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

import { conf, lang, helpText, notifyText } from "./utils";

let isConfigSynced = false;
let hasDmv = false;

const activateHasDmv = (): void => {
  hasDmv = true;
};
const configLoaded = (): void => {
  isConfigSynced = true;
  const marker = conf["marker"];
  const school = conf["school"];
  const keys = conf["keys"];
  const blip = conf["blip"];
  let theBlip: number;
  if (school.showBlip) {
    theBlip = AddBlipForCoord(school.marker.x, school.marker.y, school.marker.z);
    SetBlipSprite(theBlip, blip.id);
    SetBlipDisplay(theBlip, 4);
    SetBlipScale(theBlip, blip.size);
    SetBlipColour(theBlip, blip.color);
    SetBlipAsShortRange(theBlip, true);
    BeginTextCommandSetBlipName("STRING");
    AddTextComponentString(lang["blip_title"]);
    EndTextCommandSetBlipName(theBlip);
  }
  serverCallback(`gm_${script}:getLicenses_${conf["framework"]}`, {}, licenses => {
    for (let i = 0; i < licenses.length; i++) {
      if (licenses[i].type === "drive_boat") {
        activateHasDmv();
      }
    }
  });
  setTick(() => {
    const player = PlayerPedId();
    const coords = GetEntityCoords(player, true);
    if (
      marker.type != -1 &&
      GetDistanceBetweenCoords(
        coords[0],
        coords[1],
        coords[2],
        school.marker.x,
        school.marker.y,
        school.marker.z,
        true,
      ) < marker.distance.show
    ) {
      DrawMarker(
        marker.type,
        school.marker.x,
        school.marker.y,
        school.marker.z + marker.height,
        marker.direction.x,
        marker.direction.y,
        marker.direction.z,
        marker.rotation.x,
        marker.rotation.y,
        marker.rotation.z,
        marker.scale.x,
        marker.scale.y,
        marker.scale.z,
        marker.color.r,
        marker.color.g,
        marker.color.b,
        marker.alpha,
        marker.bob,
        marker.face,
        2,
        false,
        null,
        null,
        false,
      );
      if (
        GetDistanceBetweenCoords(
          coords[0],
          coords[1],
          coords[2],
          school.marker.x,
          school.marker.y,
          school.marker.z,
          true,
        ) < marker.distance.open
      ) {
        helpText(
          lang["press_e"].replace("_price_", conf["allFree"] ? 0 : conf["price"]),
        );

        if (IsControlJustPressed(0, keys.openMenu)) {
          serverCallback(`gm_${script}:getLicenses_${conf["framework"]}`, {}, licenses => {
            let found = false;
            for (let i = 0; i < licenses.length; i++) {
              if (licenses[i].type === "drive_boat") {
                found = true;
              }
            }
            if (found) {
              notifyText(lang["no_exams"]);
            } else {
              if (conf["allFree"]) {
                SendNuiMessage(
                  JSON.stringify({
                    type: "gm_open_dschool",
                    closed: false,
                  }),
                );
                SetNuiFocus(true, true);
              } else {
                serverCallback(
                  `gm_${script}:tryPayment_${conf["framework"]}`,
                  { payment: conf["price"] },
                  (successful: boolean) => {
                    if (successful) {
                      SendNuiMessage(
                        JSON.stringify({
                          type: "gm_open_dschool",
                          closed: false,
                        }),
                      );
                      SetNuiFocus(true, true);
                    }
                  },
                );
              }
            }
          });
        }
      }
    }
  });
};

export { configLoaded, isConfigSynced, activateHasDmv };
