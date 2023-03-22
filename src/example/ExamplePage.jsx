import { connect } from 'react-redux';

import { AppContext } from '@edx/frontend-platform/react';

// Actions
import {
  fetchCourses,
} from './data/actions';

// Selectors
import { examplePageSelector } from './data/selectors';

import { Container } from '@edx/paragon';

const ExamplePage = () => {
  debugger;
  // console.log(state.examplePage.courses);
  
  return (
    <main>
      <Container className="py-5">
        <h1>Example Page</h1>
        <p>Hello world!</p>
      </Container>
    </main>
  );
};

ExamplePage.contextType = AppContext;

export default connect(
  examplePageSelector,
  {
    fetchCourses,
  },
)(ExamplePage);
