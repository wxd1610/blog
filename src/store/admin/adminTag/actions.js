import * as apis from '@/api/admin/tagApi'


//自动注册接口actions
const actions = {};
for (let key of Object.keys(apis)){
  actions[key] = (store, params) => {
    return apis[key](params);
  }
}

export default actions
