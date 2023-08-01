import React, { useState } from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  
    const { name, label, id, styles, value, placeholder, onChange, charLimit } = props;

    const [state, setState] = useState({
        charLimitExceed: false
    })
  
    function validation(event) {
        console.log(state)

        event.target.value.length <= charLimit 
        ? setState( (prevState) => {
            return {
                ...prevState,
                charLimitExceed: true
            }
        })
        : setState( (prevState) => {
            return {
                ...prevState,
                charLimitExceed: false
            }
        })

    }

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      {state.charLimitExceed && <span> BEEP BEEP</span>}
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        className={styles}
        placeholder={placeholder}
        onChange={(e) => {
            validation(e)
            onChange(e)
        }}
      />
    </div>
  );
}

TextInput.propTypes = {
    name: PropTypes.string, 
    id: PropTypes.string, 
    label: PropTypes.string,
    styles: PropTypes.object, 
    value: PropTypes.string, 
    placeholder: PropTypes.string, 
    onChange: PropTypes.func,
    charLimit: PropTypes.number
};

export default TextInput;
