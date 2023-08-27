<template>
    <div class="flex flex-col gap-2">
        <!-- Label -->
        <label class="text-[#716f6f] font-[poppins-bold] font-bold w-1/2 tracking-widest text-xs">{{ props.label }}</label>

        <!-- Input -->
        <input
            class="h-[50px] tb:h-[70px] font-[poppins-bold] rounded-md w-full px-4 py-2 tb:p-5 text-xl tb:text-2xl border outline-0 focus:border-[#854dff]"
            :placeholder="props.placeholder" :maxlength="props.maxlength" :type="props.type || 'text'"
            @input="handleChange">

        <!-- Error message -->
        <p class="italic text-xs text-[#ff5757]">{{ errorMessage }}</p>
    </div>
</template>
<script lang="ts">
import { useField } from 'vee-validate';

export default {

    /**
     * Props
     */
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        maxlength: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            required: true,
        }
    },
    /**
     * Setup method
     */
    setup(props) {
        const { errorMessage, value, handleChange } = useField(() => props.name);

        return {
            value,
            errorMessage,
            props,
            handleChange
        }
    }
}
</script>