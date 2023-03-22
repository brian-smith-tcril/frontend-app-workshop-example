import { Carousel } from '@edx/paragon';

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
]

const examplePrevIcon = (
  <img width="100px" src="https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/73023da716b7b11723a2eea5d2a76a2ab944c55d/aiga_left_arrow_bg.svg" />
);

const exampleNextIcon = (
  <img width="100px" src="https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/73023da716b7b11723a2eea5d2a76a2ab944c55d/aiga_right_arrow_bg.svg" />
);

const ExampleCarousel = () => (
  <Carousel prevIcon={examplePrevIcon} nextIcon={exampleNextIcon}>
    {exampleCarouselData.map(carouselEntryData => 
      <Carousel.Item>
        <div class="img-gradient">
          <img
            className="d-block w-100"
            src={carouselEntryData.imageUrl}
            alt={carouselEntryData.imageAltText}
          />
        </div>
        <Carousel.Caption>
          <h1 style={{color: "white"}}>{carouselEntryData.title}</h1>
          <p>{carouselEntryData.description}</p>
        </Carousel.Caption>
      </Carousel.Item>  
    )}
  </Carousel>
);

export default ExampleCarousel;
