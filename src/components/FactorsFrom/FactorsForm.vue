<template>
  <div>
      <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
        <b-button @click="submit()">Submit</b-button>
  </div>
</template>

<script>
import schema from "./factorsScheam"
export default {
    data() {
        return {
            formSchema: schema
        }
        
    },

    methods: {
    submit () {
      this.$ncformValidate('your-form-name').then(data => {
        if (data.result) {
          console.log(this.$data.formSchema.value)
          // do what you like to do
        }
      })
    }
  }
}
</script>

<style>

</style>