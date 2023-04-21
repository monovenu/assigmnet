import Mock from 'better-mock'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
   'Client name': '@name()',
   'Board name': '@title(1, 2)',
    Tags: '@title(1, 2)',
    Requestor: '@name()',
    'SDK script': '@url()',
  }))
}
const match = (item, sourceKey, key) => {
  if(item[sourceKey].toLowerCase().indexOf(key.toLowerCase()) >= 0) {
    return true
  }
}
export default {
  getList: config => {
    const { page = 1, limit = 20, key } = param2Obj(config.url)
    console.log(key)
    const tempList = List.filter((item) => {
      if(match(item, 'Client name', key) || match(item, 'Board name', key) ||
      match(item, 'Tags', key) || match(item, 'Requestor', key)) {
        return true
      }
      return false
     
    })
    const pageList = tempList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      data: {
        total: tempList.length,
        items: pageList
      }
    }
  },
  addData: config => {
    console.log(config.body)
    const data = JSON.parse(config.body)
    List.unshift({...data, id:List.length})
    return {
      code: 20000
    }
  },
  editData: config => {
    const data = JSON.parse(config.body)
    const index = List.findIndex((item) => {
      return item.id === this.form.id
    })
    List.splice(index, 1, data)
    return {
      code: 20000
    }
  }
}
