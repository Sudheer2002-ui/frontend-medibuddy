import PackageItem from '../PackageItem';
import './index.css'; 

const Packages = (props) => {
  const { packages } = props;

  return (
    <div className='packages-container'>
      {packages.map((eachPackage, index) => (
        <div className='package-item' key={index}>
          <PackageItem eachPackage={eachPackage} />
        </div>
      ))}
    </div>
  );
};

export default Packages;
