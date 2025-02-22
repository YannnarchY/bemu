
import "./HwsVue/mainStyle.css";

import "./HwsVue/helpers/Dd"

global.getConfig = function () {
    return {remote_url:'../public'};
};

global.SWorker = false;

import "./HwsVue/helpers/Majax"
import "./HwsVue/helpers/cLoader"
import "./HwsVue/helpers/isType"
global.defaultToken = true;
import "./HwsVue/helpers/Validators"
import "./HwsVue/helpers/animations"
import Hash from "./HwsVue/helpers/Hash"
import GetComp from "./HwsVue/helpers/getComp"
import Formh from "./HwsVue/helpers/Form"
import Panel from "./HwsVue/components/Panel.vue"
import Form from "./HwsVue/components/Form.vue"
import Tab from "./HwsVue/components/Tab.vue"
import Icon from "./HwsVue/components/Icon.vue"
import Button from "./HwsVue/components/Button.vue"
import Pager from "./HwsVue/components/Pager.vue"
import Grid from "./HwsVue/components/grid/Grid.vue"
import Dropdown from "./HwsVue/components/Dropdown.vue"
import Field from "./HwsVue/components/Field.vue"
import Globals from "./HwsVue/helpers/globals"
import Login from "./HwsVue/components/Login.vue"
import Accordion from "./HwsVue/components/Accordion.vue"
import AppCmp from "./src/App.vue"
import "vue/dist/vue.esm-bundler"
import { createApp } from 'vue'

const App = createApp(AppCmp);

// App.config.unwrapInjectedRef = true;

App.use(Hash);
App.use(GetComp);
App.mixin(GetComp.childrenmixin);
App.use(Formh);
App.use(Globals);

App.component("Panel", Panel);
App.component("Form", Form);
App.component("Tab", Tab);
App.component("Icon", Icon);
App.component("Button", Button);
App.component("Pager", Pager);
App.component("Grid", Grid);
App.component("Dropdown", Dropdown);
App.component("Field", Field);
App.component("Login", Login);
App.component("Accordion", Accordion);

App.mount("#app");
