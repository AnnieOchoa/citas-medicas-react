const Dropdown = ({label, options = [], value, onChange}) => {

  return (
    <div className="regular-dropdown">
      <label>{label}</label>

      <select onChange={onChange} defaultValue={value}>
        <option value={value} disabled>
          Selecciona una opción
        </option>
        {options.map(({value,name}) => ( 
            <option key={value} value={value}>{name}</option>
        ))}
      </select>

    </div>
  );
};

export default Dropdown;
