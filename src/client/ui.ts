import ts from "typescript";
import { conf, lang, quest } from "./utils";
import { isConfigSynced, activateHasDmv } from "./main";
import { script } from "../config";
let callbacks: unknown;
callbacks = 0;
callbacks = {};
const RegisterNetEvent = (data: string) => {
  ts.transpile(`RegisterNetEvent(${data})`);
};
RegisterNetEvent(`gm_${script}:callbackUi`);
onNet(`gm_${script}:callbackUi`, (result: unknown, id: number) => {
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

//////////////////////////////////////////////////////

let results = [];
let openQuestion = 0;

const passed = () => {
  let mistakes = 0;
  for (let i = 0; i < results.length; i++) {
    if (!results[i]) {
      mistakes++;
    }
  }
  return mistakes <= conf["maxMistakes"];
};

/// CONFIGURATION

RegisterNuiCallbackType("lang/welcome");
on("__cfx_nui:lang/welcome", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      const welcome = lang["menu"].welcome
      welcome.nextPage = "/test"
      cb(welcome);
      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("lang/failed");
on("__cfx_nui:lang/failed", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      cb(lang["menu"].failed);
      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("lang/passed");
on("__cfx_nui:lang/passed", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      cb(lang["menu"].passed);
      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("lang/test");
on("__cfx_nui:lang/test", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      cb(lang["menu"].test);
      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("lang/popuptitle");
on("__cfx_nui:lang/popuptitle", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      cb({"title": lang["choose_exam"]});
      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("config");
on("__cfx_nui:config", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      cb(conf["menuColors"]);
      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("exams");
on("__cfx_nui:exams", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      cb([]);
      clearTick(interval);
    }
  });
});

/// CHOOSE

RegisterNuiCallbackType("choose");
on("__cfx_nui:choose", (data, cb) => {
  SetNuiFocus(false, false);
});

/// QUESTIONS

RegisterNuiCallbackType("question");
on("__cfx_nui:question", (data, cb) => {
  const interval = setTick(() => {
    if (isConfigSynced) {
      if (data.answerIsCorrect !== null) {
        results.push(data.answerIsCorrect);
      }
      cb({
        question: quest[openQuestion],
        questionIndex: openQuestion,
        progress: openQuestion / quest["length"],
        last: openQuestion === quest["length"] - 1,
      });
      openQuestion++;

      clearTick(interval);
    }
  });
});

RegisterNuiCallbackType("get-results");
on("__cfx_nui:get-results", (data, cb) => {
  results.push(data.answerIsCorrect);
  const r = passed();
  if (r) {
    emitNet(`gm_${script}:addLicense_${conf["framework"]}`, "drive_boat");
    activateHasDmv()
  }
  cb(r);
});

RegisterNuiCallbackType("close");
on("__cfx_nui:close", (data, cb) => {
  openQuestion = 0;
  results = [];
  SetNuiFocus(false, false);
});
