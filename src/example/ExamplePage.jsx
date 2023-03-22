import { Container } from '@edx/paragon';
import { useGetPokemonByNameQuery } from './data/pokeApiService'

const ExamplePage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  
  if (data) {
    console.log(data.species.name);
  }

  return (
    <main>
      <Container className="py-5">
        <h1>Example Page</h1>
        <p>Hello world!</p>
      </Container>
    </main>
  );
}

export default ExamplePage;
