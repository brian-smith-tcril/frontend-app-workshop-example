import { AsyncActionType } from '../utils';

export const FETCH_COURSES = new AsyncActionType('COURSES', 'FETCH_COURSES');

// FETCH COURSES ACTIONS

export const fetchCourses = username => ({
  type: FETCH_COURSES.BASE,
  payload: { username },
});

export const fetchCoursesBegin = () => ({
  type: FETCH_COURSES.BEGIN,
});

export const fetchCoursesSuccess = (
  account,
  preferences,
  courseCertificates,
  isAuthenticatedUserProfile,
) => ({
  type: FETCH_COURSES.SUCCESS,
  account,
  preferences,
  courseCertificates,
  isAuthenticatedUserProfile,
});

export const fetchCoursesReset = () => ({
  type: FETCH_COURSES.RESET,
});
