import { c_webinix } from "./libs";
import { CString, ptr, type Pointer } from "bun:ffi";

export class Webinix {
    _window_id: bigint;

    constructor(id?: number) {
        if (id !== undefined) {
            const _id = BigInt(id);
            this._window_id = c_webinix.webinix_new_window_id(_id);
        } else {
            this._window_id = c_webinix.webinix_new_window();
        }
    }

    show(content: string): boolean {
        return c_webinix.webinix_show(this._window_id, Webinix.stringToPtr(content));
    }

    static wait() {
        c_webinix.webinix_wait();
    }

    static stringToPtr(content: string): Pointer {
        const encoder = new TextEncoder();
        const uint8Array = encoder.encode(content);
        return ptr(uint8Array);
    }
}



