import {
  FETCH_COURSES,
} from './actions';

export const initialState = {
  errors: {},
  account: {},
  courses: [],
  isAuthenticatedUserProfile: false,
};

const examplePage = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COURSES.BEGIN:
      return {
        ...state,
      };
    case FETCH_COURSES.SUCCESS:
      return {
        ...state,
        account: action.account,
        courses: action.courses,
        isLoadingProfile: false,
        isAuthenticatedUserProfile: action.isAuthenticatedUserProfile,
      };
    default:
      return state;
  }
};

export default examplePage;
