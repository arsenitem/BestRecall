<template>
      <b-card class="patient-item">
          <b-card-text>
            <b-row>
          <b-col md=2 class="ml-2" style="color: #9eb1b5">
              <b-icon icon="person-circle" font-scale="7" style="margin-left:30px"></b-icon>
          </b-col>
          <b-col md=8>
              <b-row>Фамилия имя отчесвто</b-row>
              <b-row>Пол: М</b-row>
              <b-row>Возраст: 33</b-row>
              <b-row>Клинический диагноз: 33</b-row>
          </b-col>
      </b-row>
            </b-card-text>
            <b-link href="#" class="card-link" @click="onMedLinkClick">Перейти к медицинской карте</b-link>
        
      </b-card>
</template>

<script>
export default {
    props: {
        patient: Object
    },
    methods: {
        onMedLinkClick() {
            console.log(this.patient.id)
            this.$router.push({ name: 'Card', query: { patientId: this.patient.id } })
        }
    }
}
</script>

<style>
    .patient-item {
        margin-top: 20px;
        border: 2px solid #a8d3dc;
    }
</style>