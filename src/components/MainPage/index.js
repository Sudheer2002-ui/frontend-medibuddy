import { Component } from 'react';
import Icons from '../Icons';
import Banners from '../Banners';
import FeaturedHealthCheckUp from '../FeaturedHealthCheck';
import Reviews from '../Reviews';
import Othres from '../Others';
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions';
const apiConstants = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
};

class MainPage extends Component {
  state = {
    apiStatus: apiConstants.inProgress,
    icons: null,
    featuredHealthCheckUp: null,
    userReviews: null,
    faqs: null,
    others: null,
    banners: null,
  };
  getDetails = async () => {
    this.setState({ apiStatus: apiConstants.inProgress });
    try {
      const response = await fetch(
        'https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const pageConfig = data[0]?.page_config;
      console.log(pageConfig);
      if (Array.isArray(pageConfig)) {
        this.setState({
          icons: pageConfig[0] || null,
          banners: pageConfig[1] || null,
          featuredHealthCheckUp: pageConfig[2] || null,
          userReviews: pageConfig[5] || null,
          faqs: pageConfig[6] || null,
          others: pageConfig[7] || null,
          apiStatus: apiConstants.success,
        });
      } else {
        throw new Error('Unexpected structure: page_config is not an array');
      }
    } catch (error) {
      console.error(error.message);
      this.setState({ apiStatus: apiConstants.failure });
    }
  };
  componentDidMount() {
    this.getDetails();
  }
  renderContent = () => {
    const {
      icons,
      banners,
      featuredHealthCheckUp,
      userReviews,
      others,
      faqs,
      apiStatus,
    } = this.state;

    switch (apiStatus) {
      case apiConstants.inProgress:
        return <h1>Loading...</h1>;

      case apiConstants.success:
        return (
          <>
            <Icons iconData={icons} />
            <Banners bannerData={banners} />
            <FeaturedHealthCheckUp
              featuredHealthCheckUpData={featuredHealthCheckUp}
            />
            <Othres othersData={others} />
            <Reviews userReviewsData={userReviews} />
            <FrequentlyAskedQuestions faqs={faqs} />
          </>
        );

      case apiConstants.failure:
        return <h1>Something went wrong. Please try again later.</h1>;

      default:
        return null;
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default MainPage;
