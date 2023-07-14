<template>
    <div class="flex flex-col w-full lp:w-1/5 h-40 p-5 border">
        <h1>{{ projectName }}</h1>
        <a :href="projectRoute">
            <button @click="$router.push(projectRoute)" class="w-full p-2 border">
                View Design
            </button>
        </a>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

interface ProjectInterface {
    name: string,
    route: any,
}

export default {
    props: {
        projectData: {
            type: Object as PropType<ProjectInterface>,
            require: true
        },
    },
    /**
     * main setup() method
     * @param props
     */
    setup(props) {
        // Get project name from props
        const projectName = props.projectData?.name;
        const projectRoute = props.projectData?.route;

        // Expose to template and other options API hooks
        return {
            projectName,
            projectRoute
        }
    }
}
</script>