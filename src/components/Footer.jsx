import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import footerImg from "../images/small-logo.png";

function Footer() {
  return (
    <footer className='footer-container'>
      <section className='footer-section'>
        <div className='company-info logo-container'>
          <img src={footerImg} alt='Company Logo' />
        </div>
        <div className='company-info important-links'>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Menu</a>
            </li>
            <li>
              <a href='/reservations'>Reservations</a>
            </li>
            <li>
              <a href='/'>Order Online</a>
            </li>
            <li>
              <a href='/'>Login</a>
            </li>
          </ul>
        </div>
        <div className='company-info contact-info'>
          <h3>Contact</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className='icon' />
              123 Town Street, Chicago
            </li>
            <li>
              <FaPhone className='icon' />
              +62 123 456 789
            </li>
            <li>
              <FaEnvelope className='icon' />
              little@lemon.com
            </li>
          </ul>
        </div>
        <div className='company-info social-media'>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <FaFacebook className='icon' />
              <a href='/'>Facebook</a>
            </li>
            <li>
              <FaInstagram className='icon' />
              <a href='/'>Instagram</a>
            </li>
            <li>
              <FaTwitter className='icon' />
              <a href='/'>Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
