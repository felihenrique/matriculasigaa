import Vuex from "vuex";
import Vue from "vue";
import data from "./data/disciplinas.json";

Vue.use(Vuex);

function parseHorario(stringHorario) {
  const turno = stringHorario.includes('M') ? 'M' : stringHorario.includes['T'] ? 'T' : 'N';
  const [dias, horarios] = stringHorario.split(/[M|T|N]/);
  return { turno, dias, horarios };
}

function chocandoHorario(horario1, horario2) {
  return horario1.turno == horario2.turno && horario1.dias == horario2.dias && horario1.horarios
}

export default new Vuex.Store({
  mutations: {
    load(state) {
      state.turmas = data.data;
    },
    selecionarTurma(state, selecionada) {
      if (
        state.turmasSelecionadas.some(
          turma => turma.horario === selecionada.horario
        )
      ) {
        state.snackBar = true;
        state.snackBarMessage = "Você já selecionou uma turma nesse horário";
        return;
      }
      state.turmasSelecionadas.push(selecionada);
    },
    removerTurma(state, disciplina) {
      state.turmasSelecionadas = state.turmasSelecionadas.filter(
        item => item.nome !== disciplina.nome
      );
    },
    updateSnackBar(state, value) {
      state.snackBar = value;
    },
    loadRascunho(state, rascunho) {
      state.turmasSelecionadas = rascunho.turmas;
    },
    addRascunho(state, rascunho) {
      state.rascunhos.push(rascunho);
    },
    removerRascunho(state, rascunho) {
      state.rascunhos = state.rascunhos.filter(ras => ras !== rascunho);
    },
    setFiltro(state, { nome, valor }) {
      Vue.set(state.filtros, nome, valor);
    }
  },
  state: {
    turmas: [],
    turmasSelecionadas: [],
    rascunhos: [],
    filtros: {},
    snackBar: false,
    snackBarMessage: "",
    colorSnackBar: "",
    filtros: {}
  },
  getters: {
    turmasFiltradas(state) {
      return state.turmas
        .filter(
          turma =>
            !state.turmasSelecionadas.find(item => item.nome == turma.nome)
        )
        .filter(turma => {
          let condicao = true;
          if (state.filtros.horario) {
            condicao = turma.horario.toLowerCase().includes(state.filtros.horario.toLowerCase());
          }
          if (state.filtros.nomeDisciplina) {
            condicao =
              condicao &&
              turma.nome.toLowerCase().includes(state.filtros.nomeDisciplina.toLowerCase());
          }
          if (state.filtros.codigoDisciplina) {
            condicao =
              condicao &&
              turma.codigo
                .toLowerCase()
                .includes(state.filtros.codigoDisciplina.toLowerCase());
          }
          return condicao;
        });
    },
    horarioSemanal(state) {
      const arraySemanal = {
        M12: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        M34: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        M56: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        T12: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        T34: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        T56: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        N12: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
        N34: {'2': '', '3': '', '4': '', '5': '', '6': '', '7': ''},
      };
      state.turmasSelecionadas.forEach(turma => {
        const dia = turma['horario'][0];
        const horario = turma['horario']
      });
      return [{
        codigoSeg: 'fd',
        codigoTer: 'dfs',
        codigoQua: 'fdf',
        codigoQui: 'sdf',
        codigoSex: 'fdfs',
        codigoSab: 'dfds'
      }];
    }
  }
});
