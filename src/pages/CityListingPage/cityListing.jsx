import { useState } from "react";
import CityForm from "../../components/CityListingComponents/cityForm";
import CityDisplay from "../../components/CityListingComponents/cityDisplay";
import ErrorMessage from "../../components/CityListingComponents/errorMessage";

function CityList() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");

  const handleAddCity = (e) => {
    e.preventDefault();

    const trimmedCity = city.trim().toLowerCase();

    if (!trimmedCity) {
      setError("City name cannot be empty or whitespace");
      return;
    }

    if (cities.includes(trimmedCity)) {
      setError("City already exists in the list");
      return;
    }

    setError("");
    setCities([...cities, trimmedCity]);
    setCity("");
  };

  return (
    <div className="p-6 max-w-md sm:max-w-lg lg:max-w-xl mx-auto mt-10 bg-[#e0e7ec] shadow-md">
      <CityForm city={city} setCity={setCity} handleAddCity={handleAddCity} />
      {error && <ErrorMessage message={error} />}
      <CityDisplay cities={cities} />
    </div>
  );
}

export default CityList;
