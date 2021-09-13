<template>
  <div class="todos">
    <div v-for="todo in this.$store.state.todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "@c/TodoItem";
export default {
  components: {
    TodoItem,
  },
};
</script>

<style lang="scss" scoped>
.todos {
//   display: inline-block;
//   overflow: hidden;
  
}
</style>