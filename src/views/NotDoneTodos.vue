<template>
  <div>
    <div v-for="todo in notDoneTodos" :key="todo.id">
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
    notDoneTodos() {
      return this.$store.getters.getNotDone;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>