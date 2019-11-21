<template>
  <div class="hello">
    <h1>{{data.counter}}</h1>
    <h1>{{rootCounter}}</h1>

    <div @click="click" class="button">++</div>
    <div @click="clickRoot" class="button">root++</div>
  </div>
</template>

<script>
import { mapActions, mapState, dispatch } from "vuex";
export default {
  mounted() {},
  computed: {
    ...mapState(["data", "rootCounter"])
  },
  methods: {
    ...mapActions(["data/changeCounter", "rootAction"]),
    click() {
      this["data/changeCounter"]({
        target: "counter",
        value: this.data.counter + 1
      });
    },
    clickRoot() {
      this["rootAction"]({
        target: "rootCounter",
        value: this.rootCounter + 1
      });
    }
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background-color: pink;
  width: 100%;
  height: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
