import accountApi from '@/network/api/accountApi';

export const accountChangeEmailStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {},
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async changeEmail({ commit }, params) {
      try {
        commit('setData', null);
        commit('setLoading', true);
        const response = await accountApi.changeEmail(params);
        commit('setData', response.data);
        commit('setError', null);
        return response;
      } catch (e) {
        commit('setError', e.message);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};
