import Mock from 'better-mock'
import subjectAPI from './subject'

Mock.mock(/\/subject\/array/, 'get', subjectAPI.getArray)
Mock.mock(/\/subject\/list/, 'get', subjectAPI.getList)
Mock.mock(/\/subject\/add/, 'post', subjectAPI.addData)
Mock.mock(/\/subject\/edit/, 'post', subjectAPI.editData)

export default Mock