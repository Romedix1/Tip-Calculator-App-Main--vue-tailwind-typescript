<template>
    <article class="mt-8 xl:w-10/12">
      <h1 for="people" class="text-DarkGrayishCyan font-bold text-lg tracking-widest xl:text-xl">Number of People</h1>
      <p class="text-sm text-ErrorRed">{{ peopleErrorValue }}</p>
      <div class="mt-2 relative">
        <img src="../assets/images/icon-person.svg" alt="dollar icon" class="absolute left-4 top-3" />
        <input v-model="peopleValue" :class="{'outline-ErrorRed outline outline-2': peopleErrorValue && peopleErrorValue.length > 0,'focus:outline-GrayishCyan': !peopleErrorValue || peopleErrorValue.length === 0,}" @input="checkPeople" type="text" id="people" pattern="\d*" inputmode="numeric" placeholder="0" class="focus:outline-GrayishCyan bg-VeryLightGrayishCyan w-full py-1 px-4 text-right font-bold text-VeryDarkCyan text-2xl rounded-lg xl:py-2"/>
      </div>
    </article>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        peopleValue: null,
      };
    },
    emits: ['people'],
    props: {
      peopleErrorValue: String,
    },
    methods: {
      checkPeople() {
        this.peopleValue = this.peopleValue.replace(/[^\d]/g, '');
        this.$emit('people', this.peopleValue);
      },
    },
  };
  </script>
  