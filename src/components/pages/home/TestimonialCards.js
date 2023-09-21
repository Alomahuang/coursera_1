function TestimonialCards({ avatar, description, name }) {
  return (
    <>
      <div className="testicard">
        <div className="name">
          <img src={avatar} alt="" />
          <h3 className="leadtext">{name}</h3>
        </div>
        <p className="para">{description}</p>
      </div>
    </>
  );
}

export default TestimonialCards;
