import { fetchZones, fetchZone } from '../../redux/Fetch';

jest.mock('axios', () => []);
describe('Fetch Component', () => {
  it('should render Cities Component', () => {
    expect(fetchZones).toMatchSnapshot();
    expect(fetchZone).toMatchSnapshot();
  });
});
