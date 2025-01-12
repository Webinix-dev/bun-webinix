import { dlopen } from "bun:ffi";
import { lib_path } from "./meta";

export const { close, symbols: c_webinix } = dlopen(lib_path, {
  // ok
  webinix_new_window: {
    args: [],
    returns: "usize",
  },

  // ok
  webinix_new_window_id: {
    args: ["usize"],
    returns: "usize",
  },

  // ok
  webinix_get_new_window_id: {
    args: [],
    returns: "usize",
  },

  webinix_bind: {
    args: ["usize", "cstring", "callback"],
    returns: "usize",
  },

  // ok
  webinix_get_best_browser: {
    args: ["usize"],
    returns: "usize",
  },

  // ok
  webinix_show: {
    args: ["usize", "cstring"],
    returns: "bool",
  },

  webinix_show_client: {
    args: ["pointer", "cstring"],
    returns: "bool",
  },

  // ok
  webinix_show_browser: {
    args: ["usize", "cstring", "usize"],
    returns: "bool",
  },

  // ok
  webinix_start_server: {
    args: ["usize", "cstring"],
    returns: "cstring",
  },

  // TODO: Need to wait for issue reply verification
  // https://github.com/webinix-dev/webinix/issues/496
  webinix_show_wv: {
    args: ["usize", "cstring"],
    returns: "bool",
  },

  // ok
  webinix_set_kiosk: {
    args: ["usize", "bool"],
  },

  webinix_set_high_contrast: {
    args: ["usize", "bool"],
  },

  webinix_is_high_contrast: {
    args: [],
    returns: "bool",
  },

  // ok
  webinix_browser_exist: {
    args: ["usize"],
    returns: "bool",
  },

  // ok
  webinix_wait: {
    args: [],
    returns: undefined,
  },

  webinix_close: {
    args: ["usize"],
  },

  webinix_close_client: {
    args: ["pointer"],
  },

  webinix_destroy: {
    args: ["usize"],
  },

  webinix_exit: {
    args: [],
  },

  webinix_set_root_folder: {
    args: ["usize", "cstring"],
    returns: "bool",
  },

  webinix_set_default_root_folder: {
    args: ["cstring"],
    returns: "bool",
  },

  webinix_set_file_handler: {
    args: ["usize", "callback"],
  },

  webinix_is_shown: {
    args: ["usize"],
    returns: "bool",
  },

  webinix_set_timeout: {
    args: ["usize"],
  },

  webinix_set_icon: {
    args: ["usize", "cstring", "cstring"],
  },

  webinix_encode: {
    args: ["cstring"],
    returns: "cstring",
  },

  webinix_decode: {
    args: ["cstring"],
    returns: "cstring",
  },

  webinix_free: {
    args: ["pointer"],
  },

  webinix_malloc: {
    args: ["usize"],
    returns: "pointer",
  },

  webinix_send_raw: {
    args: ["usize", "cstring", "pointer", "usize"],
  },

  webinix_send_raw_client: {
    args: ["pointer", "cstring", "pointer", "usize"],
  },

  // ok
  webinix_set_hide: {
    args: ["usize", "bool"],
  },

  // ok
  webinix_set_size: {
    args: ["usize", "u32", "u32"],
  },

  // ok
  webinix_set_position: {
    args: ["usize", "u32", "u32"],
  },

  webinix_set_profile: {
    args: ["usize", "cstring", "cstring"],
  },

  webinix_set_proxy: {
    args: ["usize", "cstring"],
  },

  // ok
  webinix_get_url: {
    args: ["usize"],
    returns: "cstring",
  },

  webinix_open_url: {
    args: ["cstring"],
  },

  webinix_set_public: {
    args: ["usize", "bool"],
  },

  webinix_navigate: {
    args: ["usize", "cstring"],
  },

  webinix_navigate_client: {
    args: ["pointer", "cstring"],
  },

  webinix_clean: {
    args: [],
  },

  webinix_delete_all_profiles: {
    args: [],
  },

  webinix_delete_profile: {
    args: ["usize"],
  },

  webinix_get_parent_process_id: {
    args: ["usize"],
    returns: "usize",
  },

  webinix_get_child_process_id: {
    args: ["usize"],
    returns: "usize",
  },

  webinix_set_port: {
    args: ["usize", "usize"],
    returns: "bool",
  },

  webinix_set_config: {
    args: ["u32", "bool"],
  },

  webinix_set_event_blocking: {
    args: ["usize", "bool"],
  },

  webinix_set_tls_certificate: {
    args: ["cstring", "cstring"],
    returns: "bool",
  },

  webinix_run: {
    args: ["usize", "cstring"],
  },

  webinix_run_client: {
    args: ["pointer", "cstring"],
  },

  webinix_script: {
    args: ["usize", "cstring", "usize", "pointer", "usize"],
    returns: "bool",
  },

  webinix_script_client: {
    args: ["pointer", "cstring", "usize", "pointer", "usize"],
    returns: "bool",
  },

  webinix_set_runtime: {
    args: ["usize", "usize"],
  },

  webinix_get_count: {
    args: ["pointer"],
    returns: "usize",
  },

  webinix_get_int_at: {
    args: ["pointer", "usize"],
    returns: "i64",
  },

  webinix_get_int: {
    args: ["pointer"],
    returns: "i64",
  },

  webinix_get_float_at: {
    args: ["pointer", "usize"],
    returns: "double",
  },

  webinix_get_float: {
    args: ["pointer"],
    returns: "double",
  },

  webinix_get_string_at: {
    args: ["pointer", "usize"],
    returns: "cstring",
  },

  webinix_get_string: {
    args: ["pointer"],
    returns: "cstring",
  },

  webinix_get_bool_at: {
    args: ["pointer", "usize"],
    returns: "bool",
  },

  webinix_get_bool: {
    args: ["pointer"],
    returns: "bool",
  },

  webinix_get_size_at: {
    args: ["pointer", "usize"],
    returns: "usize",
  },

  webinix_get_size: {
    args: ["pointer"],
    returns: "usize",
  },

  webinix_return_int: {
    args: ["pointer", "u64"],
  },

  webinix_return_float: {
    args: ["pointer", "double"],
  },

  webinix_return_string: {
    args: ["pointer", "cstring"],
  },

  webinix_return_bool: {
    args: ["pointer", "bool"],
  },

  webinix_interface_bind: {
    args: ["usize", "cstring", "callback"],
    returns: "usize",
  },

  webinix_interface_set_response: {
    args: ["usize", "usize", "cstring"],
  },

  webinix_interface_is_app_running: {
    args: [],
    returns: "bool",
  },

  webinix_interface_get_window_id: {
    args: ["usize"],
    returns: "usize",
  },

  webinix_interface_get_string_at: {
    args: ["usize", "usize", "usize"],
    returns: "cstring",
  },

  webinix_interface_get_int_at: {
    args: ["usize", "usize", "usize"],
    returns: "i64",
  },

  webinix_interface_get_float_at: {
    args: ["usize", "usize", "usize"],
    returns: "double",
  },

  webinix_interface_get_bool_at: {
    args: ["usize", "usize", "usize"],
    returns: "bool",
  },

  webinix_interface_get_size_at: {
    args: ["usize", "usize", "usize"],
    returns: "usize",
  },
});
