// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ensureConfig, getConfig } from '@edx/frontend-platform';

ensureConfig(['LMS_BASE_URL'], 'Courses API service');

// Define a service using a base URL and expected endpoints
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getConfig().LMS_BASE_URL}/api/` }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => 'courses/v1/courses/',
      transformResponse: (response) => response.results.map(entry => ({
        title: entry.name,
        description: entry.short_description,
        imageUrl: entry.media.banner_image.uri_absolute,
        imageAltText: "API does not return alt text for images"
      })),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoursesQuery } = coursesApi;
