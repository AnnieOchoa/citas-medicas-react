const Button = ({ name, type, onClick }) => (
  <button
    onClick={onClick}
    className={type === 'outlined' ? 'outlined-btn' : 'filled-btn'}
  >
    {name}
  </button>
);

export default Button;
