import './index.css';

const BannerItem = ({ bannerUrl, deepLink }) => {
  return (
    <a href={deepLink} target='_blank' rel='noopener noreferrer'>
      <div className='banner-item'>
        <img src={bannerUrl} alt='Banner' className='banner-item-img' />
      </div>
    </a>
  );
};

export default BannerItem;
