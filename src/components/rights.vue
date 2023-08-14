   <style scoped>
* {
  margin: 0;
  padding: 0;
}
.hello {
  float: right;
  color: white;
  width: 80%;
  margin-right: 3%;
  margin-top: 50px;
  height: 60vh;
  overflow: auto;
  overflow-x: hidden;
  /* border: 1px solid red; */
}
h1 {
  color: white;
  font-family: cursive;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  height: 30px;
  width: 100%;
  display: inline-block;
  margin: 20px 5px;
  text-align: left;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
}
.noe {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  text-align: left;
  margin: 10px;
}
b {
  font-size: 20px;
  margin: 10px;
}
.no {
  display: inline-block;
  width: 30px;
  height: 20px;
  border-radius: 3px;

  text-align: center;
}
li:nth-child(1) {
  /* 这里是你想要应用的样式 */
  display: none;
}
pre:hover {
  color: #1e9fff !important;
}
</style>
  <template>
  <div class="hello">
    <div class="noe">
      <img :src="arr[i].arr1[s].text[0].src" alt="" />
      <b>{{ arr[i].arr1[s].text[0].res }}</b>
    </div>
    <ul>
      <li v-for="(item, index) in arr[i].arr1[s].text" :key="index">
        <pre> <b :style="{ backgroundColor: getColor(index) }" class="no">{{ item.id }}</b><span :title=" item.name ">{{ item.name }}</span> <span  :title=" item.text " style="float: right;margin-right: 10%;">{{ item.text }}</span></pre>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      i: 1,
      s: 0,
    };
  },
  created() {
    // this.arr = JSON.parse(localStorage.getItem("arr11"));
    this.$bus.$on("xxx", this.fun);
    this.$bus.$on("xx", this.fun1);
  },

  methods: {
    getColor(index) {
      if (index === 1) {
        return "red";
      } else if (index === 2) {
        return "orange";
      } else if (index === 3) {
        return "yellow";
      } else {
        return "";
      }
    },

    fun(i) {
      this.i = i;
    },
    fun1(i) {
      this.s = i;
    },
    //方法
  },
  watch: {
    //监听
    op() {},
  },
  computed: {
    //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
    //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
    // fullName: {
    //     get() {
    // }
    // }
  },
  props: {
    msg: String,
  },
  beforeUpdate() {
    if (JSON.parse(localStorage.getItem("arr11") != null)) {
      this.arr = JSON.parse(localStorage.getItem("arr11"));
    }
  },
};
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->