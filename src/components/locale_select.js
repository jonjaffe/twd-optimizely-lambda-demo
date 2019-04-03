import React from "react";

const LocaleSelect = props => {
  if (!props.locales) {
    return <div />;
  }

  //Make options from the current locale options
  let localeOptions = props.locales.map(code => (
    <option value={code} key={code}>
      {code}
    </option>
  ));

  //Return JSX with select control for choosing locale options
  return (
    <div className={`text-center border-0 text-center text-md-right`}>
      <select
        className="locale-control p-2 mb-3"
        onChange={e => {
          props.handleSelectLocale(e.target.value);
        }}
      >
        {localeOptions}
      </select>
    </div>
  );
};

export default LocaleSelect;
