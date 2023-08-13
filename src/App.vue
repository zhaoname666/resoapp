<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div class="app" v-show="n" ref="id" :style="ys">
        <pre
          class="pres"
        ><span title="点击全屏" @click.stop="go">[ ] </span>  <b @click.stop="cancel" title="点击取消">X</b></pre>

        <HelloWorld msg="热搜榜" />

        <Lefts />
        <Rights />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-show="del">
        <img
          id="loge"
          src="./assets/微信图片_20230813125244.png"
          alt=""
          @click="dels"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Lefts from "./components/lefts.vue";
import Rights from "./components/rights.vue";

export default {
  name: "App",
  data() {
    return {
      del: false,
      n: true,
      ys: {
        width: "",
        height: "",
      },
      isClicked: false,
    };
  },
  components: {
    HelloWorld,
    Lefts,
    Rights,
  },
  methods: {
    dels() {
      this.n = !this.n;
      this.del = false;
    },
    cancel() {
      this.n = false;
      this.del = true;
    },
    go() {
      // this.$refs.id.style.width = "100%";
      // this.$refs.id.style.height = "100%";
      if (this.isClicked) {
        this.ys.width = "80%";
        this.ys.height = "80vh";
      } else {
        this.ys.width = "100%";
        this.ys.height = "100vh";
      }
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style>
.app {
  width: 80%;
  height: 80vh;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e7e9eb;
  margin-top: 60px;
  background: #000;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(201, 76, 76, 0.9);
}
.pres {
  float: right;
  margin-right: 50px;
  font-size: 20px;
}

#loge {
  margin: 10% 0 0 40%;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(201, 76, 76, 0.9);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
