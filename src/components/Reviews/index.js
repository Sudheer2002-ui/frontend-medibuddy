import ReviewItem from '../ReviewItem';
import './index.css';

const Reviews = ({ userReviewsData }) => {
  const { title, props } = userReviewsData;

  return (
    <div className='reviews-container'>
      <h1 className='reviews-heading'>{title}</h1>
      <ul className='reviews-list'>
        {props.map((each, index) => (
          <li className='reviews-item' key={index}>
            <ReviewItem reviewData={each} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
