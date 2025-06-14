function Header() {
  return (
    <header className="Header">
      <div className="Header-inner">
        <img src="profile.png" alt="Profile" className="Header-profile" />
        <div className="Header-content">
          <h1>Mei Cibulka</h1>
          <nav>
            <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
