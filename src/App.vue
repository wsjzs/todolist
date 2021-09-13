<template>
  <div class="justify-center" id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("vuex") &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem("vuex"))
        )
      );

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("vuex", JSON.stringify(this.$store.state));
    });
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
