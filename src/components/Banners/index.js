import Slider from 'react-slick';
import BannerItem from '../BannerItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banners = ({ bannerData }) => {
  const { props } = bannerData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <Slider {...settings}>
        {props.map((eachBanner) => (
          <BannerItem
            key={eachBanner.id}
            deepLink={eachBanner.deeplink}
            bannerUrl={eachBanner.bannerUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
