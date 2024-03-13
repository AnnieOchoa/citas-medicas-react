const Textinput = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="regular-textinput">
      <label>{name}</label>
      <input onChange={onChange} value={value} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Textinput;
