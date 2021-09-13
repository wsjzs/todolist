<template>
  <div class="">
    <input
      v-model="todoContent"
      @keyup.enter="addTodo"
      type="text"
      placeholder="按回车添加,按alt+enter清空"
    />
  </div>
</template>

<script>
import { createTodo } from "@u/todo";
export default {
  data() {
    return { todoContent: "" };
  },
  methods: {
    addTodo(e) {
      if (e.ctrlKey && e.keyCode == 13) {
        this.clearTodos();
        return;
      }
      let todo = createTodo(this.todoContent);
      this.$store.commit("addTodo", todo);
      this.todoContent = "";
    },
    clearTodos() {
      this.$store.commit("clearTodos");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>