<template>
    <div id="qr_code" class="relative h-screen bg-[#d6e2f0]">
        <div class="w-full h-full flex justify-center items-center">
            <div class="w-[360px] flex flex-col justify-center bg-white rounded-3xl p-4">
                <div>
                    <img class="rounded-xl" :src="QRCodeImage" alt="QR Code image">
                </div>
                <div class="flex flex-col text-center p-6 gap-4">
                    <p class="text-[#323a4e] text-2xl font-bold">Improve your front-end skills by building projects</p>
                    <p class="text-[#8e929f] text-base leading-5">Scan the QR code to visit Frontend Mentor and
                        take your coding
                        skills to
                        the next level</p>
                </div>
            </div>
        </div>

        <!-- <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Your Name Here</a>.
        </div> -->
    </div>
</template>
<script lang="ts">
// Import QR code image
import QRCodeImage from '../../../assets/QRCode/image-qr-code.png';
export default {
    /**
     * Set a variable for the QR Code image
     */
    setup() {
        return { QRCodeImage };
    },
}
</script>

<!-- Scoped styles here -->
<style scoped>
p {
    font-family: 'Noto Sans KR', sans-serif !important;
    font-family: 'Outfit', sans-serif !important;
}
</style>