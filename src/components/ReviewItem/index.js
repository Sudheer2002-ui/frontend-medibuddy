import { CiStar } from 'react-icons/ci';
import './index.css';

const ReviewItem = (props) => {
  const { reviewData } = props;
  const { rating, content } = reviewData;

  return (
    <div className='review-item'>
      <p className='review-item-rating'>
        <CiStar className='review-star-icon' />
        {rating}
      </p>
      <p className='review-item-content'>{content}</p>
    </div>
  );
};

export default ReviewItem;
