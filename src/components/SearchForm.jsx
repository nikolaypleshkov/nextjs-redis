import React from "react";

const SearchForm = () => {
  const [cars, setCars] = React.useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const q = e.target.value;

      if (q.length > 2) {
        const params = new URLSearchParams({ q });

        const res = await fetch("/api/search?" + params);

        const result = await res.json();

        setCars(result["cars"]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="text" name="search" id="search" onChange={handleSearch} />

      <ul>
        {cars.map((car) => (
          <li key={car.entityId}>
            {car.make} {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
