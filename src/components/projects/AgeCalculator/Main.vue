<template>
    <div id="age_calculator" class="relative h-screen flex justify-center items-center px-4 bg-[#f0f0f0]">
        <div
            class="w-[770px] flex flex-col justify-center gap-2 px-5 py-10 tb:p-12 bg-white rounded-t-[20px] rounded-bl-[20px] rounded-br-[100px] tb:rounded-br-[200px]">

            <!-- INPUTS -->
            <div class="w-full tb:w-3/4 flex flex-row gap-3 tb:gap-7">
                <DateInput placeholder="DD" label="DAY" />
                <DateInput placeholder="MM" label="MONTH" />
                <DateInput placeholder="YYYY" label="YEAR" />
            </div>

            <!-- DIVIDER and BUTTON -->
            <div class="relative block tb:flex h-[100px] justify-center items-center">
                <div
                    class="absolute tb:relative w-full tb:w-[87%] top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 tb:top-0 tb:left-0 tb:translate-x-0 tb:translate-y-0">
                    <hr />
                </div>
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tb:relative tb:top-0 tb:left-0 tb:translate-x-0 tb:translate-y-0 flex rounded-full justify-center items-center w-[60px] tb:w-[13%] h-[85px] bg-[#854dff] hover:cursor-pointer hover:bg-[#141414]">
                    <img class="w-5 h-5 tb:w-10 tb:h-10" :src="IconArrow" alt="Icon arrow">
                </div>
            </div>

            <!-- RESULTS -->
            <div class="result">
                <p class="font-[poppins-extra-bold-italic] text-8xl italic font-extrabold text-[#141414]"><span
                        class="text-[#854dff]">38</span>
                    years</p>
                <p class="font-[poppins-extra-bold-italic] text-8xl italic font-extrabold text-[#141414]"><span
                        class="text-[#854dff]">3</span>
                    months</p>
                <p class="font-[poppins-extra-bold-italic] text-8xl italic font-extrabold text-[#141414]"><span
                        class="text-[#854dff]">12</span> days
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// Imports
import DateInput from './reusable/DateInput.vue';
import IconArrow from '../../../assets/AgeCalculator/icon-arrow.svg';

export default {
    /**
     * Components
     */
    components: {
        DateInput
    },
    /**
     *
     */
    setup() {
        return {
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
    .box-container {
        width: 340px;
        border-radius: 20px 20px 100px 20px;
        padding: 40px 25px !important;
        gap: 20px;
    }

    .input-container {
        gap: 15px !important;
        width: 100%;
    }

    .input-container>div {
        width: 100% !important;
    }

    .input-container input {
        font-size: 20px !important;
        padding: 10px 10px !important;
    }

    .divider .button {
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .result>p {
        font-size: 50px;
    }

    .button {
        width: 60px;
        height: 60px;
    }
}
</style>