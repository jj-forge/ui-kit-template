import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    libInjectCss(),
    dts({
      include: ["lib"],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts", "lib/**/*.test.{ts,tsx}"],
          })
          .map((file) => [
            // 엔트리 포인트의 이름
            // lib/nested/foo.ts는 nested/foo로 변환됩니다
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 엔트리 포인트 파일의 절대 경로
            // lib/nested/foo.ts는 /project/lib/nested/foo.ts로 변환됩니다
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
