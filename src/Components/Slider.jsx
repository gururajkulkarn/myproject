import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className='m-5'>
    <Carousel>
      <Carousel.Item interval={100}>
        <img
          className="d-block w-100"
          src="images/12.jpg"
          alt="First slide"
          height={400}
        />

      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="images/121.png"
          alt="Second slide"
          height={400}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/12.jpg"
          alt="Third slide"
          height={400}
        />
   
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="images/121.png"
          alt="Second slide"
          height={400}
        />
      
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;