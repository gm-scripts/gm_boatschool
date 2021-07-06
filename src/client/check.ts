import { conf, lang, error } from "./utils";

interface Validator {
  name: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  type: string;
}

const confValidator: Validator[] = [
  { name: "framework", type: "string" },
  { name: "lang", type: "string" },
  { name: "keys", name2: "openMenu", type: "number" },
  { name: "maxMistakes", type: "number" },
  { name: "allFree", type: "boolean" },
  { name: "price", type: "number" },
  { name: "school", name2: "marker", name3: "x", type: "number" },
  { name: "school", name2: "marker", name3: "y", type: "number" },
  { name: "school", name2: "marker", name3: "z", type: "number" },
  { name: "school", name2: "showBlip", type: "boolean" },
  { name: "menuColors", name2: "backgroundPrimary", type: "string" },
  { name: "menuColors", name2: "backgroundSecondary", type: "string" },
  { name: "menuColors", name2: "colorPrimary", type: "string" },
  { name: "menuColors", name2: "colorSecondary", type: "string" },
  { name: "menuColors", name2: "colorCorrect", type: "string" },
  { name: "menuColors", name2: "colorFalse", type: "string" },
  { name: "menuColors", name2: "textPrimary", type: "string" },
  { name: "menuColors", name2: "textSecondary", type: "string" },
  { name: "marker", name2: "type", type: "number" },
  { name: "marker", name2: "direction", name3: "x", type: "number" },
  { name: "marker", name2: "direction", name3: "y", type: "number" },
  { name: "marker", name2: "direction", name3: "z", type: "number" },
  { name: "marker", name2: "rotation", name3: "x", type: "number" },
  { name: "marker", name2: "rotation", name3: "y", type: "number" },
  { name: "marker", name2: "rotation", name3: "z", type: "number" },
  { name: "marker", name2: "scale", name3: "x", type: "number" },
  { name: "marker", name2: "scale", name3: "y", type: "number" },
  { name: "marker", name2: "scale", name3: "z", type: "number" },
  { name: "marker", name2: "color", name3: "r", type: "number" },
  { name: "marker", name2: "color", name3: "g", type: "number" },
  { name: "marker", name2: "color", name3: "b", type: "number" },
  { name: "marker", name2: "alpha", type: "number" },
  { name: "marker", name2: "bob", type: "boolean" },
  { name: "marker", name2: "face", type: "boolean" },
  { name: "marker", name2: "distance", name3: "show", type: "number" },
  { name: "marker", name2: "distance", name3: "open", type: "number" },
  { name: "blip", name2: "id", type: "number" },
  { name: "blip", name2: "color", type: "number" },
  { name: "blip", name2: "size", type: "number" },
];

const langValidator: string[] = ["blip_title", "press_e", "no_exams"];

const checkConf = (): void => {
  for (let i = 0; i < confValidator.length; i++) {
    if (Object.prototype.hasOwnProperty.call(confValidator[i], "name6")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3][
          confValidator[i].name4
        ][confValidator[i].name5][confValidator[i].name6] !== confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${confValidator[i].name3}.${
            confValidator[i].name4
          }.${confValidator[i].name5}.${confValidator[i].name6} should be a ${
            confValidator[i].type
          }, but was a ${typeof conf[confValidator[i].name][confValidator[i].name2][
            confValidator[i].name3
          ][confValidator[i].name4][confValidator[i].name5][confValidator[i].name6]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name5")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3][
          confValidator[i].name4
        ][confValidator[i].name5] !== confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${confValidator[i].name3}.${
            confValidator[i].name4
          }.${confValidator[i].name5} should be a ${confValidator[i].type}, but was a ${typeof conf[
            confValidator[i].name
          ][confValidator[i].name2][confValidator[i].name3][confValidator[i].name4][
            confValidator[i].name5
          ]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name4")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3][
          confValidator[i].name4
        ] !== confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${confValidator[i].name3}.${
            confValidator[i].name4
          } should be a ${confValidator[i].type}, but was a ${typeof conf[confValidator[i].name][
            confValidator[i].name2
          ][confValidator[i].name3][confValidator[i].name4]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name3")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3] !==
        confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${
            confValidator[i].name3
          } should be a ${confValidator[i].type}, but was a ${typeof conf[confValidator[i].name][
            confValidator[i].name2
          ][confValidator[i].name3]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name2")) {
      if (typeof conf[confValidator[i].name][confValidator[i].name2] !== confValidator[i].type) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2} should be a ${
            confValidator[i].type
          }, but was a ${typeof conf[confValidator[i].name][confValidator[i].name2]}.`,
          "config",
        );
      }
    } else {
      if (typeof conf[confValidator[i].name] !== confValidator[i].type) {
        error(
          `${confValidator[i].name} should be a ${confValidator[i].type}, but was a ${typeof conf[
            confValidator[i].name
          ]}.`,
          "config",
        );
      }
    }
  }
  if (conf["framework"] != "esx" && conf["framework"] != "vrp" && conf["framework"] != "none") {
    error(
      `framework "${conf["framework"]}" does not exist, please use "esx", "vrp" or "none"`,
      "config",
    );
  }
};

const checkLang = (): void => {
  for (let i = 0; i < langValidator.length; i++) {
    if (typeof lang[langValidator[i]] === "undefined") {
      error(`locale "${langValidator[i]}" does not exist in ${conf["lang"]}.json`, "lang");
    } else {
      if (typeof lang[langValidator[i]] !== "string") {
        error(
          `locale "${langValidator[i]}" should be a string, but was a ${typeof lang[
            langValidator[i]
          ]}`,
          "lang",
        );
      }
    }
  }
};

export { checkConf, checkLang };
