<template>
<div>
  <v-toolbar dark color="blue darken-2" dense>
    <v-toolbar-title>Matrícula</v-toolbar-title>
    <v-spacer />
    <v-btn flat :icon="this.$vuetify.breakpoint.smAndDown">
      <v-icon>info</v-icon>
      <span v-if="!this.$vuetify.breakpoint.smAndDown">Orientações de matrícula</span>
    </v-btn>
    <v-btn flat :icon="this.$vuetify.breakpoint.smAndDown">
      <v-icon>build</v-icon>
      <span v-if="!this.$vuetify.breakpoint.smAndDown">Matrícula automática</span>
    </v-btn>
    <v-btn flat :icon="this.$vuetify.breakpoint.smAndDown">
      <v-icon>list</v-icon>
      <span v-if="!this.$vuetify.breakpoint.smAndDown">Histórico</span>
    </v-btn>
    <v-btn depressed color="green lighten-1" :icon="this.$vuetify.breakpoint.smAndDown">
      <v-icon>done</v-icon>
      <span v-if="!this.$vuetify.breakpoint.smAndDown">Confirmar matrículas</span>
    </v-btn>
  </v-toolbar>
  <v-container style="height: 100vh" grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <lista-disciplinas />
      </v-flex>
      <v-flex xs12 md6>
        <lista-disciplinas-selecionadas />
      </v-flex>
      <v-flex xs12 md6>
        <horario-semanal />
      </v-flex>
      <v-flex xs12 md6>
        <lista-rascunhos />
      </v-flex>
    </v-layout>
  </v-container>
  <v-snackbar v-model="snackBar" top>
    {{this.$store.state.snackBarMessage}}
  </v-snackbar>
</div>
</template>

<script>
import HorarioSemanal from "@/components/HorarioSemanal";
import ListaDisciplinas from "@/components/ListaDisciplinas";
import ListaDisciplinasSelecionadas from "@/components/ListaDisciplinasSelecionadas";
import ListaRascunhos from "@/components/ListaRascunhos";
export default {
  computed: {
    snackBar: {
      get() {
        return this.$store.state.snackBar
      },
      set(value) {
        this.$store.commit('updateSnackBar', value)
      }
    }
  },
  components: { ListaDisciplinas, ListaRascunhos, HorarioSemanal, ListaDisciplinasSelecionadas }
};
</script>
