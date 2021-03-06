import presetStage2 from "babel-preset-stage-2";

import transformDecorators from "babel-plugin-transform-decorators";
import transformExportExtensions from "babel-plugin-transform-export-extensions";
import transformNumericSeparator from "babel-plugin-transform-numeric-separator";

export default function () {
  return {
    presets: [
      presetStage2,
    ],
    plugins: [
      transformDecorators,
      transformExportExtensions,
      transformNumericSeparator,
    ],
  };
}
