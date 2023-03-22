import { Container } from '@edx/paragon';
import { useGetCoursesQuery } from './data/coursesApiService';
import ExampleCarousel from './ExampleCarousel';

const ExamplePage = () => {
  const { data } = useGetCoursesQuery();

  if (data) {
    console.log(data);
  }

  return (
  <main>
    <Container className="py-5">
      <ExampleCarousel />
    </Container>
  </main>
  );
};

export default ExamplePage;
