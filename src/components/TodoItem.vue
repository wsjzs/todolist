<template>
  <div class="container">
    <div @click="finish" :style="{ visibility: todo.done?'hidden':'visible' }" class="finish">
      √
    </div>
    <div v-show="notEdit" @click="toEdit" class="content">
      {{ todo.content }}
    </div>
    <input
      class="content-input"
      focus=""
      v-show="edit"
      @blur="noEdit"
      v-model="todo.content"
      type="text"
      ref="contentInput"
    />

    <div @click="deleteTodo(todo.id)" class="delete">X</div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      inEdit: false,
    };
  },
  computed: {
    edit() {
      return this.inEdit;
    },
    notEdit() {
      return !this.inEdit;
    },
  },
  methods: {
    finish() {
      //完成
      this.$store.commit("done", this.todo.id);
      console.log("done");
    },
    toEdit() {
      this.inEdit = true;
      this.$nextTick(() => {
        this.$refs.contentInput.focus();
      });
    },
    noEdit() {
      this.inEdit = false;
    },
    changeContent(e) {
      this.$store.commit("changeContent", this.todo.id, e.target.innerText);
    },
    deleteTodo(id) {
      this.$store.commit("deleteTodo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0px 0;
  width: 100%;
  display: flex;
  overflow: hidden;
  .content {
    flex-grow: 1;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: start;
  }
  .finish {
    width: 10px;
    cursor: pointer;
    margin-right: 3px;
  }
  .content-input {
    // flex-grow: 1;
    width: 100%;
  }
  .delete {
    cursor: pointer;
  }
}
</style>