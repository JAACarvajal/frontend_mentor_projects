<template>
    <div class="relative min-w-min w-full flex flex-col lp:flex-row gap-10 p-5">
        <ProjectCard v-for="(project, index) in ProjectList" :key="index" :projectData="project" />
    </div>
</template>
<script setup lang="ts">
// Imports
import ProjectCard from './ProjectCard.vue';
import ProjectList from '../constants/projects';

</script>