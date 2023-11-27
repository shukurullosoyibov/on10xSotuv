import React, { useState } from 'react';

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div className={`border p-2 ${isOpen ? 'border-blue-500' : 'border-gray-200'}`}>
      <div
        className="flex justify-between items-center cursor-pointer transition-all duration-300"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="transform rotate-0  transition-roatate duration-300 " style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.293 8.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 10.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 010-1.414z"
            />
          </svg>
        </div>
      </div>
      <div className={`mt-2 overflow-hidden transition-max-h duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        {content}
      </div>
    </div>
  );
}

function Logo() {
  const [accordionState, setAccordionState] = useState(Array(3).fill(false)); // O'zgartirish uchun talonlarni sonini almashtiring

  const toggleAccordion = (index) => {
    const updatedState = [...accordionState];
    updatedState[index] = !updatedState[index];
    setAccordionState(updatedState);
  };

  return (
    <div>
      {accordionState.map((isOpen, index) => (
        <AccordionItem
          key={index}
          title={`Accordion Element ${index + 1}`}
          content={`Content for Accordion Element ${index + 1}`}
          isOpen={isOpen}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

export default Logo;
