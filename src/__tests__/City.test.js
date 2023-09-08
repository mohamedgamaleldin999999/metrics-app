import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import City from '../components/City';

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
    pathname: 'localhost:3000/city',
  }),
}));

jest.mock('axios', () => []);

describe('<City Component />', () => {
  it('should render City Component', async () => {
    const city = await shallow(
      <Provider store={store}>
        <City />
      </Provider>,
    );
    process.nextTick(() => {
      expect(city).toMatchSnapshot();
    });
  });
});
