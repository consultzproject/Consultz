import React, { useState } from "react";
import CountryList from "react-select-country-list";

const CountryDropdown = () => {
  const [country, setCountry] = useState("");

  const handleChange = (selectedCountry: React.SetStateAction<string>) => {
    setCountry(selectedCountry);
  };

  return (
    <div>
      <h1>Selected country: {country}</h1>
      <CountryList value={country} onChange={handleChange} />
    </div>
  );
};

export default CountryDropdown;
