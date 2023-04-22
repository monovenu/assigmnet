import renderer from 'react-test-renderer';
import Modal from '../src/components/Modal';

it('Modal renders correctly', () => {
  const component = renderer.create(
    <Modal close={() => {}} title='Create SDK'>
      <div>test </div>
    </Modal>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});