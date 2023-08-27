<template>
    <div id="age_calculator" class="relative h-screen flex justify-center items-center px-4 bg-[#f0f0f0]">
        <div
            class="w-[340px] tb:w-[770px] flex flex-col justify-center gap-2 px-5 py-10 tb:p-12 bg-white rounded-t-[20px] rounded-bl-[20px] rounded-br-[100px] tb:rounded-br-[200px]">

            <!-- INPUTS -->
            <div class="w-full tb:w-3/4 flex flex-row gap-3 tb:gap-7">
                <DateInput placeholder="DD" label="DAY" :maxlength="2" name="day" type="number" />
                <DateInput placeholder="MM" label="MONTH" :maxlength="2" name="month" type="number" />
                <DateInput placeholder="YYYY" label="YEAR" :maxlength="4" name="year" type="number" />
            </div>

            <!-- DIVIDER and BUTTON -->
            <div class="relative block tb:flex h-[100px] justify-center items-center">
                <div
                    class="absolute tb:relative w-full tb:w-[87%] top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 tb:top-0 tb:left-0 tb:translate-x-0 tb:translate-y-0">
                    <hr />
                </div>
                <div @click="calculateAge"
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tb:relative tb:top-0 tb:left-0 tb:translate-x-0 tb:translate-y-0 flex rounded-full justify-center items-center w-[60px] tb:w-[13%] h-[60px] tb:h-[85px] bg-[#854dff] hover:cursor-pointer hover:bg-[#141414]">
                    <img class="w-5 h-5 tb:w-10 tb:h-10" :src="IconArrow" alt="Icon arrow">
                </div>
            </div>

            <!-- RESULTS -->
            <div class="result">
                <p class="font-[poppins-extra-bold-italic] text-[50px] tb:text-8xl italic font-extrabold text-[#141414]">
                    <span class="text-[#854dff]">{{ }}</span>
                    years
                </p>
                <p class="font-[poppins-extra-bold-italic] text-[50px] tb:text-8xl italic font-extrabold text-[#141414]">
                    <span class="text-[#854dff]">{{ }}</span>
                    months
                </p>
                <p class="font-[poppins-extra-bold-italic] text-[50px] tb:text-8xl italic font-extrabold text-[#141414]">
                    <span class="text-[#854dff]">{{ }}</span> days
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// Imports
import { ref } from 'vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup';

import DateInput from '@components/projects/AgeCalculator/reusable/DateInput.vue';
import IconArrow from '@/assets/AgeCalculator/icon-arrow.svg';

export default {
    /**
     * Components
     */
    components: {
        DateInput
    },

    /**
     * Setup method
     */
    setup() {
        const isButtonClicked = ref(false);

        // Form validation config
        const { handleSubmit } = useForm({
            validationSchema: yup.object({
                day: yup.number()
                    .transform((value: String | Number) => Number.isNaN(value) ? null : value) // Transform input to number or set it to null
                    .nullable() // nullable
                    .required(),
                month: yup.number()
                    .transform((value: String | Number) => Number.isNaN(value) ? null : value) // Transform input to number or set it to null
                    .nullable() // nullable
                    .required(),
                year: yup.number()
                    .transform((value: String | Number) => Number.isNaN(value) ? null : value) // Transform input to number or set it to null
                    .nullable() // nullable
                    .required(),
            }),
        });

        /**
         * Calculate age
         */
        const calculateAge = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2));
        })

        return {
            isButtonClicked,
            calculateAge,
            IconArrow
        }
    }
}
</script>

<!-- Scoped styles -->
<style scoped>
/* Import fonts */
@import '../../../styles/AgeCalculator/fonts.css';

/*  */
::placeholder {
    color: #858585 !important;
    opacity: 1;
    /* Firefox */
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #858585 !important;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #858585 !important;
}

@media only screen and (max-width: 375px) {
    .input-container>div {
        width: 100% !important;
    }
}
</style>