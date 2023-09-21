import { useNavigate } from "react-router-dom";
function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="reservations" id="confirmation-section">
        <div className="container">
          <div className="formContainer">
            <h1 className="confirmation subtitle">Booking Confirmed!</h1>

            <p className="para">
              Your Booking has been confirmed and the details has been sent to
              you via your email!
            </p>
            <p>Kindly contact us if you need to change your reservation!</p>
            <div className="space"></div>

            <div className="buttons">
              <button
                className="button secondary buttontxt"
                onClick={() => {
                  navigate("/booking/bookingform");
                }}
              >
                Book another Table
              </button>
              <button
                className="button primary buttontxt"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmationPage;
