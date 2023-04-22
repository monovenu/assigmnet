
import renderer from 'react-test-renderer';
import LeftBar from '../src/components/LeftBar';

it('LeftBar renders correctly', () => {
  const component = renderer.create(
    <LeftBar changeCurrentMenu={() => {}}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});