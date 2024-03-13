const Datepicker = ({label, value, onChange}) => {

    return (
        <div className="regular-date">
            <label>{label}</label>
            <input value={value} onChange={onChange} type="date"/>
          </div> 
    )
}

export default Datepicker;