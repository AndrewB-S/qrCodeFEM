import imgUrl from "../images/image-qr-code.png";
const QRCode = () => {
  return (
    <section className="qrCode">
      <div className="card">
        <img id="qrCodeImg" src={imgUrl} alt="qr code" />
        <div className="qrText">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </section>
  );
};

export default QRCode;
