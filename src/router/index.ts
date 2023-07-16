import Project from "../components/Projects.vue";
import QRCode from "../components/projects/QRCode/Main.vue";
import AgeCalculator from "../components/projects/AgeCalculator/Main.vue";

export default [
    {
        path: '/',
        component: Project
    },
    {
        path: '/qrcode',
        component: QRCode
    },
    {
        path: '/agecalculator',
        component: AgeCalculator
    },
];