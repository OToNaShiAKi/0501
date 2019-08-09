<template>
  <section class="position">
    <div v-if="start" class="start">
      <v-icon class="size animated rubberBand infinite">looks_{{start | icon}}</v-icon>
    </div>
    <h2 class="font">{{score}}</h2>
    <div class="d-flex">
      <div>
        <p>糯米：{{rice}}</p>
        <p>粽叶：{{leaf}}</p>
      </div>
      <div class="right">
        <p>粽子：{{zongzi}}</p>
        <p>连击：{{combo}}</p>
      </div>
    </div>
    <div class="zongzi">
      <v-img
        v-for="(v, i) in img"
        :key="i"
        :src="v.img"
        width="120px"
        class="img"
        :style="`top:${i * 15 + 20}px;z-index:${30 - i}`"
      />
    </div>
    <div class="center">
      <div @click="rice++">
        <v-img :src="glutinous" width="80px"/>
        <v-btn flat small color="green darken-4">煮糯米</v-btn>
      </div>
      <div @click="leaf++">
        <v-img :src="leaves" width="80px"/>
        <v-btn flat small color="green darken-4">剪粽叶</v-btn>
      </div>
    </div>
    <v-divider class="top" color="primary"/>
    <div class="d-flex bottom">
      <v-img @click="pop(i)" v-for="(v, i) in material" :key="i" :src="v" class="border"/>
    </div>
  </section>
</template>

<script>
import boat1 from "@/assets/boat1.png";
import boat2 from "@/assets/boat2.png";
import boat3 from "@/assets/boat3.png";
import boat4 from "@/assets/boat4.png";
import glutinous from "@/assets/glutinous.png";
import leaves from "@/assets/leaves.png";
import jujube from "@/assets/jujube.png";
import lotus from "@/assets/lotus.png";
import barbecue from "@/assets/barbecue.png";
import paste from "@/assets/paste.png";

export default {
  name: "game",
  data: () => ({
    glutinous,
    leaves,
    img: [],
    start: 3,
    leaf: 0,
    rice: 0,
    score: 0,
    zongzi: 0,
    combo: 0,
    stuffing: [boat1, boat2, boat3, boat4],
    material: [barbecue, jujube, lotus, paste],
    hardtime: 1200
  }),
  mounted() {
    this.timer = setInterval(() => {
      this.start--;
      if (this.start == 0) {
        for (let i = 0; i < 6; i++) {
          let pick = Math.floor(Math.random() * 4);
          this.img.push({ pick, img: this.stuffing[pick] });
        }
        this.hard(1200);
      }
    }, 1000);
  },
  methods: {
    hard(num) {
      clearInterval(this.timer);
      this.hardtime = num;
      this.timer = setInterval(() => {
        if (this.img.length > 24) {
          clearInterval(this.timer);
          this.$store.dispatch("score", {
            score: this.score,
            nick: this.$store.state.nick
          });
          return;
        }
        let pick = Math.floor(Math.random() * 4);
        this.img.push({ pick, img: this.stuffing[pick] });
        if (this.score > 4420 && this.hardtime > 300) this.hard(300);
        else if (this.score > 3360 && this.hardtime > 400) this.hard(400);
        else if (this.score > 2520 && this.hardtime > 500) this.hard(500);
        else if (this.score > 1800 && this.hardtime > 600) this.hard(600);
        else if (this.score > 1200 && this.hardtime > 700) this.hard(700);
        else if (this.score > 720 && this.hardtime > 800) this.hard(800);
        else if (this.score > 360 && this.hardtime > 900) this.hard(900);
        else if (this.score > 120 && this.hardtime > 1000) this.hard(1000);
      }, num);
    },
    pop(index) {
      if (this.leaf < 2 || this.rice < 1) {
        this.$store.dispatch("snack", "包一个粽子需要两片粽叶和一团糯米哦~");
        return;
      }
      if (this.img[0].pick == index) {
        this.img.shift();
        this.leaf -= 2;
        this.rice -= 1;
        if (this.combo > 330) this.score += 18;
        else if (this.combo > 216) this.score += 15;
        else if (this.combo > 126) this.score += 12;
        else if (this.combo > 60) this.score += 9;
        else if (this.combo > 18) this.score += 6;
        else this.score += 3;
        this.combo++;
        this.zongzi++;
      } else {
        this.combo = 0;
        for (let i = 0; i < 3; i++) {
          let pick = Math.floor(Math.random() * 4);
          this.img.push({ pick, img: this.stuffing[pick] });
        }
      }
    }
  }
};
</script>

<style>
@font-face {
  font-family: impact;
  src: url("../assets/impact.ttf");
}
.position {
  position: relative;
  padding: 30px 20px 0;
  height: 100%;
}
.img {
  position: absolute !important;
  left: -60px !important;
}
.zongzi {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.start {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.font {
  font-family: Impact;
  font-size: 30px;
  line-height: 60px;
  color: #00463e;
}
.right {
  text-align: right !important;
}
.size {
  font-size: 100px !important;
}
.center {
  width: 88px;
  margin-top: 60px;
  background-color: #ebfaf580;
}
.center > div:nth-of-type(2) {
  margin-top: 30px;
}
.center button {
  margin: 0;
  padding: 0;
}
.bottom {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 20px;
  justify-content: space-around;
}
.bottom > .border {
  width: 20% !important;
  border-radius: 50%;
  border: 1px solid #00463e;
  flex-grow: 0 !important;
}
.top {
  position: absolute;
  top: 500px;
  width: 100%;
  left: 0;
}
</style>