<template>
    <div ref="" class="flex flex-col w-full lp:w-1/2 h-40 p-5 border">
        <h1>{{ props.projectData?.name }}</h1>
        <button @click="openProject" class="w-full p-2 border">
            View Design
        </button>
    </div>
</template>
<script setup lang="ts">

const props = defineProps(['projectData']);

function openProject() {
    console.log('asd');
}

</script>