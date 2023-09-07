const replace = require("replace-in-file");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const np = require("./nushu-palette");
const lightThemeName = require("../themes/light.json").name;

const ignoreProps = [];
const skipProps = String.raw`(?<!"terminal.ansiRed":\s"|"terminal.ansiBlue":\s"|"terminal.ansiGreen":\s"|"terminal.ansiYellow":\s"|"terminal.ansiMagenta":\s"|"terminal.ansiMagenta":\s"|"terminal.ansiCyan":\s")`;

const tmpLightOptions = {
  files: "./themes/light.json",
  from: [
    new RegExp(`${skipProps}${lightColors.scale.white}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.gray[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.green[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.red[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.orange[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.purple[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.coral[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.pink[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.yellow[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[9]}`, "gi"),
  ],
  to: [
    np.temp.white,
    //
    np.temp.gray[0],
    np.temp.gray[1],
    np.temp.gray[2],
    np.temp.gray[3],
    np.temp.gray[4],
    np.temp.gray[5],
    np.temp.gray[6],
    np.temp.gray[7],
    np.temp.gray[8],
    np.temp.gray[9],
    //
    np.temp.yellow[0],
    np.temp.yellow[1],
    np.temp.yellow[2],
    np.temp.yellow[3],
    np.temp.yellow[4],
    np.temp.yellow[5],
    np.temp.yellow[6],
    np.temp.yellow[7],
    np.temp.yellow[8],
    np.temp.yellow[9],
    //
    np.temp.pink[0],
    np.temp.pink[1],
    np.temp.pink[2],
    np.temp.pink[3],
    np.temp.pink[4],
    np.temp.pink[5],
    np.temp.pink[6],
    np.temp.pink[7],
    np.temp.pink[8],
    np.temp.pink[9],
    //
    np.temp.green[0],
    np.temp.green[1],
    np.temp.green[2],
    np.temp.green[3],
    np.temp.green[4],
    np.temp.green[5],
    np.temp.green[6],
    np.temp.green[7],
    np.temp.green[8],
    np.temp.green[9],
    //
    np.temp.coral[0],
    np.temp.coral[1],
    np.temp.coral[2],
    np.temp.coral[3],
    np.temp.coral[4],
    np.temp.coral[5],
    np.temp.coral[6],
    np.temp.coral[7],
    np.temp.coral[8],
    np.temp.coral[9],
    //
    np.temp.orange[0],
    np.temp.orange[1],
    np.temp.orange[2],
    np.temp.orange[3],
    np.temp.orange[4],
    np.temp.orange[5],
    np.temp.orange[6],
    np.temp.orange[7],
    np.temp.orange[8],
    np.temp.orange[9],
    //
    np.temp.purple[0],
    np.temp.purple[1],
    np.temp.purple[2],
    np.temp.purple[3],
    np.temp.purple[4],
    np.temp.purple[5],
    np.temp.purple[6],
    np.temp.purple[7],
    np.temp.purple[8],
    np.temp.purple[9],
    //
    np.temp.red[0],
    np.temp.red[1],
    np.temp.red[2],
    np.temp.red[3],
    np.temp.red[4],
    np.temp.red[5],
    np.temp.red[6],
    np.temp.red[7],
    np.temp.red[8],
    np.temp.red[9],
  ],
};

