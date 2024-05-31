import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import clear from "rollup-plugin-clear";

const config: RollupOptions = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
    entryFileNames: "upload.cjs",
  },
  plugins: [
    clear({
      targets: ["dist"],
    }),
    typescript(),
  ],
};

export default config;
