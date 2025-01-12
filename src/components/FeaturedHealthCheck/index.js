import { useState } from 'react';
import './index.css';
import Packages from '../Packages';

const FeaturedHealthCheckUp = ({ featuredHealthCheckUpData }) => {
  const { categories, props } = featuredHealthCheckUpData;

  const packages = props[0]?.packages || [];

  const [selectedCategory, setSelectedCategory] = useState('Popular');

  const categoryList = categories[10386];
  if (!categoryList) {
    console.error('Categories with key 10386 not found');
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  if (!categoryList) {
    return <p>Error: Categories data is missing</p>;
  }

  return (
    <>
      <div className='featured-container'>
        <div className='featured-health-checkup__header'>
          <h1 className='featured-health-checkup__heading'>
            Featured Health Check-ups
          </h1>
          <button className='featured-health-checkup__view-all'>
            View All
          </button>
        </div>
        <div className='featured-health-checkup__list-container'>
          <ul className='featured-health-checkup__list'>
            {categoryList.map((category, index) => (
              <li
                key={index}
                className={`featured-health-checkup__list-item ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <Packages packages={packages} />
      </div>
    </>
  );
};

export default FeaturedHealthCheckUp;
