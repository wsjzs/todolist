<template>
  <div class="home">
    <h4 class="text-align">HelloAlexCc待办事项</h4>
    <div class="justify-right">
      <div><router-link :to="{path:'/search'}">搜索</router-link></div>
    </div>
    <AddTodo />
    <div>
      <router-link :to="{ path: '/todos' }">全部</router-link>&nbsp;&nbsp;
      <router-link :to="{ path: '/todos/done' }">已完成</router-link
      >&nbsp;&nbsp;
      <router-link :to="{ path: '/todos/unfinished' }">未完成</router-link>
    </div>

    <div class="todos-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AddTodo from "@c/input/AddTodo.vue";
export default {
  name: "Home",
  components: {
    AddTodo,
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  background-color: blueviolet;
  border-radius: 15px;
  width: 300px;
  height: 500px;
  padding: 10px;
  overflow: hidden;
  .todos-container {
    // overflow: hidden;
    overflow: scroll;
    overflow-x: hidden;
    padding-right: 3px;
  }
}
</style>
