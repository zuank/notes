import vm from 'vue'
export default {
  state: {
    arr:[],
    obj:{},
    str:'1'
  },
  mutations: {
    'UPDATE_ARR'(state, type) {
      switch (type) {
        case 0:
          state.arr[0].name = "俄罗斯"
          break;
        case 1:
          console.log(vm)
          vm.set(state.arr[0], 'name', '俄罗斯2')
          break;
        case 2:
          state.arr.splice(0, 1)
          break;
        case 3:
          delete state.arr[0].name
          break;
        case 4:
          vm.delete(state.arr[0], 'name')
          break;
        case 5:
          state.arr.unshift({
            name: '呆呆',
            address: '苏州'
          })
          break;
        case 6:
          state.arr[0] = {
            name: '美丽',
            address: '意大利'
          }
          break;
        case 7:
          vm.set(state.arr, 0, {
            name: '美丽',
            address: '意大利'
          })
          break;
        case 8:
          state.arr = [{
            name: '泡泡',
            address: 'llll'
          }]
          break;
        case 9:
          vm.set(state, 'arr', [{
            name: '美丽',
            address: '意大利'
          }])
          break;
        default:
      }
    },
    'UPDATE_OBJ'(state, type) {
      switch (type) {
        case 0:
          state.obj.name = "帅呆呆"
          break;
        case 1:
          vm.set(state.obj, 'name', '帅帅帅呆呆')
          break;
        case 2:
          state.obj.age = 20
          break;
        case 3:
          vm.set(state.obj, 'age', 22)
          break;
        case 4:
          delete state.obj.name
          break;
        case 5:
          vm.delete(state.obj, 'name')
          break;
        case 6:
          vm.set(state, 'obj', {
            name: '小贝',
            address: '哈哈哈'
          })
          break;
        default:

      }
    },
    'UPDATE_STR'(state){
      state.str += '1'
    }
  }
}
