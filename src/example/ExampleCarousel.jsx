import PropTypes from 'prop-types';

import { Carousel } from '@edx/paragon';

const examplePrevIcon = (
  <img width="100px" alt="Previous" src="https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/73023da716b7b11723a2eea5d2a76a2ab944c55d/aiga_left_arrow_bg.svg" />
);

const exampleNextIcon = (
  <img width="100px" alt="Next" src="https://raw.githubusercontent.com/brian-smith-tcril/workshop-images/73023da716b7b11723a2eea5d2a76a2ab944c55d/aiga_right_arrow_bg.svg" />
);

const ExampleCarousel = ({ carouselData }) => (
  <Carousel prevIcon={examplePrevIcon} nextIcon={exampleNextIcon}>
    {carouselData.map(carouselEntryData => (
      <Carousel.Item>
        <div className="img-gradient">
          <img
            className="d-block w-100"
            src={carouselEntryData.imageUrl}
            alt={carouselEntryData.imageAltText}
          />
        </div>
        <Carousel.Caption>
          <h1 style={{ color: 'white' }}>{carouselEntryData.title}</h1>
          <p>{carouselEntryData.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

ExampleCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.object),
}

export default ExampleCarousel;
