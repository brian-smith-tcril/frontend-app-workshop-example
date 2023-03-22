import {
  takeEvery,
  put,
  call,
  select,
  all,
} from 'redux-saga/effects';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

import * as coursesActions from './actions';
import { userAccountSelector } from './selectors';

jest.mock('./service', () => ({
  getCourses: jest.fn(),
  getAccount: jest.fn(),
}));

jest.mock('@edx/frontend-platform/auth', () => ({
  getAuthenticatedUser: jest.fn(),
}));

// RootSaga and ProfileApiService must be imported AFTER the mock above.
/* eslint-disable import/first */
import coursesSaga, {
  handleFetchCourses,
} from './sagas';
import * as CoursesApiService from './service';
/* eslint-enable import/first */

describe('RootSaga', () => {
  describe('coursesSaga', () => {
    it('should pass actions to the correct sagas', () => {
      const gen = coursesSaga();

      expect(gen.next().value)
        .toEqual(takeEvery(coursesActions.FETCH_COURSES.BASE, handleFetchCourses));

      expect(gen.next().value).toBeUndefined();
    });
  });

  // describe('handleFetchCourses', () => {
  //   it('should fetch courses without a logged in user', () => {

  //     const action = profileActions.fetchCourses();
  //     const gen = handleFetchCourses(action);

  //     const result = [];

  //     expect(gen.next().value).toEqual(select(userAccountSelector));
  //     expect(gen.next(selectorData).value).toEqual(put(profileActions.fetchProfileBegin()));
  //     expect(gen.next().value).toEqual(all([
  //       call(ProfileApiService.getAccount, 'gonzo'),
  //       call(ProfileApiService.getCourseCertificates, 'gonzo'),
  //       call(ProfileApiService.getPreferences, 'gonzo'),
  //     ]));
  //     expect(gen.next(result).value)
  //       .toEqual(put(profileActions.fetchProfileSuccess(userAccount, result[2], result[1], true)));
  //     expect(gen.next().value).toEqual(put(profileActions.fetchProfileReset()));
  //     expect(gen.next().value).toBeUndefined();
  //   });

  //   it('should fetch certificates and profile for some other user profile', () => {
  //     const userAccount = {
  //       username: 'gonzo',
  //       other: 'data',
  //     };
  //     getAuthenticatedUser.mockReturnValue(userAccount);
  //     const selectorData = {
  //       userAccount,
  //     };

  //     const action = profileActions.fetchProfile('booyah');
  //     const gen = handleFetchProfile(action);

  //     const result = [{}, [1, 2, 3]];

  //     expect(gen.next().value).toEqual(select(userAccountSelector));
  //     expect(gen.next(selectorData).value).toEqual(put(profileActions.fetchProfileBegin()));
  //     expect(gen.next().value).toEqual(all([
  //       call(ProfileApiService.getAccount, 'booyah'),
  //       call(ProfileApiService.getCourseCertificates, 'booyah'),
  //     ]));
  //     expect(gen.next(result).value)
  //       .toEqual(put(profileActions.fetchProfileSuccess(result[0], {}, result[1], false)));
  //     expect(gen.next().value).toEqual(put(profileActions.fetchProfileReset()));
  //     expect(gen.next().value).toBeUndefined();
  //   });
  // });

  describe('handleFetchCourses', () => {
    it('should fetch courses for the current user profile', () => {
      const userAccount = {
        username: 'gonzo',
        other: 'data',
      };
      getAuthenticatedUser.mockReturnValue(userAccount);
      const selectorData = {
        userAccount,
      };

      const action = coursesActions.fetchCourses('gonzo');
      const gen = handleFetchCourses(action);

      const result = [userAccount, [1, 2, 3]];

      expect(gen.next().value).toEqual(select(userAccountSelector));
      expect(gen.next(selectorData).value).toEqual(put(coursesActions.fetchCoursesBegin()));
      expect(gen.next().value).toEqual(all([
        call(CoursesApiService.getAccount, 'gonzo'),
        call(CoursesApiService.getCourses, 'gonzo'),
      ]));
      expect(gen.next(result).value)
        .toEqual(put(coursesActions.fetchCoursesSuccess(userAccount, result[1], true)));
      expect(gen.next().value).toEqual(put(coursesActions.fetchCoursesReset()));
      expect(gen.next().value).toBeUndefined();
    });

    // it('should fetch certificates and profile for some other user profile', () => {
    //   const userAccount = {
    //     username: 'gonzo',
    //     other: 'data',
    //   };
    //   getAuthenticatedUser.mockReturnValue(userAccount);
    //   const selectorData = {
    //     userAccount,
    //   };

    //   const action = profileActions.fetchProfile('booyah');
    //   const gen = handleFetchProfile(action);

    //   const result = [{}, [1, 2, 3]];

    //   expect(gen.next().value).toEqual(select(userAccountSelector));
    //   expect(gen.next(selectorData).value).toEqual(put(profileActions.fetchProfileBegin()));
    //   expect(gen.next().value).toEqual(all([
    //     call(ProfileApiService.getAccount, 'booyah'),
    //     call(ProfileApiService.getCourseCertificates, 'booyah'),
    //   ]));
    //   expect(gen.next(result).value)
    //     .toEqual(put(profileActions.fetchProfileSuccess(result[0], {}, result[1], false)));
    //   expect(gen.next().value).toEqual(put(profileActions.fetchProfileReset()));
    //   expect(gen.next().value).toBeUndefined();
    // });
  });
});
