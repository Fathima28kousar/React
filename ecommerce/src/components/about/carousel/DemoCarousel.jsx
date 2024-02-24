import ImageSlider from './ImageSlider'

const DemoCarousel = () => {
  const slides = [
    {url:'http://localhost:3000/images/about.jpg',title:'organic'},
    {url:'http://localhost:3000/images/cabbage.jpg',title:'organic'},
    {url:'http://localhost:3000/images/Hero.png',title:'organic'},
    {url:'http://localhost:3000/images/lemon.jpg',title:'organic'},
  ]
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default DemoCarousel;