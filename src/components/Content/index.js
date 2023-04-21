import { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import Header from './Header';
import Create from './Create';
import Modal from '@/components/Modal';
import '@/mock';
import './index.css';


const Content = ({ currentMenu }) => {
  const [list, setList] = useState([])
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    axios.get('/subject/list', {
      params: { type: '资产' }
    }).then(function (response) {
        setList(response.data?.data?.items)
        console.log(response.data.data.items);
    }).catch(function (error) {
        console.log(error);
    })
  }, [])

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const createRecord = (data) => {
    axios.post('/subject/addData', {
      params: { type: '资产' }
    }).then(function (response) {
        setList(response.data?.data?.items)
        console.log(response.data.data.items);
    }).catch(function (error) {
        console.log(error);
    })
  }
  const columns = [
    { title: 'Client name', dataIndex: 'Client name', key: 'Client name', width: '18%' },
    { title: 'Board name', dataIndex: 'Board name', key: 'Board name', width: '18%' },
    { title: 'Tags', dataIndex: 'Tags', key: 'Tags', width: '18%' },
    { title: 'Requestor', dataIndex: 'Requestor', key: 'Requestor', width: '18%' },
    {
      title: 'SDK script', dataIndex: 'SDK script', key: 'SDK script', className: 'sdk', width: '18%',
      render: (text) => (
        <a href={text}>&lt;/&gt; SDK</a>
      )
    },
    {
      title: 'Actions', dataIndex: '', key: 'Actions', width: '10%', render: (text, record, index) => (
        <span>
          <i title="edit" className="iconfont icon-a-ESMiconset_Edit" />
          <i title="delete" onClick={openModal} className="iconfont icon-a-ESMiconset_Delete" />
        </span>
      )
    },
  ];

  return <div className='content'>
    <Header currentMenu={currentMenu} />
    <Table columns={columns}
      rowKey={record => record.id}
      dataSource={list}
      className="content-table" />
    {showModal && <Modal close={closeModal} title='Create SDK'>
      <Create createRecord={createRecord}/>
    </Modal>}
  </div>
}
export default Content;

