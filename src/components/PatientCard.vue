<template>
  <div>
    <b-card no-body style="margin-top: 25px">
      <b-tabs pills vertical>
        <b-tab title="Общие данные" active>
          <b-card-text style="padding: 15px">
            <ncform
              :form-schema="formSchema"
              form-name="your-form-name"
              v-model="patientData"
              @submit="submit()"
            ></ncform>
            <b-button @click="submit()" style="margin-top: 15px"
              >Сохранить</b-button
            >
          </b-card-text>
        </b-tab>
        <b-tab title="Анамнез" style="height: 1000px">
          <b-card-text style="padding: 15px">
            <b-row>
              <b-col md="6">
                <b-textarea rows="6" v-model="anamnesText"> </b-textarea>
              </b-col>
              <b-col md="2">
                <b-button @click="checkAnamnesis">Проверить</b-button>
              </b-col>
            </b-row>
            <div v-if="loading">
              <b-row>
                <b-col>
                  <b-spinner variant="primary" class="spinner"></b-spinner>
                </b-col>
              </b-row>
            </div>
            <div v-if="hasResult">
              <b-card title="Результат" style="margin-top: 20px">
                <b-row>
                  <b-col md="6">
                    <p>
                      Вероятность летального исхода:
                      <span :class="riskRatingClass"> {{ riskRating }} </span>
                    </p>
                    <hr />
                  </b-col>
                </b-row>
                <b-row>
                  <p v-if="analysedAnamnesText" style="margin-xleft: -11px">
                    <span
                      v-for="word in anamnesTextArray"
                      :key="word"
                      :class="
                        analysedAnamnesText.includes(word) ? 'highlight' : ''
                      "
                    >
                      {{ word }}
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
import schema from "../components/FactorsFrom/factorsScheam";
export default {
  data() {
    return {
      formSchema: schema,
      hasResult: false,
      anamnesText: "",
      anamnesTextArray: [],
      patientData: null,
      loading: false,
    };
  },
  computed: {
    analysedAnamnesText() {
      return this.$store.getters["analysedAnamnesText"];
    },
    riskRating() {
      return this.$store.getters["riskRating"];
    },
    patients() {
      return this.$store.getters["patients"];
    },
    riskRatingClass() {
      let rating = this.$store.getters["riskRating"];
      if (rating >= 0.7) {
        return "risk-text-3";
      }
      if (rating >= 0.4 && rating < 0.7) {
        return "risk-text-2";
      }
      if (rating < 0.4) {
        return "risk-text-1";
      } else {
        return "";
      }
    },
    patientsLen() {
      return this.$store.getters["patients"].length;
    },
    riskRatingClassInt() {
      let rating = this.$store.getters["riskRating"];
      if (rating >= 0.7) {
        return 3;
      }
      if (rating >= 0.4 && rating < 0.7) {
        return 2;
      }
      if (rating < 0.4) {
        return 1;
      } else {
        return 0;
      }
    },
  },
  watch: {
    "$route.query.patientId": {
      handler: function (search) {
        if (search !== "new") {
          this.patientData = this.patients.find((patient) => {
            return patient.id == this.$route.query.patientId;
          }).schemeData;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async checkAnamnesis() {
      this.anamnesTextArray = this.anamnesText.split(" ");
      this.loading = true;
      await this.$store.dispatch("analyzeAnamnes", {
        input: this.anamnesText,
      });
      this.hasResult = true;
      this.loading = false;
    },
    submit() {
      this.$ncformValidate("your-form-name").then((data) => {
        if (data.result) {
          if (this.$route.query.patientId === "new") {
            this.$store.commit("addPatient", {
              image: "",
              id: this.patientsLen + 1,
              name: this.patientData.name,
              age: 44,
              sex: this.patientData.sex,
              diagnosis: this.patientData.diagnosis,
              lastUpdate: new Date().toLocaleDateString(),
              riskLevel: this.riskRatingClassInt,
              schemeData: this.patientData,
            });
          }
          this.$router.push({ name: "Home" });
        }
      });
    },
  },
  beforeUpdate() {
    let el = document.getElementsByClassName("form-row");
    if (el.length > 0) {
      el[0].classList.add("row");
    }
  },
};
</script>

<style>
.highlight {
  background-color: #ee3;
}
.risk-text-1 {
  color: rgb(66, 201, 95);
}
.risk-text-2 {
  color: orange;
}
.risk-text-3 {
  color: red;
}
.spinner {
  scale: 3;
  margin-left: 200px;
  margin-top: 100px;
}
</style>