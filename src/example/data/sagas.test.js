import {
  takeEvery,
  put,
  call,
  delay,
  select,
  all,
} from 'redux-saga/effects';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

import * as profileActions from './actions';
import { handleSaveProfileSelector, userAccountSelector } from './selectors';

jest.mock('./services', () => ({
  getProfile: jest.fn(),
  patchProfile: jest.fn(),
  postProfilePhoto: jest.fn(),
  deleteProfilePhoto: jest.fn(),
  getPreferences: jest.fn(),
  getAccount: jest.fn(),
  getCourseCertificates: jest.fn(),
}));

jest.mock('@edx/frontend-platform/auth', () => ({
  getAuthenticatedUser: jest.fn(),
}));

// RootSaga and ProfileApiService must be imported AFTER the mock above.
/* eslint-disable import/first */
import profileSaga, {
  handleFetchCourses,
} from './sagas';
import * as ProfileApiService from './services';
/* eslint-enable import/first */

describe('RootSaga', () => {
  describe('profileSaga', () => {
    it('should pass actions to the correct sagas', () => {
      const gen = profileSaga();

      expect(gen.next().value)
        .toEqual(takeEvery(profileActions.FETCH_PROFILE.BASE, handleFetchProfile));

      expect(gen.next().value).toBeUndefined();
    });
  });

  describe('handleFetchProfile', () => {
    it('should fetch certificates and preferences for the current user profile', () => {
      const userAccount = {
        username: 'gonzo',
        other: 'data',
      };
      getAuthenticatedUser.mockReturnValue(userAccount);
      const selectorData = {
        userAccount,
      };

      const action = profileActions.fetchProfile('gonzo');
      const gen = handleFetchProfile(action);

      const result = [userAccount, [1, 2, 3], { preferences: 'stuff' }];

      expect(gen.next().value).toEqual(select(userAccountSelector));
      expect(gen.next(selectorData).value).toEqual(put(profileActions.fetchProfileBegin()));
      expect(gen.next().value).toEqual(all([
        call(ProfileApiService.getAccount, 'gonzo'),
        call(ProfileApiService.getCourseCertificates, 'gonzo'),
        call(ProfileApiService.getPreferences, 'gonzo'),
      ]));
      expect(gen.next(result).value)
        .toEqual(put(profileActions.fetchProfileSuccess(userAccount, result[2], result[1], true)));
      expect(gen.next().value).toEqual(put(profileActions.fetchProfileReset()));
      expect(gen.next().value).toBeUndefined();
    });

    it('should fetch certificates and profile for some other user profile', () => {
      const userAccount = {
        username: 'gonzo',
        other: 'data',
      };
      getAuthenticatedUser.mockReturnValue(userAccount);
      const selectorData = {
        userAccount,
      };

      const action = profileActions.fetchProfile('booyah');
      const gen = handleFetchProfile(action);

      const result = [{}, [1, 2, 3]];

      expect(gen.next().value).toEqual(select(userAccountSelector));
      expect(gen.next(selectorData).value).toEqual(put(profileActions.fetchProfileBegin()));
      expect(gen.next().value).toEqual(all([
        call(ProfileApiService.getAccount, 'booyah'),
        call(ProfileApiService.getCourseCertificates, 'booyah'),
      ]));
      expect(gen.next(result).value)
        .toEqual(put(profileActions.fetchProfileSuccess(result[0], {}, result[1], false)));
      expect(gen.next().value).toEqual(put(profileActions.fetchProfileReset()));
      expect(gen.next().value).toBeUndefined();
    });
  });
});