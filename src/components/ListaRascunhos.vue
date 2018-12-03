<template>
    <div>
    <v-card style="height: 45vh">
        <v-subheader>Lista de rascunhos</v-subheader>
         <v-list style="width: 100%; max-height: calc(100% - 40px)"
            class="scroll-y">
              <v-list-tile v-if="this.$store.state.rascunhos.length == 0">
                  Nenhum rascunho adicionado
              </v-list-tile>
              <div v-for="(item) in this.$store.state.rascunhos" :key="item.nome">
                <v-list-tile>
                  <v-list-tile-content>
                      <v-list-tile-title>{{item.nome}}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn flat color="green" @click="loadRascunho(item)">
                      Restaurar
                      <v-icon>restore</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-action>
                    <v-btn icon color="red" flat @click="removerRascunho(item)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider />
              </div>
            </v-list>  
    </v-card>
    <v-dialog width="50%">
        <v-card>
            <v-list
        </v-card>
    </v-dialog>
    </div>
</template>


<script>
export default {
    methods: {
        removerRascunho(item) {
            this.$store.commit('removerRascunho', item);
        },
        loadRascunho(rascunho) {
            this.$store.commit('loadRascunho', rascunho);
        }
    }
}
</script>
