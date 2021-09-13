<template>
  <div class="home">
    <div class="justify-row-left">
      <router-link :to="{ path: '/' }">返回</router-link>
    </div>
    <h4>搜索</h4>
    <input
      @keydown.enter="search"
      v-model="searchValue"
      type="text"
      placeholder="按回车搜索"
    />

    <div class="todos-container">
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@c/TodoItem";
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
      searchValue: "",
    };
  },
  computed: {},
  methods: {
    search() {
      this.todos = this.$store.state.todos.filter((todo) =>
        new RegExp(`.*${this.searchValue}.*`).test(todo.content)
      );
    //   if (this.todos.length == 0) {
    //     alert("没有找到");
    //   }
    },
  },
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
