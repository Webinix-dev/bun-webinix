import { fetch } from "bun";
import { join, dirname } from "path";
import { mkdirSync, writeFileSync } from "fs";
import { exit } from "process";

import AdmZip from "adm-zip";

const response = await fetch(
  "https://github.com/webinix-dev/webinix/releases/download/nightly/webinix-windows-gcc-x64.zip",
);

if (response.status != 200) {
  console.log(
    "failed to download webinix libs! ",
    `status is ${response.status}`,
  );
  exit(1);
}

const webinix_dir = dirname(import.meta.dir);

const lib_dir = join(webinix_dir, "libs");
const buffer = await response.arrayBuffer();
const zip = new AdmZip(Buffer.from(buffer));
const zipEntries = zip.getEntries();

zipEntries.forEach((entry) => {
  // 获取条目的相对路径，并去掉顶层目录
  const relativePath = entry.entryName.split("/").slice(1).join("/");

  if (relativePath) {
    const outputPath = join(lib_dir, relativePath);

    if (entry.isDirectory) {
      // 创建目录
      mkdirSync(outputPath, { recursive: true });
    } else {
      // 写入文件
      writeFileSync(outputPath, new Uint8Array(entry.getData()));
    }
  }
});
