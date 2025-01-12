import IconItem from '../IconItem';
import './index.css';

const Icons = ({ iconData }) => {
  const { props } = iconData;

  return (
    <>
      <input
        type='search'
        placeholder='Find lab tests, diagnostics centres'
        className='input-box'
      />
      <div className='icons-container'>
        <br />
        {props.map((eachItem) => (
          <div className='icon-item' key={eachItem.configIconTagName}>
            <IconItem eachItem={eachItem} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Icons;
