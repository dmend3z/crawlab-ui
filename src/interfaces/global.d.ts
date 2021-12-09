import {App} from 'vue';

declare global {
  interface Window {
    VUE_APP_API_BASE_URL?: string;
    initCanvas?: Function;
    resetCanvas?: Function;
    _hmt?: Array;
    'vue3-sfc-loader'?: { loadModule };
    aplus_queue: any;
    _app?: App;
    _t?: (path: string) => string;
    _tp?: (pluginName: string, path: string) => string;
  }
}
