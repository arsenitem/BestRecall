<template>
  <b-row style="mt-4">
      <b-tabs content-class="mt-3">
        <b-tab title="Все" active>
            <b-card>
                <b-row>
                    <b-col md=4>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск по фио" v-model="searchFio"></b-form-input>
                    </b-col>
                </b-row>
                 
                
            </b-card>
            <b-card>
                 <b-table 
                    hover 
                    :items="patientsFilter" 
                    :fields="fields" 
                    head-variant="light"
                    sort-by="riskLevel"
                    :sort-desc="true"
                >
                <template #cell(image)>
                    <b-icon icon="person-circle" font-scale="3" style="margin-left:30px;color: #9eb1b5"></b-icon>
                </template>
                 <template #cell(riskLevel) = "level">
                     <b-button pill v-if="level.item.riskLevel===3" class="risk-3">Высокий</b-button>
                    <b-button pill v-if="level.item.riskLevel===2" class="risk-2">Умеренный</b-button>
                    <b-button pill v-if="level.item.riskLevel===1" class="risk-1">Низкий</b-button>
                     
                    
                </template>
                 <template #cell(actions)="data">
                    <b-icon icon="card-checklist" font-scale="3" class="card-ico" @click="onMedLinkClick(data)"></b-icon>
                </template>
            </b-table>
            </b-card>
           
        </b-tab>
        <b-tab title="Новый пациент" @click="onNewPatientClick">
                <!-- <Card/> -->
        </b-tab>
    </b-tabs>
      <!-- <div v-for="patient in patients" :key="patient.id">
          <PatientItem :patient="patient"/>
      </div> -->
  </b-row>
</template>

<script>
export default {
    components: {
    },
    computed: {
        patients() {
            return this.$store.getters["patients"]
        }
    },
    data() {
        return {
            searchFio: "",
            fields: [
            { key: 'image', label: "", tdClass: 'img-col' },
            { key: 'name',  label: 'ФИО', },
            { key: 'age',  label: 'Возраст', },
            { key: 'diagnosis',  label: 'Диагноз', },
             { key: 'lastUpdate',  label: 'Последнее обновление', sortable: true,},
              { key: 'riskLevel',  label: 'Уровень риска', sortable: true, sortDirection: 'asc'},
              { key: 'actions',  label: '', },
            ],
            patientsFilter: [],
        }
    },
     methods: {
        onMedLinkClick(data) {
            this.$router.push({ name: 'Card', query: { patientId: data.item.id } })
        },
        onNewPatientClick() {
            this.$router.push({ name: 'Card', query: { patientId: "new" } })
        }
    },
    watch: {
        searchFio(val) { 
            if (val) {
                this.patientsFilter = this.patients.filter(item => {
                    return item.name.toLowerCase().includes(val.toLowerCase())
                })
            } else {
                this.patientsFilter = this.patients
            }
        }
    },
    mounted() {
        this.patientsFilter = this.patients
        console.log("mounted")
    }
}
</script>

<style>
    .img-col {
        width:10%  
    }
    .thead-light {
        color:#0dcaf0;
    }
    .risk-1 {
        background-color: rgb(66, 201, 95);
        border-color: rgb(66, 201, 95);
        width:120px;
    }
     .risk-2 {
        background-color: orange;
        border-color: orange;
        width:120px;
    }
     .risk-3 {
        background-color: red;
        border-color: red;
        width:120px;
    }
    .sr-only {
        display: none;
    }
    .card-ico {
        cursor: pointer;
    }
    table td {
        vertical-align: middle;
    }
</style>