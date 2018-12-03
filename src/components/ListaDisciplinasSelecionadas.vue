<template>
  <div>
    <v-dialog width="50%" v-model="dandoNome">
      <v-btn slot="activator" flat small>
        <v-icon small>save</v-icon>
        Salvar como rascunho
      </v-btn>
      <v-card>
        <v-card-text>
          <v-text-field label="Nome do rascunho" v-model="nomeRascunho" />
        </v-card-text>
        <v-card-actions>
          <v-btn small @click="addRascunho">Confirmar</v-btn>
          <v-btn small @click="dandoNome = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card style="height: 45vh">
        <v-subheader style="max-height: 40px">Turmas selecionadas</v-subheader>
            <v-list two-line style="width: 100%; max-height: calc(100% - 40px)"
            class="scroll-y">
              <v-list-tile v-if="this.$store.state.turmasSelecionadas.length == 0">
                  Nenhuma turma selecionada
              </v-list-tile>
              <div v-for="(item) in this.$store.state.turmasSelecionadas" :key="item.nome + item.professor">
                <v-list-tile>
                  <v-list-tile-content>
                      <v-list-tile-title>{{item.nome}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{item.horario + ' - ' + item.professor}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon color="red" flat @click="removerTurma(item)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider />
              </div>
            </v-list>  
    </v-card>
  </div>
</template>


<script>
export default {
    data() {
        return {
          nomeRascunho: "",
          dandoNome: false
        }
    },
    methods: {
      removerTurma(item) {
        this.$store.commit('removerTurma', item);
      },
      addRascunho() {
        this.$store.commit('addRascunho', 
          {nome: this.nomeRascunho, turmas: this.$store.state.turmasSelecionadas})
        this.dandoNome = false;
      }
    }
}
</script>

<style>
</style>
