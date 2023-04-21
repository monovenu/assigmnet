import {Table} from 'antd';
import Header from './Header'
import './index.css';


const Content = ({currentMenu}) => {
    const dataSource=[]
    const columns = [
        { title: 'Client name', dataIndex: 'nid', key: 'nid' ,width:'8%'},
        { title: 'Board name', dataIndex: 'name', key: 'name' ,width:'15%'},
        { title: 'Tags', dataIndex: 'gender', key: 'gender' ,width:'10%'},
        { title: 'Requestor', dataIndex: 'age', key: 'age',width:'15%', },//render: (text, record, index) => (Math.floor(record.age/10))*10+"多岁"},
        { title: 'SDK script', dataIndex: 'schoolname', key: 'schoolname',width:'15%' },
        { title: 'Actions', dataIndex: '', key: 'operation', width:'32%',render: (text,record,index)=>(
          <span>
             <Popconfirm title="删除不可恢复，你确定要删除吗?" >
                  <a title="用户删除" className="mgl10"onClick={this.onDelete.bind(this,index)}>
                    <Icon type="delete"/></a>
             </Popconfirm>
            <span className="ant-divider"/>
            <UserDetails className="user_details" pass={record}/>
          </span>
        ) },
      ];

    return <div className='content'>
        <Header currentMenu={currentMenu}/>
        <Table columns={columns}
            dataSource={dataSource}
            className="table"/>
    </div>
}
export default Content;

