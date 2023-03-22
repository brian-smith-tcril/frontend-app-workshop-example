import { Container } from '@edx/paragon';
import { useGetCoursesQuery } from './data/coursesApiService';
import ExampleCarousel from './ExampleCarousel';

const ExamplePage = () => {
  const { data, error, isLoading } = useGetCoursesQuery();

  return (
    <main>
      <Container className="py-5">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <ExampleCarousel carouselData={data}/>
        ) : null}
      </Container>
    </main>
  );
};

export default ExamplePage;
