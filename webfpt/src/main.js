import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Checkbox from "primevue/checkbox";
import Select from "primevue/select";
import IconField from "primevue/iconfield";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import InputIcon from "primevue/inputicon";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Galleria from "primevue/galleria";
import Carousel from "primevue/carousel";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import SelectButton from "primevue/selectbutton";
import RadioButton from "primevue/radiobutton";
import Listbox from "primevue/listbox";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      // prefix: "p",
      darkModeSelector: "dark-mode",
      // cssLayer: false,
    },
  },
});

app.component("SubmitButton", Button);
app.component("InputGroup", InputGroup);
app.component("InputGroupAddon", InputGroupAddon);
app.component("InputText", InputText);
app.component("IconField", IconField);
app.component("InputIcon", InputIcon);
app.component("Tabs", Tabs);
app.component("TabList", TabList);
app.component("Tab", Tab);
app.component("TabPanels", TabPanels);
app.component("TabPanel", TabPanel);
app.component("Galleria", Galleria);
app.component("Carousel", Carousel);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("SelectButton", SelectButton);
app.component("RadioButton", RadioButton);
app.component("Checkbox", Checkbox);
app.component("Select", Select);
app.component("Listbox", Listbox);
app.component("DataTable", DataTable);
app.component("TableColumn", Column);
app.mount("#app");
