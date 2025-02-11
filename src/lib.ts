// Bun Webinix
// FFI (Foreign Function Interface) for webinix.ts

import { dlopen, suffix } from "bun:ffi";
import { libName } from "../deps.ts";

export function loadLib() {
  return dlopen(
    libName,
    {
      webinix_wait: {
        // void webinix_wait(void)
        args: [],
        returns: "void",
        nonblocking: true,
      },
      webinix_new_window: {
        // size_t webinix_new_window(void)
        args: [],
        returns: "usize",
      },
      webinix_show: {
        // bool webinix_show(size_t window, const char* content)
        args: ["usize", "buffer"],
        returns: "bool",
      },
      webinix_show_browser: {
        // bool webinix_show_browser(size_t window, const char* content, size_t browser)
        args: ["usize", "buffer", "usize"],
        returns: "bool",
      },
      webinix_interface_bind: {
        // size_t webinix_interface_bind(size_t window, const char* element, void (*func)(size_t, size_t, char*, size_t, size_t))
        args: ["usize", "buffer", "function"],
        returns: "usize",
      },
      webinix_script: {
        // bool webinix_script(size_t window, const char* script, size_t timeout, char* buffer, size_t buffer_length)
        args: ["usize", "buffer", "usize", "buffer", "usize"],
        returns: "bool",
      },
      webinix_run: {
        // void webinix_run(size_t window, const char* script)
        args: ["usize", "buffer"],
        returns: "void",
      },
      webinix_interface_set_response: {
        // void webinix_interface_set_response(size_t window, size_t event_number, const char* response)
        args: ["usize", "usize", "buffer"],
        returns: "void",
      },
      webinix_exit: {
        // void webinix_exit(void)
        args: [],
        returns: "void",
      },
      webinix_is_shown: {
        // bool webinix_is_shown(size_t window)
        args: ["usize"],
        returns: "bool",
      },
      webinix_close: {
        // void webinix_close(size_t window)
        args: ["usize"],
        returns: "void",
      },
      webinix_set_file_handler: {
        // void webinix_set_file_handler(size_t window, const void* (*handler)(const char* filename, int* length))
        args: ["usize", "function"],
        returns: "void",
      },
      webinix_interface_is_app_running: {
        // bool webinix_interface_is_app_running(void)
        args: [],
        returns: "bool",
      },
      webinix_set_profile: {
        // void webinix_set_profile(size_t window, const char* name, const char* path)
        args: ["usize", "buffer", "buffer"],
        returns: "void",
      },
      webinix_interface_get_int_at: {
        // long long int webinix_interface_get_int_at(size_t window, size_t event_number, size_t index)
        args: ["usize", "usize", "usize"],
        returns: "i64",
      },
      webinix_interface_get_string_at: {
        // const char* webinix_interface_get_string_at(size_t window, size_t event_number, size_t index)
        // Change return type from "buffer" to "pointer"
        args: ["usize", "usize", "usize"],
        returns: "pointer",
      },
      webinix_interface_get_bool_at: {
        // bool webinix_interface_get_bool_at(size_t window, size_t event_number, size_t index)
        args: ["usize", "usize", "usize"],
        returns: "bool",
      },
      webinix_clean: {
        // void webinix_clean()
        args: [],
        returns: "void",
      },
      webinix_set_root_folder: {
        // bool webinix_set_root_folder(size_t window, const char* path)
        args: ["usize", "buffer"],
        returns: "bool",
      },
      webinix_set_tls_certificate: {
        // bool webinix_set_tls_certificate(const char* certificate_pem, const char* private_key_pem)
        args: ["buffer", "buffer"],
        returns: "bool",
      },
      webinix_set_kiosk: {
        // void webinix_set_kiosk(size_t window, bool status)
        args: ["usize", "bool"],
        returns: "void",
      },
      webinix_destroy: {
        // void webinix_destroy(size_t window)
        args: ["usize"],
        returns: "void",
      },
      webinix_set_timeout: {
        // void webinix_set_timeout(size_t second)
        args: ["usize"],
        returns: "void",
      },
      webinix_set_icon: {
        // void webinix_set_icon(size_t window, const char* icon, const char* icon_type)
        args: ["usize", "buffer", "buffer"],
        returns: "void",
      },
      webinix_encode: {
        // char* webinix_encode(const char* str)
        // Change return type from "buffer" to "pointer"
        args: ["buffer"],
        returns: "pointer",
      },
      webinix_decode: {
        // char* webinix_decode(const char* str)
        // Change return type from "buffer" to "pointer"
        args: ["buffer"],
        returns: "pointer",
      },
      webinix_free: {
        // void webinix_free(void* ptr)
        args: ["pointer"],
        returns: "void",
      },
      webinix_malloc: {
        // void* webinix_malloc(size_t size)
        args: ["usize"],
        returns: "pointer",
      },
      webinix_send_raw: {
        // void webinix_send_raw(size_t window, const char* function, const void* raw, size_t size)
        args: ["usize", "buffer", "buffer", "usize"],
        returns: "void",
      },
      webinix_set_hide: {
        // void webinix_set_hide(size_t window, bool status)
        args: ["usize", "bool"],
        returns: "void",
      },
      webinix_set_size: {
        // void webinix_set_size(size_t window, unsigned int width, unsigned int height)
        args: ["usize", "u32", "u32"],
        returns: "void",
      },
      webinix_set_position: {
        // void webinix_set_position(size_t window, unsigned int x, unsigned int y)
        args: ["usize", "u32", "u32"],
        returns: "void",
      },
      webinix_get_url: {
        // const char* webinix_get_url(size_t window)
        // Change return type from "buffer" to "pointer"
        args: ["usize"],
        returns: "pointer",
      },
      webinix_set_public: {
        // void webinix_set_public(size_t window, bool status)
        args: ["usize", "bool"],
        returns: "void",
      },
      webinix_navigate: {
        // void webinix_navigate(size_t window, const char* url)
        args: ["usize", "buffer"],
        returns: "void",
      },
      webinix_delete_all_profiles: {
        // void webinix_delete_all_profiles(void)
        args: [],
        returns: "void",
      },
      webinix_delete_profile: {
        // void webinix_delete_profile(size_t window)
        args: ["usize"],
        returns: "void",
      },
      webinix_get_parent_process_id: {
        // size_t webinix_get_parent_process_id(size_t window)
        args: ["usize"],
        returns: "usize",
      },
      webinix_get_child_process_id: {
        // size_t webinix_get_child_process_id(size_t window)
        args: ["usize"],
        returns: "usize",
      },
      webinix_set_port: {
        // bool webinix_set_port(size_t window, size_t port)
        args: ["usize", "usize"],
        returns: "bool",
      },
      webinix_set_runtime: {
        // void webinix_set_runtime(size_t window, size_t runtime)
        args: ["usize", "usize"],
        returns: "void",
      },
      webinix_set_config: {
        // void webinix_set_config(webinix_config option, bool status)
        //   show_wait_connection: 0
        //   ui_event_blocking: 1
        //   folder_monitor: 2
        //   multi_client: 3
        //   use_cookies: 4
        //   asynchronous_response: 5
        args: ["usize", "bool"],
        returns: "void",
      },
      webinix_interface_show_client: {
        // bool webinix_interface_show_client(size_t window, size_t event_number, const char* content)
        args: ["usize", "usize", "buffer"],
        returns: "bool",
      },
      webinix_interface_close_client: {
        // void webinix_interface_close_client(size_t window, size_t event_number)
        args: ["usize", "usize"],
        returns: "void",
      },
      webinix_interface_send_raw_client: {
        // void webinix_interface_send_raw_client(
        //  size_t window, size_t event_number, const char* function, const void* raw, size_t size)
        args: ["usize", "usize", "buffer", "buffer", "usize"],
        returns: "void",
      },
      webinix_interface_navigate_client: {
        // void webinix_interface_navigate_client(size_t window, size_t event_number, const char* url)
        args: ["usize", "usize", "buffer"],
        returns: "void",
      },
      webinix_interface_run_client: {
        // void webinix_interface_run_client(size_t window, size_t event_number, const char* script)
        args: ["usize", "usize", "buffer"],
        returns: "void",
      },
      webinix_interface_script_client: {
        // bool webinix_interface_script_client(
        //  size_t window, size_t event_number, const char* script, size_t timeout, char* buffer, size_t buffer_length)
        args: ["usize", "usize", "buffer", "usize", "buffer", "usize"],
        returns: "bool",
      },
      webinix_send_raw_client: {
        // void webinix_send_raw_client(webinix_event_t* e, const char* function, const void* raw, size_t size)
        args: ["pointer", "buffer", "buffer", "usize"],
        returns: "void",
      },
      webinix_interface_set_response_file_handler: {
        // void webinix_interface_set_response_file_handler(size_t window, const void* response, int length)
        args: ["usize", "pointer", "usize"],
        returns: "void",
      },
      webinix_get_best_browser: {
        // size_t webinix_get_best_browser(size_t window)
        args: ["usize"],
        returns: "usize",
      },
      webinix_start_server: {
        // const char* webinix_start_server(size_t window, const char* content)
        // Change return type from "buffer" to "pointer"
        args: ["usize", "buffer"],
        returns: "pointer",
      },
      webinix_show_wv: {
        // bool webinix_show_wv(size_t window, const char* content)
        args: ["usize", "buffer"],
        returns: "bool",
      },
      webinix_set_custom_parameters: {
        // void webinix_set_custom_parameters(size_t window, char *params)
        args: ["usize", "buffer"],
        returns: "void",
      },
      webinix_set_high_contrast: {
        // void webinix_set_high_contrast(size_t window, bool status)
        args: ["usize", "bool"],
        returns: "void",
      },
      webinix_is_high_contrast: {
        // bool webinix_is_high_contrast(void)
        args: [],
        returns: "bool",
      },
      webinix_browser_exist: {
        // bool webinix_browser_exist(size_t browser)
        args: ["usize"],
        returns: "bool",
      },
      webinix_set_default_root_folder: {
        // bool webinix_set_default_root_folder(const char* path)
        args: ["buffer"],
        returns: "bool",
      },
      webinix_set_minimum_size: {
        // void webinix_set_minimum_size(size_t window, unsigned int width, unsigned int height)
        args: ["usize", "u32", "u32"],
        returns: "void",
      },
      webinix_set_proxy: {
        // void webinix_set_proxy(size_t window, const char* proxy_server)
        args: ["usize", "buffer"],
        returns: "void",
      },
      webinix_open_url: {
        // void webinix_open_url(const char* url)
        args: ["buffer"],
        returns: "void",
      },
      webinix_get_free_port: {
        // size_t webinix_get_free_port(void)
        args: [],
        returns: "usize",
      },
      webinix_memcpy: {
        // void webinix_memcpy(void* dest, void* src, size_t count)
        args: ["pointer", "pointer", "usize"],
        returns: "void",
      },
    } as const,
  );
}
