import { Container } from '@edx/paragon';
import { useGetCoursesQuery } from './data/coursesApiService';

const ExamplePage = () => {
  const { data } = useGetCoursesQuery();

  if (data) {
    console.log(data);
  }

  return (
    <main>
      <Container className="py-5">
        <h1>Example Page</h1>
        <p>Hello world!</p>
      </Container>
    </main>
  );
};

export default ExamplePage;
