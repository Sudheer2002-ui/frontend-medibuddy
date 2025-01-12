import './index.css';

const IconItem = (props) => {
  const { eachItem } = props;
  const { iconText, iconUrl, deeplink } = eachItem;

  return (
    <a
      href={deeplink}
      className='icon-link'
      target='_blank'
      rel='noopener noreferrer'
    >
      <li className='icon-item'>
        <img src={iconUrl} alt={iconText} className='icon-item-img' />
        <span className='icon-item-text'>{iconText}</span>
      </li>
    </a>
  );
};

export default IconItem;
