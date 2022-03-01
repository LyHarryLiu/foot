<template>
  <div class="hello">
    <img src="./../assets/欧豪.jpg" alt="" class="img">
    <div>
      吃什么: {{ msg }}
    </div>
    <el-radio-group v-model="value">
      <el-radio :label="1">
        点菜
      </el-radio>
      <el-radio :label="2">
        不点菜
      </el-radio>
    </el-radio-group>
    <el-button type="primary" @click="random" style="margin-left:10px">
      点击出菜
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      arr: ["牛肉汤","水饺","米线","韩式拌饭","黄焖鸡米饭","红烧排骨饭","萝卜牛腩饭","剁椒拌饭","砂锅排骨","锅仔小酥肉","卤面","酸辣肚丝汤","大盘鸡盖浇饭","老洛阳烩菜","牛肉刀削面","重庆小面"],
      arr2: ["干锅有机花菜","三色豆芽","蒜茸油菜","金瓜山药","肉沫蒸鸡蛋"],
      arr3: ["杏鲍菇红烧肉","木须肉","奥尔良烤全翅"],
      msg: '',
      value: 1,
    }
  },
  methods: {
    random() {
      if (this.value === 1) {
        this.msg = `素菜: ${this.arr2[this.randomNum(this.arr2)]}和${this.arr2[this.randomNum(this.arr2)]} 荤菜: ${this.arr3[this.randomNum(this.arr3)]}和${this.arr3[this.randomNum(this.arr3)]}`
      } else {
        this.msg = this.arr[this.randomNum(this.arr)]
      }
    },
    randomNum(len) {
      return Math.floor( Math.random() * len.length )
    }
  }
}
</script>

<style scoped>
.img {
  height: 500px;
}
</style>
