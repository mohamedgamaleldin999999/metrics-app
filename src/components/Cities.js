import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZones } from '../redux/Zones';
import imagesx from './images/Images';
import CitiesList from './CitiesList';

const Cities = () => {
  const { zones = [] } = useSelector((state) => state.zones);
  const dispatch = useDispatch();
  const cities = {
    1: 'London',
    2: 'Paris',
    3: 'Rome',
    4: 'Madrid',
    5: 'Berlin',
    6: 'Moscow',
    7: 'Istanbul',
    8: 'Tokyo',
    9: 'Beijing',
    10: 'Sydney',
    11: 'New York',
    12: 'Mexico City',
    13: 'Rio de Janeiro',
    14: 'Singapore',
    15: 'Bangkok',
    16: 'Hong Kong',
    17: 'Dubai',
    18: 'Mumbai',
    19: 'Johannesburg',
  };
  const images = imagesx();
  useEffect(() => {
    if (zones.length === 0) dispatch(getZones(cities[1]));
  });

  return (
    <div>
      <div className="overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <div className="flex flex-row w-fit">
          {Object.keys(cities).map((key) => (
            <div key={key} className="w-80 h-52 flex flex-row p-5">
              <div
                style={{
                  backgroundImage: `url("${images[Math.floor(Math.random() * images.length)]}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                }}
                onClick={() => dispatch(getZones(cities[key]))}
                className=" w-96 h-96"
                aria-hidden="true"
              />
              <div className=" font-bold text-2xl capitalize flex flex-col">
                <span>{cities[key]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <span className=" ml-2 text-gray-500s font-medium">
          Zones BY Cities
          <span className=" font-thin ml-2">(Sroll Right)</span>
        </span>
        <CitiesList zonesData={zones} />
      </div>
    </div>
  );
};

export default Cities;
