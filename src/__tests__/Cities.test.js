import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Cities from '../components/Cities';
import store from '../redux/configureStore';

configure({ adapter: new Adapter() });
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/cities',
  }),
}));

jest.mock('axios', () => []);

describe('<Cities Component />', () => {
  it('should render Cities Component', async () => {
    const cities = await shallow(
      <Provider store={store}>
        <Cities />
      </Provider>,
    );
    process.nextTick(() => {
      expect(cities).toMatchSnapshot();
    });
  });
});
