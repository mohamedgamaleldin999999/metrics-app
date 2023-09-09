import zonesReducer, { getZones } from '../../redux/Zones';

jest.mock('axios', () => []);
describe('Fetch Component', () => {
  it('should render Cities Component', () => {
    expect(zonesReducer({ zones: [] }, { type: '' })).toMatchObject({});
    expect(getZones()).toMatchSnapshot();
  });
});
