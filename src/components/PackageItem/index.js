import React from 'react';
import './index.css';

const PackageItem = (props) => {
  const { eachPackage } = props;
  const {
    packageDisplayName,
    isSponsored,
    reportsTatText,
    testCount,
    isRadiologyIncluded,
    visitType,
    testsSummary,
    fastingHoursText,
    price,
  } = eachPackage;

  return (
    <div className='package-card'>
      {isSponsored && <div className='sponsored-tag'>Sponsored</div>}
      <h3 className='package-title'>{packageDisplayName}</h3>
      <p className='report-time'>📄 Reports in {reportsTatText}</p>
      <p className='test-count'>
        <strong>{testCount} Tests</strong>
      </p>
      <ul className='test-summary'>
        {testsSummary.map((test, index) => (
          <li key={index}>{test}</li>
        ))}
      </ul>
      {isRadiologyIncluded && <p className='includes'>🩻 Includes Radiology</p>}
      <div className='package-info'>
        <p>
          <strong>Fasting:</strong> {fastingHoursText}
        </p>
        <p>
          <strong>Available at:</strong> {visitType}
        </p>
      </div>
      <div className='package-footer'>
        <p className='price'>₹{price}</p>
        <div className='quantity-control'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
