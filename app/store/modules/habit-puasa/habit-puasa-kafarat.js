const {
    habit_puasa_kafarat
} = require("@/store/namespaces/index");

const {
  get_habit_puasa_kafarat_payload,
  get_habit_puasa_kafarat_payload_length,

  set_habit_puasa_kafarat_payload,
  set_habit_puasa_kafarat_payload_add,
  set_habit_puasa_kafarat_payload_remove,
  set_habit_puasa_kafarat_payload_edit,

  action_habit_puasa_kafarat_payload,
  action_habit_puasa_kafarat_payload_add,
  action_habit_puasa_kafarat_payload_remove,
  action_habit_puasa_kafarat_payload_edit
} = habit_puasa_kafarat;

const JSON = require("@/data/habit-puasa/habit-puasa-kafarat");
// console.log(puasa_kafaratJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_puasa_kafarat_payload]:(state) => {
		return state.payload;
	},
  [get_habit_puasa_kafarat_payload_length]:(state) => (data) => {
		return state.payload[data].payload_description.length;
	},
};

const mutations = {
	[set_habit_puasa_kafarat_payload]:(state, data) => {
		state.payload = data
	},
  [set_habit_puasa_kafarat_payload_add]:(state, data) => {
		state.payload.push(data)
	},
  [set_habit_puasa_kafarat_payload_remove]: (state, data) => {
      state.splice(data.index, 1);
  },
  [set_habit_puasa_kafarat_payload_edit]:(state, data) => {

    // "id":"1",
		// "code":"729ca0eb-2422-388e-95bb-120ffea771e1",
		// "initial": "HABIT-puasa_kafarat",

		// "tempat":"Rumah",
		// "waktu":"Siang",
		// "topik":"Pengetahuan",
		// "durasi":0,
		// "rangkuman":"Rumah",

		// "type":"0",
		// "interval":"bulanan",
		// "max_point":"5",
		// "countable":"1",
		// "selected":true

    state[data.index].tempat = data.tempat;
    state[data.index].waktu = data.waktu;
    state[data.index].topik = data.topik;
    state[data.index].durasi = data.durasi;
    state[data.index].rangkuman = data.rangkuman;

  }
};

const actions = {
	[action_habit_puasa_kafarat_payload]: ({commit}, payload) => {
			commit('action_habit_puasa_kafarat_payload', payload);
	},
  [action_habit_puasa_kafarat_payload_add]: ({commit}, payload) => {
			commit('action_habit_puasa_kafarat_payload_add', payload);
	},
  [action_habit_puasa_kafarat_payload_remove]: ({commit}, payload) => {
      commit('action_habit_puasa_kafarat_payload_remove', payload);
  },
  [action_habit_puasa_kafarat_payload_edit]: ({commit}, payload) => {
      commit('action_habit_puasa_kafarat_payload_edit', payload);
  },
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
