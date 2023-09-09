import axios from 'axios';

export const fetchZones = async (city = 'London') => {
  const baseURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=adf1eb75381c92ea910a7d9ddbb401a9`;
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchZone = async ({ lat, lon }) => {
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=adf1eb75381c92ea910a7d9ddbb401a9`;
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error;
  }
};
