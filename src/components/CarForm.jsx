import React from 'react'

const CarForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result)
  };

  return (
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        width: "50%"
      }}>
        <label htmlFor="make">Make</label>
        <input type="text" name="make" id="make" />
        <label htmlFor="model">Model</label>
        <input type="text" name="model" id="model" />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />

        <button type="submit">Create Car</button>
      </form>
  )
}

export default CarForm