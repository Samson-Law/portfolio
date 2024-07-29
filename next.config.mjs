/** @type {import('next').NextConfig} */
import path from "path" 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "src/styles/_general.scss";`,
  },
};

export default nextConfig;
