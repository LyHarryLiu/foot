<template>
  <div class="hello">
    <img src="./../assets/欧豪.jpg" alt="" class="img" />
    <div>吃什么: {{ msg }}</div>
    <div>
      <el-select v-model="xingqi" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div style="margin-top: 10px">
      <el-radio-group v-model="value">
        <el-radio :label="1"> 点菜 </el-radio>
        <el-radio :label="2"> 不点菜 </el-radio>
      </el-radio-group>
      <el-button type="primary" @click="random" style="margin-left: 10px">
        点击出菜
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: [
        "牛肉汤",
        "水饺",
        "米线",
        "韩式拌饭",
        "黄焖鸡米饭",
        "红烧排骨饭",
        "萝卜牛腩饭",
        "剁椒拌饭",
        "砂锅排骨",
        "锅仔小酥肉",
        "卤面",
        "酸辣肚丝汤",
        "大盘鸡盖浇饭",
        "老洛阳烩菜",
        "牛肉刀削面",
        "重庆小面",
      ],
      options: [
        {
          value: "2",
          label: "星期二",
        },
        {
          value: "3",
          label: "星期三",
        },
        {
          value: "4",
          label: "星期四",
        },
      ],
      arr21: ["干锅有机花菜", "三色豆芽", "蒜茸油菜", "金瓜山药", "肉沫蒸鸡蛋"],
      arr22: ["杏鲍菇红烧肉", "木须肉", "奥尔良烤全翅"],
      arr31: [
        "小炒千页豆腐",
        "水煮花生米",
        "青椒土豆片",
        "清炒小白菜",
        "干煸花菜",
        "干炸茄盒",
      ],
      arr32: ["羊肉丸子", "宫保鸡丁"],
      arr41: [
        "番茄鸡蛋",
        "蒜茸油菜",
        "酸辣豆芽",
      ],
      arr42: ["猪肉炖粉条", "青椒回锅肉","木耳肉片","干煸虾","蒜苔肉丝"],
      msg: "",
      value: 1,
      xingqi: null,
    };
  },
  methods: {
    random() {
      switch (this.xingqi) {
        case "2":
          if (this.value === 1) {
            this.msg = `素菜: ${this.arr21[this.randomNum(this.arr21)]}和${
              this.arr21[this.randomNum(this.arr21)]
            } 荤菜: ${this.arr22[this.randomNum(this.arr22)]}和${
              this.arr22[this.randomNum(this.arr22)]
            }`;
          } else {
            this.msg = this.arr[this.randomNum(this.arr)];
          }
          break;
        case "3":
          if (this.value === 1) {
            this.msg = `素菜: ${this.arr31[this.randomNum(this.arr31)]}和${
              this.arr31[this.randomNum(this.arr31)]
            } 荤菜: ${this.arr32[this.randomNum(this.arr32)]}`;
          } else {
            this.msg = this.arr[this.randomNum(this.arr)];
          }
          break;
        case "4":
          if (this.value === 1) {
            this.msg = `素菜: ${this.arr41[this.randomNum(this.arr41)]}和${
              this.arr41[this.randomNum(this.arr41)]
            } 荤菜: ${this.arr42[this.randomNum(this.arr42)]}和${
              this.arr42[this.randomNum(this.arr42)]}`;
          } else {
            this.msg = this.arr[this.randomNum(this.arr)];
          }
          break;

      }
    },
    randomNum(len) {
      return Math.floor(Math.random() * len.length);
    },
  },
};
</script>

<style scoped>
.img {
  height: 500px;
}
</style>
