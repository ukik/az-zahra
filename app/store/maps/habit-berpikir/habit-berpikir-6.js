const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_berpikir_keenam
} = require("@/store/namespaces/index");

const {
  get_habit_berpikir_keenam_payload,
  get_habit_berpikir_keenam_payload_length,
  get_habit_berpikir_keenam_payload_checked,

  set_habit_berpikir_keenam_payload,
  set_habit_berpikir_keenam_payload_checked,

  action_habit_berpikir_keenam_payload
} = habit_berpikir_keenam;


const map_habit_berpikir_keenam = {
    computed: {
        ...mapGetters({
					get_habit_berpikir_keenam_payload,
				  get_habit_berpikir_keenam_payload_length,
				  get_habit_berpikir_keenam_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_berpikir_keenam_payload
        }),
        ...mapMutations({
          set_habit_berpikir_keenam_payload,
				  set_habit_berpikir_keenam_payload_checked,
        })
    },
}

export default map_habit_berpikir_keenam
