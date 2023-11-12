<template>
    <section class="xl:w-10/12">
        <div class="flex items-center justify-between">
            <h1 for="billInput" class="text-DarkGrayishCyan font-bold text-lg tracking-widest xl:text-xl">Bill</h1>
            <p class="text-sm text-ErrorRed">{{ billErrorValue }}</p>
        </div>
        <div class="mt-2 relative">
            <img src="../assets/images/icon-dollar.svg" alt="dollar icon" class="absolute left-4 top-3" />
            <input :class="{ 'outline-ErrorRed outline outline-2': billErrorValue && billErrorValue.length > 0, 'focus:outline-GrayishCyan': !billErrorValue || billErrorValue.length === 0  }" @input="checkBill" id="billInput" type="number" step="0.01" placeholder="0" class="bg-VeryLightGrayishCyan w-full py-1 px-4 text-right font-bold text-VeryDarkCyan text-2xl rounded-lg xl:py-2"/>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                billValue: 0,
            }
        },
        emits: ['bill'],
        props: {
            billErrorValue: String
        },
        methods: {
            checkBill(event: InputEvent) {
                const target = event.target as HTMLInputElement;

                if (target) {
                    this.billValue = parseFloat(target.value);
                    this.$emit('bill', this.billValue);
                }
            }
        }
    }
</script>