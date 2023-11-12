<script setup lang="ts">
  import Bill from './Bill.vue'
  import Tip from './Tip.vue'
  import People from './People.vue'
  import Summary from './Summary.vue'
</script>


<template>
    <main class="w-screen rounded-t-[40px] bg-White mt-14 px-12 pt-12 sm:w-8/12 lg:w-6/12 xl:w-10/12 xl:pt-0 xl:pb-12 xl:px-6 xl:rounded-[40px] 2xl:w-[1300px]">

        <form class="xl:flex xl:justify-between">
          <div class="xl:mt-6">
            <Bill @bill="getBill" :billErrorValue="billErrorValue" />
            <Tip @tip="getTip" :tipErrorValue="tipErrorValue"/>
            <People @people="getPeople" :peopleErrorValue="peopleErrorValue" />
          </div>
          <div class="xl:w-7/12">
            <Summary @clear="clear" :tipAmount="tipAmount" :total="total" />
          </div>
        </form>

    </main>
</template>

<script lang="ts">

  export default {
          data() {
              return {
                errorArray: [] as { name: string, text: string }[],
                billValue: 0 as number,
                billErrorValue: "",
                tipValue: 0 as number,
                tipErrorValue: "",
                peopleValue: 0 as number,
                peopleErrorValue: "",
                tipAmount: 0 as number,
                total: 0 as number,
              };
          },
          methods: {

            clear() {
                this.billValue = 0;
                this.tipValue = 0;
                this.peopleValue = 0;
            },

            updateTipAmount() {
              if (this.billValue !== null && this.tipValue !== null && this.peopleValue !== null && this.errorArray.length === 0 && this.peopleValue !== 0) 
              {
                let tipAmountRaw = (((this.billValue * this.tipValue) / 100) / this.peopleValue).toFixed(2);
                this.tipAmount = parseFloat(tipAmountRaw)
              } else {
                this.tipAmount = 0;
              }
            },

            updateTotal() {
              if (this.billValue !== null && this.tipValue !== null && this.peopleValue !== null && this.errorArray.length === 0 && this.peopleValue !== 0) {
                let tipFloat = this.tipAmount
                let totalRaw = (((this.billValue)/ this.peopleValue)+tipFloat).toFixed(2);
                this.total = parseFloat(totalRaw)
              } else {
                this.total = 0;
              }
            },

            getBill(value: number) {

                this.billValue = value
                console.log(value)
                if(value <= 0)
                {
                  let newError = {
                        name: 'billError',
                        text: "Can't be zero or less"
                      }

                      const existingError = this.errorArray.find((error) => error.name === 'billError');
                      
                      if (existingError) {
                        existingError.text = newError.text;
                      } else {
                        this.errorArray.push(newError);
                      }
                      
                      this.billErrorValue = newError.text;
                } else {
                  this.errorArray = this.errorArray.filter((error) => error.name !== 'billError');
                  this.billErrorValue = "";
                }

                this.updateTipAmount();
                this.updateTotal();
        },

          getTip(value: number) {

                  this.tipValue = value
                  if(value < 0)
                  {
                    let newError = {
                          name: 'tipError',
                          text: "Can't be less than zero"
                        }

                        const existingError = this.errorArray.find((error) => error.name === 'tipError');
                        
                        if (existingError) {
                          existingError.text = newError.text;
                        } else {
                          this.errorArray.push(newError);
                        }
                        
                        this.tipErrorValue = newError.text;
                  } else if(value == 0) {
                    this.tipValue = 0
                  } else {
                    this.errorArray = this.errorArray.filter((error) => error.name !== 'tipError');
                    this.tipErrorValue = "";
                  }
                  
                  this.updateTipAmount();
                  this.updateTotal();
          },
        
            getPeople(value: number) {

              if((value.toString()).includes('.') || (value.toString()).includes(','))
              {
                value = (value.toString()).replace(/[.,]/g, '');
              } else {
                    if(value <= 0)
                    {
                      let newError = {
                            name: 'peopleError',
                            text: "Can't be zero or less"
                          }

                          const existingError = this.errorArray.find((error) => error.name === 'peopleError');
                          
                          if (existingError) {
                            existingError.text = newError.text;
                          } else {
                            this.errorArray.push(newError);
                          }
                          
                          this.peopleErrorValue = newError.text;
                    } else {
                      this.errorArray = this.errorArray.filter((error) => error.name !== 'peopleError');
                      this.peopleErrorValue = "";
                    this.peopleValue = value

                    }
                this.updateTipAmount();
                this.updateTotal();
              }

                  
          },
        },
          
      }
</script>