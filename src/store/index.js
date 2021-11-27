import Vue from "vue";
import Vuex from "vuex"
import api from "../api/index.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "",
        analysedAnamnesText: [],
        riskRating: null,
    },
    getters: {
        analysedAnamnesText: (state) => state.analysedAnamnesText,
        riskRating: (state) => state.riskRating
    },
    mutations: {
        setUser: (state, user) => state.user = user,
        setAnalysedAnamnesText: (state, text) => state.analysedAnamnesText = text,
        serRiskRating: (state, rating) => state.riskRating = rating
    },
    actions: {
        analyzeAnamnes(ctx, body) {
            api.post('/analyze', body).then(response => {
                ctx.commit("serRiskRating", response.data.risk_rating);
                ctx.commit("setAnalysedAnamnesText", response.data.bag_of_words);
            })
        }
    }
})