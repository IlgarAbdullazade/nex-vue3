import { accountChangeEmailStore } from './accountChangeEmailStore';
import { accountChangePasswordStore } from './accountChangePasswordStore';
import { accountChangeTwoFactorAuthStore } from './accountChangeTwoFactorAuthStore';
import { accountReferralOperationsStore } from './accountReferralOperationsStore';
import { accountReferralStatisticsStore } from './accountReferralStatisticsStore';
import { accountTransactionsStore } from './accountTransactionsStore';
import { accountVerificationStore } from './accountVerificationStore';

export const accountStore = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    accountChangeEmail: accountChangeEmailStore,
    accountChangePassword: accountChangePasswordStore,
    accountChangeTwoFactorAuth: accountChangeTwoFactorAuthStore,
    accountReferralOperations: accountReferralOperationsStore,
    accountReferralStatistics: accountReferralStatisticsStore,
    accountTransactions: accountTransactionsStore,
    accountVerification: accountVerificationStore,
  },
  namespaced: true,
};
