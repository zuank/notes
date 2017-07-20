<template>
  <div class="hello">
    <div>
      <h3>watch状态改变</h3>
      <p>arrchange：{{watch.arr}}</p>
      <p>objchange：{{watch.obj}}</p>
      <p>objnamechange:{{watch.objname}}</p>
      <p>stringchange：{{watch.string}}</p>
    </div>

    <div>
      <h3>数据展示</h3>
      <p>arr:{{arr}}</p>
      <p>obj:{{obj}}</p>
      <p>string:{{str}}</p>
    </div>

    <div>
      <h3>arr操作</h3>
      <button type="button" @click="changeArr(0)">改变arr[0]的name</button>
      <button type="button" @click="changeArr(1)">改变arr[0]的name($set)</button>
      <button type="button" @click="changeArr(2)">删除arr[0]</button>
      <button type="button" @click="changeArr(3)">删除arr[0].name</button>
      <button type="button" @click="changeArr(4)">删除arr[0].name($delete)</button>
      <button type="button" @click="changeArr(5)">unshift一个对象到arr</button>
      <button type="button" @click="changeArr(6)">arr[0]重新赋值</button>
      <button type="button" @click="changeArr(7)">arr[0]重新赋值($set)</button>
      <button type="button" @click="changeArr(8)">arr重新赋值</button>
      <button type="button" @click="changeArr(9)">arr重新赋值($set)</button>
    </div>
    <div>
      <h3>object操作</h3>
      <button type="button" @click="changeObj(0)">修改obj的name字段</button>
      <button type="button" @click="changeObj(1)">修改obj的name字段($set)</button>
      <button type="button" @click="changeObj(2)">添加age属性</button>
      <button type="button" @click="changeObj(3)">添加age属性($set)</button>
      <button type="button" @click="changeObj(4)">删除obj的name字段</button>
      <button type="button" @click="changeObj(5)">删除obj的name字段($delete)</button>
      <button type="button" @click="changeObj(6)">对obj重新赋值</button>
    </div>
    <div>
      <h3>String操作</h3>
      <button type="button" @click="changeStr">修改str字段</button>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      watch: {
        arr: 0,
        obj: 0,
        string: 0,
        num: 0,
        objname: 0
      }
    }
  },
  computed:{
    ...mapState(['state']),
    arr: {
      get() {
        return this.state.arr
      }
    },
    obj: {
      get() {
        return this.state.obj
      }
    },
    str: {
      get() {
        return this.state.str
      }
    }
  },
  watch: {
    arr: function() {
      this.watch.arr++
    },
    'obj.name': function() {
      this.watch.objname++
    },
    obj: function() {
      this.watch.obj++
    },
    str: function() {
      this.watch.string++
    },
    num: function() {
      this.watch.num++
    }
  },
  methods: {
    changeArr(type) {
      this.$store.commit('UPDATE_ARR', type)
    },
    changeObj(type) {
      this.$store.commit('UPDATE_OBJ', type)
    },
    changeStr(type) {
      this.$store.commit('UPDATE_STR')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
