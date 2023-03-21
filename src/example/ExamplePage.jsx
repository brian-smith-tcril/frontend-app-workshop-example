import { useContext } from 'react';
import { Container } from '@edx/paragon';
import { AppContext } from '@edx/frontend-platform/react';

const ExamplePage = () => {
  const { authenticatedUser } = useContext(AppContext);

  return (
    <main>
      <Container className="py-5">
        <h1>Hello {authenticatedUser ? authenticatedUser.username : "World"}!</h1>
      </Container>
    </main>
  );
}

export default ExamplePage;
