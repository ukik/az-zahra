const {
    group_anggota
} = require("@/store/namespaces/index");

const {
  get_group_anggota_payload,
  // get_group_anggota_payload_search,

  set_group_anggota_payload,
  // set_group_anggota_payload_search,

  action_group_anggota_payload,
	// action_group_anggota_payload_search,
} = group_anggota;

const JSON = require("@/data/group/group-anggota");
// console.log(JSON);

const state = {
	payload:JSON
};

const getters = {
	[get_group_anggota_payload]:(state) => {
		return state.payload;
	},
  // [get_group_anggota_payload_search]:(state) => (data) => {
  //   // console.log(state.payload[data.toString()])
  //   // const { this[data] } = state.payload
  //   // return state.payload.data;
  //
  //   // const { payload } = state;
  //
  //   // people = state.payload
  //   // filter = "";
  //
  //   let people = state.payload;
  //
  //   if (data) {
  //
  //       let f = data;
  //
  //       people = state.payload.filter(function (e) {
  //           // console.log(e.name.toLowerCase());
  //           // console.log(e.name.toLowerCase().includes(f));
  //           return e.name.toLowerCase().includes(f);
  //       });
  //   }
  //
  //   //console.log(this.people.length);
  //   return people;
  //
  // }
};

const mutations = {
	[set_group_anggota_payload]:(state, data) => {
		state.payload = data
	},
  // [set_group_anggota_payload_search]:(state, data) => {
  //
	// 	const { payload } = state;
  //
  //   payload[data.key].anggota  = data.anggota
  //   payload[data.key].keterangan  = data.keterangan
  //
  // }
};

const actions = {
	[action_group_anggota_payload]: ({commit}, payload) => {
			commit('set_group_anggota_payload', payload);
	},
	// [action_group_anggota_payload_search]: ({commit}, payload) => {
	// 		commit('set_group_anggota_payload_search', payload);
	// },
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
