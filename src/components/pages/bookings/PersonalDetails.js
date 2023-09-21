import React from "react";
import { isEmailValid } from "./utils/validateEmail";

function PersonalDetails(props) {
  return (
    <>
      <div className="personalDetails">
        <div className="">
          <h1 className="subtitle">Please fill in the following details</h1>
          <div className="container3">
            <label htmlFor="name" className="cartitle">
              Name*
            </label>

            <input
              type="text"
              id="name"
              className="para inputBox"
              required
              value={props.userName.value}
              data-testid="userName"
              onChange={(e) =>
                props.setUserName({ ...props.userName, value: e.target.value })
              }
              onBlur={() => {
                props.setUserName({ ...props.userName, isTouched: true });
              }}
            />
            {props.userName.isTouched && props.userName.value.length < 2 ? (
              <p className="para message error">
                *Name should be atleast 2 characters long.
              </p>
            ) : (
              <p className="para message error"></p>
            )}

            <label htmlFor="email" className="cartitle">
              E-Mail*
            </label>

            <input
              type="email"
              id="email"
              className="para inputBox"
              required
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              onBlur={(e) => {
                props.setEmailTouched(true);
              }}
            />
            {props.isEmailTouched && !isEmailValid(props.email) ? (
              <p className="para message error">
                *Please provide a valid Email Id
              </p>
            ) : (
              <p className="para message error"></p>
            )}

            <label htmlFor="message" className="cartitle">
              Specific Requests,if any...
            </label>
            <input
              type="text"
              id="message"
              className="para inputBox"
              value={props.message}
              onChange={(e) => props.setMessage(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalDetails;
