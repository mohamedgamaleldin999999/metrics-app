import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import CityList from '../components/CitiesList';

let store;
const mockStore = configureStore([]);
beforeEach(() => {
  store = mockStore({
    Zones: [
      {
        Zone: { lat: 0, lon: 0 },
      },
    ],
  });
});

configure({ adapter: new Adapter() });
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    zone: { lat: 0, lon: 0 },
  }),
}));

jest.mock('axios', () => []);

describe('<CityList Component />', () => {
  it('should render City List Component', async () => {
    const citylist = await shallow(
      <Provider store={store}>
        <CityList />
      </Provider>,
    );
    process.nextTick(() => {
      expect(citylist).toMatchSnapshot();
    });
  });
});
