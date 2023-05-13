type HeaderProps = {
  mainText: string;
  subText?: string;
};

const Header: React.FC<HeaderProps> = ({ mainText, subText }) => {
  return (
    <header>
      <h1>{mainText}</h1>
      {subText && <h2>subText</h2>}
    </header>
  );
};

export default Header;
