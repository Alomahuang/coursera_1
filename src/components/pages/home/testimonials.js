import TestimonialCards from "./TestimonialCards";

function Testimonials() {
  const testimonials = [
    {
      Customer: "John",
      id: 1,
      avatar: () => require("./assets/homepage/avatar/a1.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    },
    {
      Customer: "John Doe",
      id: 2,
      avatar: () => require("./assets/homepage/avatar/a2.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    },
    {
      Customer: "Jane",
      id: 3,
      avatar: () => require("./assets/homepage/avatar/a3.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    },
    {
      Customer: "Jane Doe",
      id: 4,
      avatar: () => require("./assets/homepage/avatar/a4.jpg"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    },
  ];

  return (
    <>
      <div className="testimonials">
        <div className="title">
          <h1 className="displaytitle">Testimonials</h1>
        </div>

        <div className="container">
          {testimonials.map((testimonial) => (
            <TestimonialCards
              key={testimonial.id}
              name={testimonial.Customer}
              description={testimonial.description}
              avatar={testimonial.avatar()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Testimonials;
