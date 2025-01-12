import './index.css';

const Othres = ({ othersData }) => {
  const { props } = othersData;

  return (
    <div className='others-container'>
      <h1 className='others-title'>Trusted by 20,00,000+ Users Every Month</h1>
      <div className='others-list'>
        {props.map((item, index) => {
          const { title, img, subText, subTitle } = item;
          return (
            <div key={index} className='others-item'>
              <img src={img} alt={title} className='others-image' />
              <h2 className='others-item-title'>{title}</h2>
              <h3 className='others-item-subtitle'>{subTitle}</h3>
              <p className='others-item-text'>{subText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Othres;
