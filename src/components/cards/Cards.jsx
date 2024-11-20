const Cards = ({ data }) => {
    console.log(data);
  
    return (
      <div className="cards-container d-flex flex-wrap gap-3 justify-content-center">
        {data.map((card, index) => (
          <div className="card mt-5" style={{ width: "18rem" }} key={index}>
            <img src={card.image} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.paragraph}</p>
              <a href="#" className="btn btn-primary">
                {card.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
  