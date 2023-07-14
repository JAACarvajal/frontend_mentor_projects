<template>
    <div id="qr_code" class="relative h-screen">
        <div class="w-full h-full flex justify-center items-center">
            <div class="main-box flex flex-col justify-center bg-white rounded-3xl p-4">
                <div>
                    <img class="rounded-xl" :src="QRCodeImage" alt="">
                </div>
                <div class="flex flex-col text-center p-6 gap-4">
                    <p class="title text-2xl font-bold">Improve your front-end skills by building projects</p>
                    <p class="desc text-base leading-5">Scan the QR code to visit Frontend Mentor and take your coding
                        skills to
                        the next level</p>
                </div>
            </div>
        </div>

        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Your Name Here</a>.
        </div>
    </div>
</template>
<script setup lang="ts">
import QRCodeImage from '../../../assets/QRCode/image-qr-code.png';
</script>
<style scoped>
#qr_code {
    background-color: hsl(212, 45%, 89%);
}

h1,
p {
    font-family: 'Noto Sans KR', sans-serif !important;
    font-family: 'Outfit', sans-serif !important;
}

h1 {
    font-weight: 700 !important;
}

.title {
    color: hsl(223, 22%, 25%);
}

.desc {
    color: hsl(225, 8%, 59%);
}

.main-box {
    width: 360px;
}

.attribution {
    font-size: 11px;
    text-align: center;
}

.attribution a {
    color: hsl(228, 45%, 44%);
}
</style>