// Bun Webinix
// Dependences needed by webinix.ts

import {
  fileExists,
  downloadCoreLibrary,
  currentModulePath,
} from "./src/utils.ts";

/**
 * Determines the correct library filename based on the current operating system and CPU architecture.
 * Checks for the library locally and, if not found, constructs the full path and downloads it if necessary.
 *
 * @returns A promise that resolves to the path of the dynamic library.
 */
async function getLibName() {
  let fileName = "";
  let localFileName = "";

  // Select the appropriate library file based on platform and architecture.
  switch (process.platform) {
    // Windows platform
    case "win32":
      switch (process.arch) {
        case "x64":
          fileName = "webinix-windows-msvc-x64/webinix-2.dll";
          localFileName = "./webinix-2.dll";
          break;
        case "arm64":
          fileName = "webinix-windows-msvc-arm64/webinix-2.dll";
          localFileName = "./webinix-2.dll";
          break;
        default:
          throw new Error(`Unsupported architecture ${process.arch} for Windows`);
      }
      break;

    // macOS platform
    case "darwin":
      switch (process.arch) {
        case "x64":
          fileName = "webinix-macos-clang-x64/libwebinix-2.dylib";
          localFileName = "./libwebinix-2.dylib";
          break;
        case "arm64":
          fileName = "webinix-macos-clang-arm64/libwebinix-2.dylib";
          localFileName = "./libwebinix-2.dylib";
          break;
        default:
          throw new Error(`Unsupported architecture ${process.arch} for macOS`);
      }
      break;

    // Other platforms (Linux, etc.)
    default:
      switch (process.arch) {
        case "x64":
          fileName = "webinix-linux-gcc-x64/libwebinix-2.so";
          localFileName = "./libwebinix-2.so";
          break;
        case "arm64":
          fileName = "webinix-linux-gcc-arm64/libwebinix-2.so";
          localFileName = "./libwebinix-2.so";
          break;
        default:
          throw new Error(`Unsupported architecture ${process.arch} for ${process.platform}`);
      }
      break;
  }

  // Check if the dynamic library already exists locally.
  const localExists = await fileExists(localFileName);
  if (localExists) {
    return localFileName;
  }

  // Construct the full path to the dynamic library using the current module path.
  const srcFullPath = currentModulePath;
  const fullPath = srcFullPath + fileName;

  // Verify if the library exists at the computed path.
  const exists = await fileExists(fullPath);
  if (!exists) {
    // If not found, download the core library.
    await downloadCoreLibrary();
  }

  // Return the final resolved path to the dynamic library.
  return fullPath;
}

// Export the resolved library name for use in other parts of the application.
export const libName = await getLibName();
