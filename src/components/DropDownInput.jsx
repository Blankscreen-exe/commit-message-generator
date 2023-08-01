import React from "react";
import PropTypes from "prop-types";

function DropDownInput(props) {
  const { name, label, id, styles, value, placeholder, onChange, data, validation } = props;
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={id}
        name={name}
        value={value}
        className={styles}
        onChange={(e) => {
          validation(e);
          onChange(e);
        }}
        aria-label="Default select example"
      >
        {Object.keys(data).map((key, ind) =>
          ind === 0 ? (
            <option title={data[key].description} selected key={key}>
              {data[key].name}
            </option>
          ) : (
            <option title={data[key].description} key={key}>
              {data[key].name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

DropDownInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  styles: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.object,
  validation: PropTypes.func
};

export default DropDownInput;
