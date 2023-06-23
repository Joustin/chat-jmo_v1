type IconButtonProps = {
  icon: JSX.Element;
  text: string;
  url: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, text, url }) => {
  return (
    <button onClick={() => window.open(url, "_blank")}>
      {icon}
      <div>{text}</div>
    </button>
  );
};

export default IconButton;
