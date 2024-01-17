import { Webinix } from "../../src/webinix"

const content =
  '<html><head><script src="webinix.js"></script></head> Hello World ! </html>';

const window = new Webinix();

window.show(content);
Webinix.wait();
