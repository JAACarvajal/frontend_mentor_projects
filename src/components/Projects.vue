<template>
    <div class="relative flex flex-col lp:flex-row flex-wrap justify-center gap-10 p-5">
        <ProjectCard v-for="(project, index) in projectList" :key="index" :projectData="project" />
    </div>
</template>
<script lang="ts">
// Imports
import ProjectCard from './ProjectCard.vue';
import ProjectList from '../constants/projects';
export default {
    components: {
        ProjectCard
    },
    setup() {
        const projectList = ProjectList;

        return {
            projectList
        }
    }
}
</script>