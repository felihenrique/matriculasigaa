<template>
  <div style="text-align: right">
    <v-btn @click="limparFiltros" color="red" flat small>
        <v-icon small>cancel</v-icon>
        Limpar filtros
    </v-btn>
    <v-dialog width="50%" v-model="modalPesquisa">
      <v-btn slot="activator" flat small>
        <v-icon small>settings</v-icon>
        Opções de pesquisa
      </v-btn>
      <v-card>
        <v-card-title class="title">
          Filtros
        </v-card-title>
        <v-card-text>
          <v-text-field label="Nome da disciplina" v-model="nomeDisciplina" />
          <v-text-field label="Código da disciplina" v-model="codigoDisciplina" />
          <v-text-field label="Horário" v-model="horario" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn small dark color="green" @click="modalPesquisa = false">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card style="height: 45vh">
      <v-subheader style="max-height: 40px;">
        Lista de turmas
      </v-subheader>  
      <v-list two-line style="width: 100%; max-height: calc(100% - 40px)"
      class="scroll-y">
        <div v-for="(item) in this.$store.getters.turmasFiltradas" :key="item.nome + item.professor">
          <v-dialog max-width="500" v-model="modals[item.nome + item.professor]">
            <v-card>
              <v-card-title class="title">
                Informações
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout row>
                    <v-flex xs4 class="font-weight-bold">Nome:</v-flex>
                    <v-flex xs8>{{item.nome}}</v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4 class="font-weight-bold">Professor:</v-flex>
                    <v-flex xs8>{{item.professor}}</v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4 class="font-weight-bold">Horario:</v-flex>
                    <v-flex xs8>{{item.horario}}</v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4 class="font-weight-bold">Local:</v-flex>
                    <v-flex xs8>{{item.local}}</v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4 class="font-weight-bold">Carga horária:</v-flex>
                    <v-flex xs8>{{item.carga_horaria}}</v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4 class="font-weight-bold">Vagas:</v-flex>
                    <v-flex xs8>{{item.vagas}}</v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-list-tile @click="abrirModal(item.nome + item.professor)">
              <v-list-tile-content>
                  <v-list-tile-title>{{item.nome}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{item.horario + ' - ' + 
                    item.professor + ' - ' + item.carga_horaria + ' H'}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat color="green" icon @click="addDisciplina(item, $event)">
                  <v-icon>add</v-icon>
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
import OpcoesSelecionadas from '@/components/OpcoesSelecionadas'
import Vue from 'vue';

export default {
    data() {
      return {
        modalPesquisa: false,
        modals: {}
      }
    },
    computed: {
      nomeDisciplina: {
        get() {
          return this.$store.state.filtros['nomeDisciplina']
        },
        set(valor) {
          this.$store.commit('setFiltro', {nome: 'nomeDisciplina', valor})
        }
      },
      codigoDisciplina: {
        get() {
          return this.$store.state.filtros['codigoDisciplina']
        },
        set(valor) {
          this.$store.commit('setFiltro', {nome: 'codigoDisciplina', valor})
        }
      },
      horario: {
        get() {
          return this.$store.state.filtros['horario']
        },
        set(valor) {
          this.$store.commit('setFiltro', {nome: 'horario', valor})
        }
      }
    },
    methods: {
      abrirModal(key) {
        Vue.set(this.modals, key, true);
      },
      addDisciplina(disciplina, event) {
        event.preventDefault();
        event.stopPropagation();
        this.$store.commit('selecionarTurma', disciplina)
      },
      limparFiltros() {
        this.nomeDisciplina = '';
        this.codigoDisciplina = '';
        this.horario = '';
      }
    },
    components: { OpcoesSelecionadas }
}
</script>