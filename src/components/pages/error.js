import errorImage from "./error/rsz_architectural-engineering-web-design-building-web-page-others-96483ac28df2196485a6a2e6625637c4 (1).png";
function Error() {
  return (
    <>
      <div className="error container">
        <img src={errorImage} alt="" />
        <div>
          <h1 className="displaytitle">Coming Soon!</h1>
          <p className="para">
            The Page your are looking for is currently under construction.
          </p>
          <p className="para">Feel free to contact us for any requirements.</p>
          <h2 className="sectiontitle">Contact</h2>

          <p className="para">+xx-xxx xxx xxx</p>
          <p className="para">info@littlelemon.com</p>
        </div>
      </div>
    </>
  );
}
export default Error;
