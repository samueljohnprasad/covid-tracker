import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, StylesProvider } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
const CountryPicker = ({ handlecountryChange }) => {
  const [fetchedfetchCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  // console.log("fetchedc",fetchedfetchCountries)
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handlecountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedfetchCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}{" "}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
