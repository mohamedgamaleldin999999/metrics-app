import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import img09 from './images/09.png';

const CitiesList = ({ zonesData }) => {
  const navigate = useNavigate();
  const shade = [false, 0];
  let start = true;
  const getShade = () => {
    if (start) {
      start = false;
      return 'striped';
    }
    if (shade[1] > 1) {
      shade[0] = !shade[0];
      shade[1] = -1;
    }
    shade[0] = shade[1] > 1 ? !shade[0] : shade[0];
    shade[1] += 1;
    return shade[0] === true ? 'striped' : '';
  };
  return (
    <div className="flex flex-row flex-wrap gap-0 striped">
      {
      zonesData.map((zone) => (
        <div key={(`${uniqid()}`)} className={`w-1/2 md:w-2/6 lg:w-1/4 h-52 relative p-5 ${getShade()}`}>
          <div
            style={{
              backgroundImage: `url("${img09}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', filter: 'blur(0px)',
            }}
            className=" w-full h-full"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 items-end justify-end text-white pb-2"
            onClick={() => { navigate('/city', { state: { lat: zone.lat, lon: zone.lon, name: zone.name } }); }}
            aria-hidden="true"
          >
            <span className=" font-extrabold text-xl text-gray-100 mr-2 shadow-sm drop-shadow-lg shadow-black">{zone.name}</span>
            <span className="mr-2">
              {zone.country}
            </span>
            <span className="mr-2">
              <span className=" text-black capitalize mr-2">lat:</span>
              {zone.lat}
            </span>
            <span className="mr-2">
              <span className=" text-black capitalize mr-2">lon:</span>
              {zone.lon}
            </span>
          </div>
        </div>
      ))
      }
    </div>
  );
};

CitiesList.propTypes = {
  zonesData: PropTypes.instanceOf(Array),
};
CitiesList.defaultProps = {
  zonesData: [],
};

export default CitiesList;
