import { Form, Input } from 'antd';
import './index.css';

const FormItem = Form.Item;

const Create = ({ hide, createRecord }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((value)=> {
      createRecord(value)
    }).catch(err => {
      console.log(err)
    })
  }
  const validateMessages = {
    required: '${label} is required!',
  };

  return <div className='content-create'>
    <Form horizontal form={form} validateMessages={validateMessages} >
      <FormItem
        name="Client name"
        label="Client name"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={ [{
          required: true,
        }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="Board"
        label="Board"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={ [{
          required: true,
        }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="Tags"
        label="Tags"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input />
      </FormItem>
      <FormItem
        name="Requestor"
        label="Requestor"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={ [{
          required: true,
        }]}
      >
        <Input />
      </FormItem>
      <div className='btn-area'>
        <button className='cancel btn' onClick={hide}>Cancel</button>
        <button className='submit btn' onClick={handleSubmit}>Submit</button>
      </div>
    </Form>
  </div>

}
export default Create;

