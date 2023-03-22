import { history } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import pick from 'lodash.pick';
import {
  all,
  call,
  delay,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import {
  fetchCoursesBegin,
  fetchCoursesReset,
  fetchCoursesSuccess,
  FETCH_COURSES,
} from './actions';
import { userAccountSelector } from './selectors';
import * as ProfileApiService from './services';

export function* handleFetchProfile(action) {
  const { username } = action.payload;
  const userAccount = yield select(userAccountSelector);
  const isAuthenticatedUserProfile = username === getAuthenticatedUser().username;
  // Default our data assuming the account is the current user's account.
  let preferences = {};
  let account = userAccount;
  let courseCertificates = null;

  try {
    yield put(fetchCoursesBegin());

    // Depending on which profile we're loading, we need to make different calls.
    const calls = [
      call(ProfileApiService.getAccount, username),
      call(ProfileApiService.getCourseCertificates, username),
    ];

    if (isAuthenticatedUserProfile) {
      // If the profile is for the current user, get their preferences.
      // We don't need them for other users.
      calls.push(call(ProfileApiService.getPreferences, username));
    }

    // Make all the calls in parallel.
    const result = yield all(calls);

    if (isAuthenticatedUserProfile) {
      [account, courseCertificates, preferences] = result;
    } else {
      [account, courseCertificates] = result;
    }
    yield put(fetchCoursesSuccess(
      account,
      preferences,
      courseCertificates,
      isAuthenticatedUserProfile,
    ));

    yield put(fetchCoursesReset());
  } catch (e) {
    if (e.response.status === 404) {
      history.push('/notfound');
    } else {
      throw e;
    }
  }
}

export default function* profileSaga() {
  yield takeEvery(FETCH_COURSES.BASE, handleFetchProfile);
}