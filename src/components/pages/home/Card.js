const Card = ({ title, description, image, price }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} />
        <div>
          <h3 className="cartitle">{title}</h3>
          <h3 className="cartitle price">{price}</h3>
        </div>
        <p className="para">{description}</p>
        <button className="button primary buttontxt">Order a Delivery</button>
      </div>
    </>
  );
};

export default Card;
