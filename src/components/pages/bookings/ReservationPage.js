import React from "react";
import { fetchAPI, submitAPI } from "./api/api";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { isEmailValid } from "./utils/validateEmail";
import BookingForm from "./BookingForm";
import PersonalDetails from "./PersonalDetails";

function BookingPage() {
  const [date, setDate] = useState("");
  const [isDateTouched, setDateTouched] = useState(false);
  const [guests, setGuests] = useState({
    value: "",
    isTouched: false,
  });
  const [occassion, setOccasion] = useState("Select Occasion");
  const [seatingPreference, setSeatingPreference] = useState("indoor");
  const [time, setTime] = useState({
    value: "",
    isTouched: false,
  });
  const [userName, setUserName] = useState({
    value: "",
    isTouched: false,
  });
  const [email, setEmail] = useState("");
  const [isEmailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState("");

  let formData = {
    formDate: date,
    formTime: time.value,
    formGuests: guests.value,
    formOccassion: occassion,
    formSeatingPreference: seatingPreference,
    formUserName: userName.value,
    formEmail: email,
    formMessage: message,
  };

  const noOfGuests = [
    { value: 2, description: "1-2 Persons", id: 1 },
    { value: 4, description: "3-4 Persons", id: 2 },
    { value: 6, description: "5-6 Persons", id: 3 },
    { value: 8, description: "7-8 Persons", id: 4 },
    { value: 10, description: "9-10 Persons", id: 5 },
    { value: "More than 10", description: "More than 10", id: 6 },
  ];

  const navigate = useNavigate();

  function initializeTimes() {
    return { availableTimes: [""] };
  }

  const updateTimes = (state, { description, value }) => {
    if (description === "setDate") {
      const newAvailableTime = [...fetchAPI(value)];
      return {
        availableTimes: (state.availableTimes = [...newAvailableTime]),
      };
    } else if (description === "submitForm") {
      return { availableTimes: [""] };
    }
  };

  function clearForm() {
    setDate("");
    setDateTouched(false);
    setTime({
      value: "",
      isTouched: false,
    });
    setGuests("");
    setOccasion("Select Occasion");
    setUserName("");
    setEmail("");
    setMessage({
      value: "",
      isTouched: false,
    });
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  const updatedAvailableTime = [...state.availableTimes];

  function onDateChangeHandler(e) {
    setDate(e.target.value);
    dispatch({ description: "setDate", value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ description: "submitForm", value: "" });
    submitForm(formData);
    clearForm();
    navigate("/booking/confirmationpage");
  }

  function submitForm(formData) {
    submitAPI(formData);
  }

  const getIsFormValid = () => {
    return (
      date !== "" &&
      time.value !== "Select Time" &&
      guests.value !== "" &&
      userName.value.length >= 2 &&
      isEmailValid(email)
    );
  };

  return (
    <>
      <div className="reservations" id="reservations">
        <div className="container">
          <div className="formContainer">
            <form>
              <BookingForm
                date={date}
                setDate={setDate}
                guests={guests}
                setGuests={setGuests}
                occassion={occassion}
                setOccasion={setOccasion}
                seatingPreference={seatingPreference}
                setSeatingPreference={setSeatingPreference}
                onDateChangeHandler={onDateChangeHandler}
                updatedAvailableTime={updatedAvailableTime}
                time={time}
                setTime={setTime}
                noOfGuests={noOfGuests}
                isDateTouched={isDateTouched}
                setDateTouched={setDateTouched}
              />
              <PersonalDetails
                userName={userName}
                setUserName={setUserName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                isEmailTouched={isEmailTouched}
                setEmailTouched={setEmailTouched}
              />

              <div className="buttons">
                <button
                  className="button secondary buttontxt"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </button>

                <button
                  className="button primary buttontxt"
                  type="submit"
                  value="Make Your reservation"
                  disabled={!getIsFormValid()}
                  onClick={handleSubmit}
                  title={
                    !getIsFormValid()
                      ? "Fill in all required details"
                      : undefined
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookingPage;
