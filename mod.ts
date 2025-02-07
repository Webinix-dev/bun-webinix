/**
 * # Bun Webinix
 *
 * > Use any web browser as GUI, with Bun in the backend and HTML5 in the
 * > frontend, all in a lightweight Bun module.
 *
 * ## Features
 *
 * - Fully Independent (_No need for any third-party runtimes_)
 * - Lightweight _~900 Kb_ for the whole package & Small memory footprint
 * - Fast binary communication protocol between Webinix and the browser (_Instead of JSON_)
 * - Multi-platform & Multi-Browser
 * - Using private profile for safety
 * - Original library written in Pure C
 *
 * ## Minimal Example
 *
 * ```ts
 * import { Webinix } from "https://bun.sh/x/webinix@2.5.0/mod.ts";
 *
 * const myWindow = new Webinix();
 * myWindow.show("<html><script src=\"webinix.js\"></script> Hello World! </html>");
 * await Webinix.wait();
 * ```
 *
 * @module
 * @license MIT
 */
export { Webinix } from "./src/webinix.ts";
