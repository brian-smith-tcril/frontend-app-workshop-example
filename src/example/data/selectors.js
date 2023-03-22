import { createSelector } from 'reselect';

export const userAccountSelector = state => state.userAccount;

export const exampleAccountSelector = state => state.examplePage.account;
export const exampleCoursesSelector = state => state.examplePage.courses;

export const examplePageSelector = createSelector(
  exampleAccountSelector,
  exampleCoursesSelector,
  (account) => ({
    account: account,
  }),
);