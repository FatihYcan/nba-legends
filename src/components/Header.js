import logo from "../assets/nba.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="img" width={"200px"} className="logo" />
      <h1>NBA LEGENDS</h1>
    
    </div>
  );
};

export default Header;
