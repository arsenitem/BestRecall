<template>
  <div>
           <b-card no-body style="margin-top:25px">
                <b-tabs pills vertical>
                <b-tab title="Общие данные" active>
                    <b-card-text>
                        
                    </b-card-text>
                </b-tab>
                <b-tab title="Анамнез" style="height:1000px">
                    <b-card-text style="margin-top:30px">
                        <b-row>
                            <b-col md=6>
                                <b-textarea rows=6 v-model="anamnesText">
                                    
                                </b-textarea>
                            </b-col>
                            <b-col md=2>
                                <b-button @click="checkAnamnesis">Проверить</b-button>
                            </b-col>
                        </b-row>
                        <div v-if="hasResult">
                            <b-card title="Результат" style="margin-top:20px">
                                <b-row>
                                <b-col md=6>
                                    <p>
                                        Вероятность летального исхода: <span :class="riskRatingClass"> {{riskRating}}
                                            </span>
                                    </p>
                                    <hr>
                                </b-col>

                            </b-row>
                            <b-row>
                                <p v-if="analysedAnamnesText" style="margin-xleft:-11px">
                                    <span v-for="word in anamnesTextArray" :key="word" :class="(analysedAnamnesText.includes(word)? 'highlight': '')">
                                        {{word}}
                                    </span>
                                   
                                </p>
                               
                            </b-row>
                            </b-card>
                            
                        </div>
                    </b-card-text>
                </b-tab>
                </b-tabs>
            </b-card>
  </div>
</template>

<script>
// import FactorsForm from "../components/FactorsFrom/FactorsForm.vue"

export default {
    components: {
        // FactorsForm
    },
    data() {
        return {
            hasResult: false,
            anamnesText: "",
            anamnesTextArray: []
        }
    },
    computed: {
        analysedAnamnesText() {
            return this.$store.getters["analysedAnamnesText"]
        },
        riskRating() {
            return this.$store.getters["riskRating"]
        },
        riskRatingClass() {
            let rating = this.$store.getters["riskRating"]
            if (rating > 0.7) {
                return "risk-text-3"
            }
            if (rating > 0.4 && rating < 0.7) {
                 return "risk-text-2"
            }
            if (rating < 0.4) {
                return "risk-text-1"
            } 
            else {
                return ""
            }
        }
    },
    methods: {
        checkAnamnesis() {
            this.anamnesTextArray = this.anamnesText.split(' ')
            this.$store.dispatch("analyzeAnamnes", {
                input: this.anamnesText
            })
            this.hasResult = true
            // analysedAnamnesText
        }
    }
}
</script>

<style>
    .highlight {
        background-color:#ee3;
    }
    .risk-text-1 {
        color: rgb(66, 201, 95);
    }
    .risk-text-2 {
        color: orange;
    }
    .risk-text-3 {
        color:red;
    }
     .risk-text-4 {
        color:red;
    }
</style>