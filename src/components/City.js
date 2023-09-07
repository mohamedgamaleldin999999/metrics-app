import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getZone } from '../redux/Zone';
import img09 from './images/09.png';

const City = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { lat = 0, lon = 0, name = '' } = location.state;
  const { zone } = useSelector((state) => state.zone);
  useEffect(() => {
    dispatch(getZone({ lat, lon }));
  });
  return (
    <div>
      <div className="h-40 flex flex-row">
        <div
          style={{
            backgroundImage: `url("${img09}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
          }}
          className=" w-full m-2"
        />
        <div className=" basis-1/2 m-3 flex items-center justify-center">
          <span className=" text-5xl font-extrabold text-gray-600 ">{name}</span>
        </div>
      </div>
      <div className=" flex flex-col gap-3 m-2">

        <div className=" striped pl-2 pr2 pb-2 pt-2">
          <div className=" text-lg font-bold capitalize">Cordinates</div>
          <div className="flex">
            <span>longitude</span>
            <span className="ml-auto mr-2">{zone.coord && zone.coord.lon}</span>
          </div>
          <div className="flex">
            <span>latitude</span>
            <span className="ml-auto mr-2">{zone.coord && zone.coord.lat}</span>
          </div>
        </div>

        <div className="pl-2 pr2 pb-2 pt-2">
          <div className=" text-lg font-bold capitalize">weather</div>
          <div className="flex">
            <span>main</span>
            <span className="ml-auto mr-2">{zone.weather && zone.weather[0].main}</span>
          </div>
          <div className="flex">
            <span>description</span>
            <span className="ml-auto mr-2">
              {zone.weather && zone.weather[0].description}
            </span>
          </div>
        </div>

        <div className=" striped pl-2 pr2 pb-2 pt-2">
          <div className=" text-lg font-bold capitalize">base station</div>
          <div className="flex">
            <span>temperature</span>
            <span className="ml-auto mr-2">{zone.main && zone.main.temp}</span>
          </div>
          <div className="flex">
            <span>feel</span>
            <span className="ml-auto mr-2">
              {zone.main && zone.main.feels_like}
            </span>
          </div>
          <div className="flex">
            <span>minimum temperature</span>
            <span className="ml-auto mr-2">
              {zone.main && zone.main.temp_min}
            </span>
          </div>
          <div className="flex">
            <span>maximum temperature</span>
            <span className="ml-auto mr-2">
              {zone.main && zone.main.temp_max}
            </span>
          </div>
          <div className="flex">
            <span>pressure</span>
            <span className="ml-auto mr-2">
              {zone.main && zone.main.pressure}
            </span>
          </div>
          <div className="flex">
            <span>humidity</span>
            <span className="ml-auto mr-2">
              {zone.main && zone.main.humidity}
            </span>
          </div>
        </div>

        <div className="pl-2 pr2 pb-2 pt-2">
          <div className=" text-lg font-bold capitalize">visibility</div>
          <div className="flex">
            <span>visible</span>
            <span className="ml-auto mr-2">{zone.visibility && zone.visibility}</span>
          </div>
        </div>

        <div className=" striped pl-2 pr2 pb-2 pt-2">
          <div className=" text-lg font-bold capitalize">wind</div>
          <div className="flex">
            <span>speed</span>
            <span className="ml-auto mr-2">{zone.wind && zone.wind.speed}</span>
          </div>
          <div className="flex">
            <span>degree</span>
            <span className="ml-auto mr-2">{zone.wind && zone.wind.deg}</span>
          </div>
        </div>

        <div className="pl-2 pr2 pb-2 pt-2">
          <div className=" text-lg font-bold capitalize">clouds</div>
          <div className="flex">
            <span>cover</span>
            <span className="ml-auto mr-2">{zone.clouds && zone.clouds.all}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default City;
