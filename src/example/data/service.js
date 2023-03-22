import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient as getHttpClient } from '@edx/frontend-platform/auth';
import { camelCaseObject } from '../utils';

ensureConfig(['LMS_BASE_URL'], 'Courses API service');

// GET ACCOUNT
export async function getAccount(username) {
  const { data } = await getHttpClient().get(`${getConfig().LMS_BASE_URL}/api/user/v1/accounts/${username}`);

  return camelCaseObject(data);
}

// GET COURSES
export async function getCourses(username) {
  const { data } = await getHttpClient().get(`${getConfig().LMS_BASE_URL}/api/courses/v1/courses/${username}`);

  return camelCaseObject(data);
}
