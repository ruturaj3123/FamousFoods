import React, { useState } from "react";
import "./styles.css";

const cityList = ["Pune", "Mumbai", "Delhi", "Indore"];

const foodDictionary = {
  Pune: {
    foods: ["Misal Pav", "Camp Burger", "Dabeli", "Vada Pav"],
    ratings: ["5/5", "4/5", "3.5/5", "3/5"]
  },

  Mumbai: {
    foods: ["Vada Pav", "Pav Bhaji", "Egg Franky", "Bhel"],
    ratings: ["5/5", "4.5/5", "4/5", "3.5/5"]
  },

  Delhi: {
    foods: ["Chhole Bhature", "Momos", "Kebabs", "Biryani"],
    ratings: ["5/5", "4.5/5", "4/5", "4/5"]
  },

  Indore: {
    foods: ["Dahi vada", "Pohe Jilebi", "Moong bhaje", "Khatta Samosa"],
    ratings: ["5/5", "4.5/5", "4/5", "3/5"]
  }
};

export default function App() {
  const [foodName, setFoodName] = useState("Delhi");

  return (
    <div className="App">
      <div className="header">
        <h2>🍔famousFoods</h2>
        <p>some famous local food recommendations</p>
      </div>

      <main>
        <div className="cities">
          <p>Select City</p>
          {cityList.map((item, index) => {
            return (
              <button
                className="cityButton"
                key={index}
                onClick={() => setFoodName(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="recommendations">
          <p>Recommendations: </p>
          <ul>
            {foodDictionary[foodName].foods.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span> {foodDictionary[foodName].ratings[index]} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
