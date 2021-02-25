export const state = () => ({
  events: [],
  loaded: '0',
})

export const mutations = {
  setEvents (state, entries) {
    state.events = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}
