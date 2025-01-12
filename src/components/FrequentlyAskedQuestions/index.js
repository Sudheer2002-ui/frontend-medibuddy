import React, { useState } from 'react';
import './index.css';

const FrequentlyAskedQuestions = ({ faqs }) => {
  const { title, props } = faqs;
  console.log(title);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <h1 className='faq-title'>{title}</h1>
      <div className='faq-list'>
        {props.slice(1).map((faq, index) => (
          <div className='faq-item' key={index}>
            <div className='faq-question-container'>
              <h3 className='faq-question'>{faq.question}</h3>
              <div className='faq-toggle' onClick={() => handleToggle(index)}>
                {expandedIndex === index ? '-' : '+'}
              </div>
            </div>
            {expandedIndex === index && (
              <p className='faq-answer'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
