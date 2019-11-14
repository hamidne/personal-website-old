import head from "./config/head";
import modules from "./config/modules";
import plugins from "./config/plugins";
import bootstrapVue from "./config/bootstrapVue";
import pageTransition from "./config/pageTransition";

export default {
  mode: "spa",

  head,
  modules,
  plugins,
  bootstrapVue,
  pageTransition,

  loading: { color: "#fff" },

  css: ["@/assets/scss/app.scss", "shabnam-font/dist/font-face.css"],

  buildModules: [],

  build: {
    extend(config, ctx) {}
  }
};
