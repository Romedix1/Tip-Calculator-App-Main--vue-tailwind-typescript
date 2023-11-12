<template>
    <section class="bg-VeryDarkCyan w-full rounded-xl px-6 py-4 mt-8 mb-6 xl:h-full xl:mt-0 xl:w-full xl:mt-6 xl:relative ">
        <article class="flex items-center justify-between xl:text-2xl">
            <div>
                <h2 class="text-White font-semibold text-lg xl:text-2xl">Tip Amount</h2>
                <p class="text-GrayishCyan font-semibold xl:text-2xl">/ person</p>
            </div>

            <div>
                <h3 class="text-HoverCyan text-3xl font-bold text-DarkGrayishCyan">${{ tipAmount }}</h3>
            </div>
        </article>

        <article class="flex items-center justify-between mt-6">
            <div>
                <h2 class="text-White font-semibold text-lg xl:text-2xl">Total</h2>
                <p class="text-GrayishCyan font-semibold xl:text-2xl">/ person</p>
            </div>

            <div>
                <h3 class="text-HoverCyan text-3xl font-bold text-DarkGrayishCyan">${{ total }}</h3>
            </div>
        </article>

        <input @click="clear()" class="uppercase w-full bg-HoverCyan text-VeryDarkCyan font-bold py-1 mt-6 rounded-md text-lg hover:bg-[#148B75] hover:cursor-pointer xl:absolute xl:w-[90%] xl:bottom-6 xl:text-2xl xl:py-3" type="reset" value="reset" />
    </section>
</template>

<script>
    export default {
        props: ['tipAmount','total'],

    }
</script>