import "./Header.css";
import data from "./data";
import HeaderImage from "../../assests/biko.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Home Portrait" />
        </div>

        <h3>Jordan Biko</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia
          quam eveniet facilis odio repellendus rerum obcaecati consequuntur
          illum, ab veniam velit!
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
