import { Link } from 'react-router-dom';
import logo from '../pokeball.jpeg'
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to='/pokemon-pokedex'>
        <img className='logo' src={logo} alt="Pokemon Logo" />
      </Link>
      <h1>PokeDex</h1>
      <div className='nav-links'>
        <Link to='/pokemon-pokedex'> HOME </Link>
        <Link to='/pokemon-pokedex/quiz'> Quiz </Link>
      </div>
    </header>
  );
}

export default Header;