import Button from "./Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id='header-container'>
      <img className='logo' src='/content/logo.svg' alt='Manage Logo' />
      <Navbar />
      <Button style='shadow' text='Get Started' />
    </div>
  );
};

export default Header;
