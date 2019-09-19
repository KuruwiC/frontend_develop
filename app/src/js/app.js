import Vue from "vue";
import App from "./App.vue";

const create_app = async () => {
  new Vue({
    el: "#app",
    components: { App },
    template: "<App />"
  });
};

create_app();
