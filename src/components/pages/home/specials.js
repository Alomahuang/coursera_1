import Card from "./Card";

function Specials() {
  const specials = [
    {
      name: "Greek Salad",
      id: 1,
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      getImageSrc: () => require("./assets/homepage/specials/greek-salad.jpg"),
    },
    {
      name: "Brushetta",
      id: 2,
      price: "$7.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      getImageSrc: () => require("./assets/homepage/specials/bruchetta.jpg"),
    },
    {
      name: "Lemon Dessert",
      id: 3,
      price: "$11.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      getImageSrc: () =>
        require("./assets/homepage/specials/lemon-dessert.jpg"),
    },
  ];

  return (
    <>
      <div className="specials" id="menu-section">
        <div className="title">
          <h1 className="displaytitle">This week Specials </h1>
          <button className="button primary buttontxt">Order Online</button>
        </div>
        <div className="container">
          {specials.map((special) => (
            <Card
              key={special.id}
              title={special.name}
              description={special.description}
              price={special.price}
              image={special.getImageSrc()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Specials;
