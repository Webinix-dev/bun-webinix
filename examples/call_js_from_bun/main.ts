import { Webinix, Browser, Event } from "../../src/webinix";
import { file } from "bun";
import index from "./index.html" with { type: "file" };

const content = await file(index).text();
const window = new Webinix();

const my_function_exit = (_: Event) => {
  Webinix.exit();
};

// TODO: need to finish
const my_function_count = (e: Event) => {};

window.bind("my_function_exit", my_function_exit);

window.show(content);

Webinix.wait();

Webinix.clean();
