import {
  FETCH_COURSES,
} from './actions';

export const initialState = {
  errors: {},
  saveState: null,
  savePhotoState: null,
  currentlyEditingField: null,
  account: {
    socialLinks: [],
  },
  preferences: {},
  courseCertificates: [],
  drafts: {},
  isLoadingProfile: true,
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
        preferences: action.preferences,
        courseCertificates: action.courseCertificates,
        isLoadingProfile: false,
        isAuthenticatedUserProfile: action.isAuthenticatedUserProfile,
      };
    default:
      return state;
  }
};

export default examplePage;