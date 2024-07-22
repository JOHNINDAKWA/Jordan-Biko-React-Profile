import './Navbar.css';
import data from './list';
import profile from '../../assests/biko1.jpg';
import { IoColorPaletteSharp } from 'react-icons/io5';

const Navbar = ({ onThemeIconClick }) => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={profile} alt="logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}> {item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' onClick={onThemeIconClick}><IoColorPaletteSharp /></button>
      </div>
    </nav>
  );
};

export default Navbar;