import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./components/pages/bookings/ReservationPage";
import Feature from "./components/pages/home/feature";

test("Renders the HomePage heading", () => {
  render(
    <BrowserRouter>
      <Feature />
    </BrowserRouter>
  );
  const h1Element = screen.getByText("Little Lemon");
  expect(h1Element).toBeInTheDocument();
});

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const h1Element = screen.getByText("Reserve a Table");
  expect(h1Element).toBeInTheDocument();
});

describe("Booking page", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test("should not have default booking time options", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const timeOptions = await screen.findAllByTestId("booking-time-option");

    expect(timeOptions.length).toEqual(1);
  });

  test("should update available booking time options when changing booking date", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const bookingDate = "2023-10-01";
    const dateInput = screen.getByLabelText(/Choose date*/);
    const initialTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});

describe("Booking page", () => {
  test("should be able to submit form with all details", async () => {
    const bookingDate = "2023-10-01";
    const name = "abcd";
    const email = "john@email.com";
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
        <BookingPage onSubmit={handleSubmit} />
      </BrowserRouter>
    );
    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const dateInput = screen.getByLabelText(/Choose date*/);
    const timeInput = screen.getByLabelText(/Choose time*/);
    const guestInput = screen.getByLabelText(/Number of Guests*/);
    const nameInput = screen.getByLabelText(/Name*/);
    const emailInput = screen.getByLabelText(/E-Mail*/);
    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    const guestInputOptions = screen.findAllByTestId("guest-option");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);

    fireEvent.change(timeInput, { target: { value: updatedTimeOptions[2] } });
    fireEvent.blur(timeInput);

    fireEvent.change(guestInput, { target: { value: guestInputOptions[2] } });
    fireEvent.blur(guestInput);

    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.blur(nameInput);

    fireEvent.change(emailInput, {
      target: { value: email },
    });
    fireEvent.blur(emailInput);

    expect(emailInput.value).toMatch(emailFormat);
    expect(nameInput.value.length).toBeGreaterThanOrEqual(2);

    expect(submitButton).not.toBeDisabled();
  });
  test("submit button to be disabled without all required details", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const bookingDate = "2023-10-01";
    const dateInput = screen.getByLabelText(/Choose date*/);
    const timeInput = screen.getByLabelText(/Choose time*/);
    const guestInput = screen.getByLabelText(/Number of Guests*/);
    const nameInput = screen.getByLabelText(/Name*/);
    const emailInput = screen.getByLabelText(/E-Mail*/);
    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    const guestInputOptions = screen.findAllByTestId("guest-option");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);

    fireEvent.change(timeInput, { target: { value: updatedTimeOptions[2] } });
    fireEvent.blur(timeInput);

    fireEvent.select(guestInput, { target: { value: guestInputOptions[2] } });
    fireEvent.blur(guestInput);

    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.blur(nameInput);

    fireEvent.change(emailInput, {
      target: { value: "" },
    });
    fireEvent.blur(emailInput);
    expect(submitButton).toBeDisabled();
  });
});
