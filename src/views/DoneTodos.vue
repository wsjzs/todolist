<template>
  <div>
    <div v-for="todo in doneTodos" :key="todo.id">
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
  computed: {
    doneTodos() {
      return this.$store.getters.getDone;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>