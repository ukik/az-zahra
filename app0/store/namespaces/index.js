// const auth = require('./auth')
// const tab = require('./tab')
// const init = require('./init')
// const notification = require('./notification')

const habit_adab = require('./habit-adab')
const habit_organisasi = require('./habit-organisasi')

module.exports = {
    // auth,
    // tab,
    // init,
    // notification,

    habit_adab,
    habit_organisasi,

}

// only works without param in getters
// inline access
// this.$store.getters['status/REQUEST_STATUS'] // GETTERS
// this.$store.commit('yourModuleName/doSomething', {payload: data}) // MUTATIONS
// this.$store.dispatch('yourModuleName/doSomething', {payload: data}) // ACTION
