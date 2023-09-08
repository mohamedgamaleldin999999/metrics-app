import zoneReducer, { getZone } from '../../redux/Zone';

jest.mock('axios', () => []);
describe('Fetch Component', () => {
  it('should render Cities Component', () => {
    expect(zoneReducer({ zones: [] }, { type: '' })).toMatchObject({});
    expect(getZone()).toMatchSnapshot();
  });
});
