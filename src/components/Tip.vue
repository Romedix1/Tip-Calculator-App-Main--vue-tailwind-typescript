<template>
    <h1 class="text-DarkGrayishCyan font-bold text-lg tracking-widest  mt-6 mb-4">Select Tip %</h1>

    <section>
        <div class="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:w-10/12">
            <label v-for="option in tipOptions" :key="option.value" :for="option.id" class="input--radio-box rounded-lg grid place-items-center bg-VeryDarkCyan hover:bg-HoverCyan hover:cursor-pointer xl:py-2">
                <span class="input--radio-label py-2 text-2xl text-White xl:text-3xl">{{ option.text }}</span>
                <input @change="checkTip" :value="option.value" :id="option.id" name="tip" type="radio" class="hidden block" v-model="tipValue" />
            </label>
            
            <input ref="customTipInput" :class="{ 'outline-ErrorRed outline outline-2': tipErrorValue && tipErrorValue.length > 0, 'focus:outline-GrayishCyan': !tipErrorValue || tipErrorValue.length === 0  }" @click="customTip" @input="checkTip" id="tip" type="number" placeholder="Custom" step="1" class="focus:outline-GrayishCyan bg-VeryLightGrayishCyan py-1 px-4 text-right font-bold text-VeryDarkCyan text-2xl rounded-lg xl:text-3xl"/>
        </div>
        <p class="text-sm text-ErrorRed mt-4 text-right xl:text-left">{{ tipErrorValue }}</p>
    </section>
</template>


<script lang="ts">
    export default {
        data() {
            return {
                tipValue: Number,
                tipOptions: [
                    { id: 'tipFive', text: '5%', value: 5 },
                    { id: 'tipTen', text: '10%', value: 10 },
                    { id: 'tipFifteen', text: '15%', value: 15 },
                    { id: 'tipTwentyFive', text: '25%', value: 25 },
                    { id: 'tipFifty', text: '50%', value: 50 },
                ],
            }
        },
        emits: ['tip'],
        props: {
            tipErrorValue: String
        },
        methods: {
            customTip() {
                let tipInputs = document.getElementsByName("tip");
                let customInput = document.getElementById("tip")
                
                for(let i=0; i<tipInputs.length; i++) {
                    (tipInputs[i] as HTMLInputElement).checked = false;
                }

                customInput.value = null
            },

            checkTip(event: any) {
                this.tipValue = event.target.value;
                this.$emit('tip', this.tipValue)
            }
        }
    }
    
</script>