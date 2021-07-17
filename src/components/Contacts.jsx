import "./styles/Contacts.css";
import qoute from "../images/left-qoute.svg";
const Contacts = () => {
  return (
    <div className="touch" id="contacts">
      <div className="container">
        <div className="touch-wrapper">
          <img src={qoute} alt="" />
          <h1>
            Need a front-end <span>developer ?</span>{" "}
          </h1>
          <h3>
            Let's <span>work</span> together !!
          </h3>
          <div className="message">
            <small>
              " Hello, my name is Paul, and i'm a front-end developer. If you
              think i could help your business, just contact me. "
            </small>
          </div>
          <div className="contact-details">
            <div className="flex">
              <i className="fas fa-envelope"></i>
              <a
                href="https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSBmlnSzdZvvqJFTGmvkLQrtwwqqkDRqdcstbDNQnqdtxvWpGStLHGsVbhGZcLlpLwHFMmXq"
                target="_blank"
                rel="noreferrer"
              >
                <p>pauljpintang@gmail.com</p>
              </a>
            </div>
            <div className="flex">
              <i className="fas fa-phone"></i>
              <p>+639553054546</p>
            </div>
            <div className="flex">
              <i className="fab fa-facebook-messenger"></i>
              <a
                href="https://m.me/pauljustin.pintang"
                target="_blank"
                rel="noreferrer"
              >
                <p>Messenger</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
