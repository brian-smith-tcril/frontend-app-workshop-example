import { history } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import {
  all,
  call,
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
import * as CoursesApiService from './service';

export function* handleFetchCourses(action) {
  const { username } = action.payload;

  const userAccount = yield select(userAccountSelector);
  const isAuthenticatedUserProfile = username === getAuthenticatedUser().username;
  // Default our data assuming the account is the current user's account.
  let account = userAccount;
  let courses = null;

  try {
    yield put(fetchCoursesBegin());

    const calls = [
      call(CoursesApiService.getAccount, username),
      call(CoursesApiService.getCourses, username),
    ];

    // Make all the calls in parallel.
    const result = yield all(calls);

    [account, courses] = result;
    
    yield put(fetchCoursesSuccess(
      account,
      courses,
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
  yield takeEvery(FETCH_COURSES.BASE, handleFetchCourses);
}
