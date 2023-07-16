<template>
    <div class="flex flex-col gap-2">
        <label class="text-[#716f6f] font-[poppins-bold] font-bold w-1/2 tracking-widest text-xs">{{ props.label }}</label>
        <input
            class="h-[50px] tb:h-[70px] font-[poppins-bold] rounded-md w-full px-4 py-2 tb:p-5 text-xl tb:text-2xl border outline-0 focus:border-[#854dff]"
            type="text" :placeholder="props.placeholder">
        <!--          <p class="italic text-xs text-[#ff5757]">This filed is required</p>-->
    </div>
</template>
<script lang="ts">
export default {
    props: {
        placeholder: String,
        label: String,
    },
    /**
     * 
     */
    setup(props) {
        return { props }
    }
}
</script>