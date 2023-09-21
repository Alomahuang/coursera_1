import React from "react";

function BookingForm(props) {
  const selectOccasion = ["Select Occasion", "Birthday", "Anniversary"];

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  return (
    <>
      <div className="container2">
        <div className="bookingpage">
          <h1 className="subtitle">Reserve a Table</h1>
          <label htmlFor="res-date" className="cartitle">
            Choose date*
          </label>
          <input
            data-testid="res-date"
            className="para inputBox"
            type="date"
            id="res-date"
            name="res-date"
            min={minDate()}
            value={props.date}
            onChange={props.onDateChangeHandler}
            onFocus={() => props.setDateTouched(true)}
          />
          {props.isDateTouched && props.date == "" ? (
            <p className="para message error">*Please select Valid Date</p>
          ) : (
            <p className="para message error"></p>
          )}

          <label htmlFor="res-time" className="cartitle">
            Choose time*
          </label>

          <select
            className="para inputBox"
            id="res-time"
            name="res-time"
            onFocus={() => {
              props.setTime({
                ...props.time,
                isTouched: true,
              });
            }}
            onChange={(e) => {
              props.setTime({
                ...props.time,
                value: e.target.value,
                isTouched: true,
              });
            }}
          >
            <option>Select time</option>
            {props.updatedAvailableTime.map((time, index) => (
              <option
                data-testid="booking-time-option"
                id="res-time-options"
                key={index}
                value={time}
              >
                {time}
              </option>
            ))}
          </select>

          {props.time.isTouched && props.time.value == "" ? (
            <p className="para message error">*Please select valid time</p>
          ) : (
            <p className="para message error"></p>
          )}
          <label htmlFor="guests" className="cartitle">
            Number of Guests*
          </label>

          <select
            className="para inputBox"
            id="guests"
            name="guests"
            onFocus={() => {
              props.setGuests({
                ...props.guests,
                isTouched: true,
              });
            }}
            onChange={(e) => {
              props.setGuests({
                ...props.guests,
                value: e.target.value,
                isTouched: true,
              });
            }}
          >
            <option>Select Number of Guests</option>
            {props.noOfGuests.map((item) => (
              <option id="guest-option" key={item.id} value={item.value}>
                {item.description}
              </option>
            ))}
          </select>

          {props.guests.isTouched && props.guests.value == "" ? (
            <p className="para message error">
              *Please select valid number of guests
            </p>
          ) : (
            <p className="para message error"></p>
          )}

          {
            // guests selection as radio buttons
            /* <label
            htmlFor="guests"
            className="cartitle"
            id="guests"
            value={props.guests}
            aria-label="Number of guests*"
          >
            Number of guests*
          </label>

          <div className="guestsRadio">
            {props.noOfGuests.map((item) => (
              <label
                id={item.value}
                key={item.id}
                htmlFor="guests"
                className="radioLabel para radio"
              >
                <input
                  type="radio"
                  className="para radio"
                  id={item.value}
                  value={item.value}
                  name="guests"
                  checked={item.checked}
                  data-testid="guest-option"
                  onChange={(e) => {
                    props.setGuests({ ...props.guests, value: e.target.value });
                  }}
                  width="16px"
                ></input>
                {item.description}
              </label>
            ))}
          </div>
          <p className="para message">
            *Please select No. of Guests to proceed
          </p> */
          }

          <label htmlFor="occasion" className="cartitle ">
            Occasion
          </label>
          <select
            className="para inputBox dropdown"
            id="occasion"
            value={props.occassion}
            onChange={(e) => props.setOccasion(e.target.value)}
          >
            {selectOccasion.map((occassion, index) => (
              <option key={index}>{occassion}</option>
            ))}
          </select>

          <label
            htmlFor="preference"
            className="cartitle"
            value={props.seatingPreference}
          >
            Seating Preference
          </label>
          <div className="guestsRadio">
            <label htmlFor="Indoor" className="para radio">
              <input
                type="radio"
                className="para radio"
                id="Indoor"
                value="indoor"
                name="seatingpreference"
                checked
                onChange={(e) => props.setSeatingPreference(e.target.value)}
              />
              Indoor
            </label>

            <label htmlFor="Outdoor" className="para radio">
              <input
                type="radio"
                className="para radio"
                id="Outdoor"
                name="seatingpreference"
                value="outdoor"
                onChange={(e) => props.setSeatingPreference(e.target.value)}
              />
              Outdoor
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookingForm;
