import { Link } from 'react-router-dom';

function Header() {
  const toggleMenu = () => {
    document.querySelector('.nav-links').classList.toggle('active');
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">InfraDev</Link>
          <button className="menu-toggle" aria-label="Открыть меню" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/#meetups">Митапы</Link></li>
            <li><Link to="/cfp">Стать спикером</Link></li>
            <li><a href="https://t.me/infradevcommunity" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
