import "./styles.css"
import { useState } from "react";

export const QuestionItem = ({ question, saveAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClickOption = (option) => {
    setSelectedOptions((prev) => [...prev, option]);
  };

  return (
    <div className="container">
      <div className="selected-order">
        <h2>Ordem Selecionada:</h2>
        <ol>
          {selectedOptions.map((option) => (
            <li key={option.id}>{option.label}</li>
          ))}
        </ol>
      </div>

      <div className="options">
        {question.options.map((option) => (
          <button
            key={option.id}
            className="option-button"
            onClick={() => handleClickOption(option)}
            disabled={selectedOptions.some((el) => el.id === option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};