import { useState } from 'react';

const Accordion = ({ items, language = 'en' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div 
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
            role="button"
            tabIndex="0"
            aria-expanded={activeIndex === index}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion(index);
              }
            }}
          >
            <h3>{item.question}</h3>
            <span className="accordion-icon">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          <div 
            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
            style={{
              maxHeight: activeIndex === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease'
            }}
          >
            <div className="accordion-content-inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .accordion-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .accordion-item {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-bottom: 10px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .accordion-header {
          padding: 20px;
          background: #f8f9fa;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s ease;
          user-select: none;
        }

        .accordion-header:hover {
          background: #e9ecef;
        }

        .accordion-header.active {
          background: #90EE90;
          color: #333;
        }

        .accordion-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .accordion-icon {
          font-size: 24px;
          font-weight: bold;
          min-width: 30px;
          text-align: center;
        }

        .accordion-content {
          background: white;
          transition: max-height 0.3s ease;
        }

        .accordion-content-inner {
          padding: 20px;
        }

        .accordion-content p {
          margin: 0;
          line-height: 1.6;
          color: #333;
        }

        @media (max-width: 768px) {
          .accordion-header {
            padding: 15px;
          }

          .accordion-header h3 {
            font-size: 16px;
          }

          .accordion-content-inner {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Accordion;
