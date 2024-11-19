import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktIcon.vue";
import {Settings} from "./settings/Settings";


const LktIcon: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-icon') === undefined) app.component('lkt-icon', libComponent)
    },
};

export default LktIcon;

export const setIconPack = (name: string, className: string) => {
    Settings.packs[name] = className;
}