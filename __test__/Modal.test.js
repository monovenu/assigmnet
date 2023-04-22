import renderer from 'react-test-renderer';
import Modal from '../src/components/Modal';

const modal = <Modal close={() => { }} title='Create SDK'>
  <div>test </div>
</Modal>
it('Modal renders correctly', () => {
  const component = renderer.create(modal);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('should has close Button', () => {
  const component = renderer.create(modal);
  const wrapper = component.root;
  expect(wrapper.findAll((node) => node.type === 'i' && node.props.className === 'iconfont icon-guanbi closeBtn')).toHaveLength(1);
});
