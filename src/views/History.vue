<template>
    <div>
        <b-card v-for="item in historyItems" :key="item.id" title="Card title" style="margin-top:20px">
            <b-card-body>
               <b-card-text>
                   Text
               </b-card-text>
               <b-button v-b-toggle="('collapse-' +item.id)" variant="primary">Toggle Collapse</b-button>
                <b-collapse :id="('collapse-' +item.id)" class="mt-2">
                    <b-card>
                        <p class="card-text">Collapse contents Here</p>
                    </b-card>
                </b-collapse>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            historyItems: [
                {
                    id: 1
                },
                {
                     id: 2
                },
                {
                     id: 3
                }
            ]
        }
    }
}
</script>

<style>

</style>