import Vue from "vue";
import Vuex from "vuex"
import api from "../api/index.js"
import patients from "../data/patients"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "",
        analysedAnamnesText: [],
        riskRating: null,
        patients: patients
    },
    getters: {
        analysedAnamnesText: (state) => state.analysedAnamnesText,
        riskRating: (state) => state.riskRating,
        patients: (state) => state.patients
    },
    mutations: {
        setUser: (state, user) => state.user = user,
        setAnalysedAnamnesText: (state, text) => state.analysedAnamnesText = text,
        serRiskRating: (state, rating) => state.riskRating = rating,
        setPatients: (state, arr) => state.patients = arr,
        addPatient: (state, patient) => state.patients.push(patient)
    },
    actions: {
        async analyzeAnamnes(ctx, body) {
            return api.post('/analyze', body).then(response => {
                ctx.commit("serRiskRating", response.data.risk_rating);
                ctx.commit("setAnalysedAnamnesText", response.data.bag_of_words);
            })
        },
    }
})