const convertedLightOptions = {
  files: "./themes/light.json",
  from: [
    /"name": "GitHub Light Default"/g,
    //
    new RegExp(`${np.temp.white}`, "gi"),
    //
    new RegExp(`${np.temp.gray[0]}`, "gi"),
    new RegExp(`${np.temp.gray[1]}`, "gi"),
    new RegExp(`${np.temp.gray[2]}`, "gi"),
    new RegExp(`${np.temp.gray[3]}`, "gi"),
    new RegExp(`${np.temp.gray[4]}`, "gi"),
    new RegExp(`${np.temp.gray[5]}`, "gi"),
    new RegExp(`${np.temp.gray[6]}`, "gi"),
    new RegExp(`${np.temp.gray[7]}`, "gi"),
    new RegExp(`${np.temp.gray[8]}`, "gi"),
    new RegExp(`${np.temp.gray[9]}`, "gi"),
    //
    new RegExp(`${np.temp.yellow[0]}`, "gi"),
    new RegExp(`${np.temp.yellow[1]}`, "gi"),
    new RegExp(`${np.temp.yellow[2]}`, "gi"),
    new RegExp(`${np.temp.yellow[3]}`, "gi"),
    new RegExp(`${np.temp.yellow[4]}`, "gi"),
    new RegExp(`${np.temp.yellow[5]}`, "gi"),
    new RegExp(`${np.temp.yellow[6]}`, "gi"),
    new RegExp(`${np.temp.yellow[7]}`, "gi"),
    new RegExp(`${np.temp.yellow[8]}`, "gi"),
    new RegExp(`${np.temp.yellow[9]}`, "gi"),
    //
    new RegExp(`${np.temp.pink[0]}`, "gi"),
    new RegExp(`${np.temp.pink[1]}`, "gi"),
    new RegExp(`${np.temp.pink[2]}`, "gi"),
    new RegExp(`${np.temp.pink[3]}`, "gi"),
    new RegExp(`${np.temp.pink[4]}`, "gi"),
    new RegExp(`${np.temp.pink[5]}`, "gi"),
    new RegExp(`${np.temp.pink[6]}`, "gi"),
    new RegExp(`${np.temp.pink[7]}`, "gi"),
    new RegExp(`${np.temp.pink[8]}`, "gi"),
    new RegExp(`${np.temp.pink[9]}`, "gi"),
    //
    new RegExp(`${np.temp.green[0]}`, "gi"),
    new RegExp(`${np.temp.green[1]}`, "gi"),
    new RegExp(`${np.temp.green[2]}`, "gi"),
    new RegExp(`${np.temp.green[3]}`, "gi"),
    new RegExp(`${np.temp.green[4]}`, "gi"),
    new RegExp(`${np.temp.green[5]}`, "gi"),
    new RegExp(`${np.temp.green[6]}`, "gi"),
    new RegExp(`${np.temp.green[7]}`, "gi"),
    new RegExp(`${np.temp.green[8]}`, "gi"),
    new RegExp(`${np.temp.green[9]}`, "gi"),
    //
    new RegExp(`${np.temp.coral[0]}`, "gi"),
    new RegExp(`${np.temp.coral[1]}`, "gi"),
    new RegExp(`${np.temp.coral[2]}`, "gi"),
    new RegExp(`${np.temp.coral[3]}`, "gi"),
    new RegExp(`${np.temp.coral[4]}`, "gi"),
    new RegExp(`${np.temp.coral[5]}`, "gi"),
    new RegExp(`${np.temp.coral[6]}`, "gi"),
    new RegExp(`${np.temp.coral[7]}`, "gi"),
    new RegExp(`${np.temp.coral[8]}`, "gi"),
    new RegExp(`${np.temp.coral[9]}`, "gi"),
    //
    new RegExp(`${np.temp.orange[0]}`, "gi"),
    new RegExp(`${np.temp.orange[1]}`, "gi"),
    new RegExp(`${np.temp.orange[2]}`, "gi"),
    new RegExp(`${np.temp.orange[3]}`, "gi"),
    new RegExp(`${np.temp.orange[4]}`, "gi"),
    new RegExp(`${np.temp.orange[5]}`, "gi"),
    new RegExp(`${np.temp.orange[6]}`, "gi"),
    new RegExp(`${np.temp.orange[7]}`, "gi"),
    new RegExp(`${np.temp.orange[8]}`, "gi"),
    new RegExp(`${np.temp.orange[9]}`, "gi"),
    //
    new RegExp(`${np.temp.purple[0]}`, "gi"),
    new RegExp(`${np.temp.purple[1]}`, "gi"),
    new RegExp(`${np.temp.purple[2]}`, "gi"),
    new RegExp(`${np.temp.purple[3]}`, "gi"),
    new RegExp(`${np.temp.purple[4]}`, "gi"),
    new RegExp(`${np.temp.purple[5]}`, "gi"),
    new RegExp(`${np.temp.purple[6]}`, "gi"),
    new RegExp(`${np.temp.purple[7]}`, "gi"),
    new RegExp(`${np.temp.purple[8]}`, "gi"),
    new RegExp(`${np.temp.purple[9]}`, "gi"),
    //
    new RegExp(`${np.temp.red[0]}`, "gi"),
    new RegExp(`${np.temp.red[1]}`, "gi"),
    new RegExp(`${np.temp.red[2]}`, "gi"),
    new RegExp(`${np.temp.red[3]}`, "gi"),
    new RegExp(`${np.temp.red[4]}`, "gi"),
    new RegExp(`${np.temp.red[5]}`, "gi"),
    new RegExp(`${np.temp.red[6]}`, "gi"),
    new RegExp(`${np.temp.red[7]}`, "gi"),
    new RegExp(`${np.temp.red[8]}`, "gi"),
    new RegExp(`${np.temp.red[9]}`, "gi"),
  ],
  to: [
    '"name": "Nüshu Light"',
    //
    np.light.white,
    //
    np.light.gray[0],
    np.light.gray[1],
    np.light.gray[2],
    np.light.gray[3],
    np.light.gray[4],
    np.light.gray[5],
    np.light.gray[6],
    np.light.gray[7],
    np.light.gray[8],
    np.light.gray[9],
    // green --> yellow +1 (slightly darker)
    lightColors.scale.yellow[1],
    lightColors.scale.yellow[2],
    lightColors.scale.yellow[3],
    lightColors.scale.yellow[4],
    lightColors.scale.yellow[5],
    lightColors.scale.yellow[6],
    lightColors.scale.yellow[7],
    lightColors.scale.yellow[8],
    lightColors.scale.yellow[9],
    lightColors.scale.yellow[9],
    // red --> pink
    lightColors.scale.pink[0],
    lightColors.scale.pink[1],
    lightColors.scale.pink[2],
    lightColors.scale.pink[3],
    lightColors.scale.pink[4],
    lightColors.scale.pink[5],
    lightColors.scale.pink[6],
    lightColors.scale.pink[7],
    lightColors.scale.pink[8],
    lightColors.scale.pink[9],
    // orange --> green
    lightColors.scale.green[0],
    lightColors.scale.green[1],
    lightColors.scale.green[2],
    lightColors.scale.green[3],
    lightColors.scale.green[4],
    lightColors.scale.green[5],
    lightColors.scale.green[6],
    lightColors.scale.green[7],
    lightColors.scale.green[8],
    lightColors.scale.green[9],
    // purple --> coral +1 (slightly darker)
    lightColors.scale.coral[1],
    lightColors.scale.coral[2],
    lightColors.scale.coral[3],
    lightColors.scale.coral[4],
    lightColors.scale.coral[5],
    lightColors.scale.coral[6],
    lightColors.scale.coral[7],
    lightColors.scale.coral[8],
    lightColors.scale.coral[9],
    lightColors.scale.coral[9],
    // coral --> orange
    lightColors.scale.orange[0],
    lightColors.scale.orange[1],
    lightColors.scale.orange[2],
    lightColors.scale.orange[3],
    lightColors.scale.orange[4],
    lightColors.scale.orange[5],
    lightColors.scale.orange[6],
    lightColors.scale.orange[7],
    lightColors.scale.orange[8],
    lightColors.scale.orange[9],
    // pink --> purple
    lightColors.scale.purple[0],
    lightColors.scale.purple[1],
    lightColors.scale.purple[2],
    lightColors.scale.purple[3],
    lightColors.scale.purple[4],
    lightColors.scale.purple[5],
    lightColors.scale.purple[6],
    lightColors.scale.purple[7],
    lightColors.scale.purple[8],
    lightColors.scale.purple[9],
    // yellow --> red
    lightColors.scale.red[0],
    lightColors.scale.red[1],
    lightColors.scale.red[2],
    lightColors.scale.red[3],
    lightColors.scale.red[4],
    lightColors.scale.red[5],
    lightColors.scale.red[6],
    lightColors.scale.red[7],
    lightColors.scale.red[8],
    lightColors.scale.red[9],
  ],
};

async function main() {
  try {
    if (lightThemeName === "GitHub Light Default") {
      const tmpResults = await replace(tmpLightOptions);
      console.log("Temp replacement results:", tmpResults);
      const convertedResults = await replace(convertedLightOptions);
      console.log("Converted replacement results:", convertedResults);
    } else {
      console.log("Skipping Light Theme conversion");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
