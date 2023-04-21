import { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import Header from './Header';
import Create from './Create';
import Modal from '@/components/Modal';
import '@/mock';
import { warpTag } from '@/utils'
import './index.css';


const Content = ({ currentMenu }) => {
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [key, setKey] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getList()
  }, [])

  const getList = (key = '', page = 1) => {
    setKey(key)
    axios.get('/subject/list', {
      params: { key, page, limit:10 }
    }).then(function (response) {
      setList(response.data?.data?.items)
      setTotal(response.data?.data?.total)
      console.log(response.data.data.items);
    }).catch(function (error) {
      console.log(error);
    })
  }

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const createRecord = (data) => {
    return axios.post('/subject/addData', data).then(function (response) {
      getList()
    }).catch(function (error) {
      console.log(error);
      throw error
    })
  }
  const onChange = (page) => {
    console.log(page)
    getList('', page)
  }

  const render = (text) => <div dangerouslySetInnerHTML={{ __html: warpTag(text, key, 'span') }}></div>
  const columns = [
    { title: 'Client name', dataIndex: 'Client name', key: 'Client name', width: '18%', render },
    { title: 'Board name', dataIndex: 'Board name', key: 'Board name', width: '18%', render },
    { title: 'Tags', dataIndex: 'Tags', key: 'Tags', width: '18%', render },
    { title: 'Requestor', dataIndex: 'Requestor', key: 'Requestor', width: '18%', render },
    {
      title: 'SDK script', dataIndex: 'SDK script', key: 'SDK script', className: 'sdk', width: '18%',
      render: (text) => (
        <a href={text}>&lt;/&gt; SDK</a>
      )
    },
    {
      title: 'Actions', dataIndex: '', key: 'Actions', width: '10%', render: (text, record, index) => (
        <span>
          <i title="edit"  className="iconfont icon-a-ESMiconset_Edit" />
          <i title="delete" className="iconfont icon-a-ESMiconset_Delete" />
        </span>
      )
    },
  ];

  return <div className='content'>
    <Header currentMenu={currentMenu} getList={getList} openModal={openModal}/>
    <Table columns={columns}
      rowKey={record => record.id}
      dataSource={list}
      className="content-table"
      pagination={{
        total,
        showSizeChanger: false,
        onChange}}
       />
    {showModal && <Modal close={closeModal} title='Create SDK'>
      <Create createRecord={createRecord} />
    </Modal>}
  </div>
}
export default Content;

