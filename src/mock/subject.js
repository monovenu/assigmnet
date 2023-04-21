import Mock from 'better-mock'
import { param2Obj } from '@/utils'

const List = []
const count = 2


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

export default {
  getList: config => {
    const { page = 1, limit = 20 } = param2Obj(config.url)
    const mockList = List.slice(0)
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList
      }
    }
  },
  addData: config => {
    const data = JSON.parse(config.body)
    List.unshift(data)
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
