   <style scoped>
* {
  margin: 0;
  padding: 0;
  /* color: white; */
}
.hello {
  float: left;
  width: 15%;
  height: 60vh;
  border-right: 3px solid #ccc;
  text-align: left;
  margin: 50px 0 0 0;
}
input {
  width: 10vw;
  height: 30px;
  border-radius: 15px;
  padding: 0 10px;
  border: none;
  outline: none;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
}
.s1 {
  color: black;
}
.noe {
  width: 75%;
  height: 50px;

  line-height: 60px;
  padding: 0 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  color: white;
  color: black;
}
.noe:hover {
  color: #1e9fff !important;
}
.no {
  background: #1e9fff !important;
}
.no:hover {
  background: #1e9fff !important;
  color: #1e9fff !important;
}
span:hover {
  color: white !important;
}
.bo2 {
  width: 80%;
}
.txs {
  color: red;
}
</style>
  <template>
  <div class="hello">
    <div>
      <input type="text" placeholder="搜索" v-model="so" />
      <div
        class="noe"
        v-for="(item, index) in arr[i].arr1"
        :key="index"
        :style="s == index ? colors : ''"
        @click="btn1(index)"
        v-draggable
      >
        <img :src="item.src" alt="" /><span class="bo2" style="color: white">{{
          item.name
        }}</span
        ><span
          style="font-size: 20px"
          v-show="show"
          @click.stop="tx(item, index)"
          :class="txs == index ? 'txs' : ''"
          >★</span
        >
        <span
          v-show="ss"
          style="width: 50px; color: chocolate"
          @click.stop="del(index)"
          >删除</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      so: "",
      show: true,
      shows: false,
      ss: false,
      colors: {
        background: "#1e9fff",
        color: "black",
      },
      tmps: [],
      txs: null,
      i: 1,
      s: 0,
    };
  },
  created() {
    this.$bus.$on("xxx", this.fun);
  },
  methods: {
    tx(item, index) {
      this.tmps.push(item);
      this.txs = index;
      alert("订阅成功");
      this.arr[0].arr1.push(item);

      localStorage.setItem("arr11", JSON.stringify(this.arr));
    },
    fun(value) {
      this.i = value;
      if (this.i == 0) {
        this.ss = !this.ss;
        this.show = !this.show;
      } else {
        this.show = true;
        this.ss = false;
      }
    },
    btn1(index) {
      this.s = index;
      this.shows = true;
      this.$bus.$emit("xx", index);
    },
    del(index) {
      if (confirm("确定删除吗？")) {
        this.arr[0].arr1.splice(index, 1);
        localStorage.setItem("arr11", JSON.stringify(this.arr));
      }
    },

    //方法
  },
  watch: {
    //监听
    so(value) {
      let res = this.arr[this.i].arr1.filter((item) => {
        return item.name.includes(value);
      });
      // res = res.map((item) => {
      //   return item.name;
      // });
      this.arr[this.i].arr1 = res;
    },
  },
  mounted() {
    if (localStorage.getItem("arr11") != null) {
      this.arr = JSON.parse(localStorage.getItem("arr11"));
    }
  },
  computed: {
    no() {
      return this.i;
    },
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->