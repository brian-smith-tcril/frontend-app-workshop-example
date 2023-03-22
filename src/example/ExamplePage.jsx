import { Container } from '@edx/paragon';
import { useGetCoursesQuery } from './data/coursesApiService';
import ExampleCarousel from './ExampleCarousel';

const exampleCarouselData = [
  {
    title: 'Example Title 1',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/brain-5443260_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman and computer chips (red)',
  },
  {
    title: 'Example Title 2',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/brain-6010961_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman and computer chips (teal)',
  },
  {
    title: 'Example Title 3',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/woman-5477735_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman and computer chips (yellow/brown)',
  },
  {
    title: 'Example Title 4',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/woman-5576945_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman at a computer (teal)',
  },
  {
    title: 'Example Title 5',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/woman-5628328_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman at a computer (yellow)',
  },
  {
    title: 'Example Title 6',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/woman-5750666_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman at a computer (light blue/brown)',
  },
  {
    title: 'Example Title 7',
    description: 'This is an example description. It is quite descriptive, and also an example.',
    imageUrl: 'https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/main/woman-5888934_1920.jpg',
    imageAltText: 'Stylized silhouette of a woman at a computer (pink)',
  },
];


const ExamplePage = () => {
  const { data } = useGetCoursesQuery();

  if (data) {
    console.log(data);
  }

  return (
  <main>
    <Container className="py-5">
      <ExampleCarousel carouselData={exampleCarouselData}/>
    </Container>
  </main>
  );
};

export default ExamplePage;
