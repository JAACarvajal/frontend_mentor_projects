import Project from "@components/Projects.vue";
import QRCode from "@components/projects/QRCode/index.vue";
import AgeCalculator from "@components/projects/AgeCalculator/index.vue";

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