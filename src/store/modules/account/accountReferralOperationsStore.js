import accountApi from '@/network/api/accountApi';

export const accountReferralOperationsStore = {
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
    async getReferralOperations({ commit }) {
      try {
        commit('setData', null);
        commit('setLoading', true);
        const response = await accountApi.getReferralOperations();
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
