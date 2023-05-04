const Header = () => {
  return (
    <header>
      <h1>Howdy y'all</h1>
      <h2>{import.meta.env.VITE_API_URL}</h2>
    </header>
  );
};

export default Header;
