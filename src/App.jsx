import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

function App() {
  const cardData = [
    {
      image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      title: "Card Title 1",
      paragraph: "This is the first card's description.",
      buttonText: "Learn More",
    },
    {
      image: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
      title: "Card Title 2",
      paragraph: "This is the second card's description.",
      buttonText: "Get Started",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2MYiZcY4RLXawT35_fTX9XI55VDxX7QNbuSPCgqYdP8EibuNwDhSexK5pMvXUeO3q8Q&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lwrOYDPSz9mjrHYc0Py79cY_cRebzNeE2bFEcXP4bwhAk6f22xjGgPyA_n3NRslhQ8I&usqp=CAUhttps://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      title: "Card Title 3",
      paragraph: "This is the third card's description.",
      buttonText: "Buy Now",
    },
  ];
  return (
    <>
      <Header />
      <Slider />
      <Cards data={cardData} />
      <Footer/>

    </>
  );
}

export default App;
