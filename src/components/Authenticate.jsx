import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      <button onClick={handleClick}>Authenticate Token!</button>
      {successMessage ? (
        <div>
          <h2>Your token is {token}</h2>
        </div>
      ) : (
        <h2>You are not signed in! Please sign up</h2>
      )}
    </div>
  );
}
