import Button from './Button';

const Header = ({ctaHandler}) => {
  return (
    <header className="main-header">
      <div className="main-header-wrapper container">
        <div className="main-header__logo ">
          <img
            src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710217687/clinica-salud-high-resolution-logo-transparent_cua3yv.svg"
            alt="logo"
          />
        </div>

        <div className="main-header__cta">
          <Button
            onClick={ctaHandler}
            type="outlined"
            name="Ver citas"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
