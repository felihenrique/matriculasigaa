<template>
    <v-card style="height: 45vh">
        <v-subheader>Horario Semanal</v-subheader>
        <v-data-table hide-actions :headers="headers" :items="this.$store.getters.horarioSemanal">
            <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item['2'] }}</td>
                <td class="text-xs-center">{{ props.item['3'] }}</td>
                <td class="text-xs-center">{{ props.item['4'] }}</td>
                <td class="text-xs-center">{{ props.item['5'] }}</td>
                <td class="text-xs-center">{{ props.item['6'] }}</td>
                <td class="text-xs-center">{{ props.item['7'] }}</td>
            </template>
        </v-data-table>
    </v-card>  
</template>


<script>
export default {
    data() {
        return {
            headers: [
                {text: 'Seg', sortable: false}, 
                {text: 'Ter', sortable: false}, 
                {text: 'Qua', sortable: false}, 
                {text: 'Qui', sortable: false}, 
                {text: 'Sex', sortable: false}, 
                {text: 'Sab', sortable: false}
            ]
        }
    }
}
</script>
