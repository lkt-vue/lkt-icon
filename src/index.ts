import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktIcon.vue";


const LktIcon: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-icon') === undefined) app.component('lkt-icon', libComponent)
    },
};

export default LktIcon;