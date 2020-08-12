<template>
  <v-app id="app">
    <div>
      <v-img class="title" :src="title" width="275" />
      <v-img class="leaf" :src="free" width="186" />
    </div>
    <v-list class="wins" dense subheader>
      <v-subheader>获奖名单</v-subheader>
      <v-list-tile :class="text[i]" v-for="(v, i) in wins" :key="i">
        <v-list-tile-action>
          <v-icon :color="color[i]">whatshot</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{v.name}}</v-list-tile-title>
        <v-list-tile-title>{{v.nick}}</v-list-tile-title>
        <v-list-tile-action>{{v.score}}</v-list-tile-action>
        <v-list-tile-avatar>
          <v-img :src="zongzi" />
          &times;{{6 - i}}
        </v-list-tile-avatar>
      </v-list-tile>
      <v-divider />
      <v-subheader>细则</v-subheader>
      <v-list-tile v-for="(v, i) in know" :key="i">
        <v-list-tile-content>{{v}}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    <start />
  </v-app>
</template>

<script>
import title from "@/assets/title.png";
import free from "@/assets/free.png";
import zongzi from "@/assets/zongzi.png";
import start from "./components/start";

export default {
  name: "app",
  components: {
    start,
  },
  data: () => ({
    title,
    free,
    zongzi,
    color: [
      "yellow lighten-2",
      "grey lighten-2",
      "orange lighten-2",
      "primary",
      "accent",
      "secondary",
    ],
    text: [
      "yellow--text text--lighten-2",
      "grey--text text--lighten-2",
      "orange--text --text--lighten-2",
      "primary--text",
      "error--text",
      "secondary--text",
    ],
    wins: [
      { name: "aaa", nick: "bbb", score: 0 },
      { name: "aaa", nick: "bbb", score: 0 },
      { name: "aaa", nick: "bbb", score: 0 },
      { name: "aaa", nick: "bbb", score: 0 },
      { name: "aaa", nick: "bbb", score: 0 },
      { name: "aaa", nick: "bbb", score: 0 },
    ],
    know: [
      "获奖短信将于6月10日11:00发送完毕，请在6月10日15:30-20:30于紫崧10栋领取。",
      "领取时请凭获奖短信和华科学生卡领取。",
      "若为他人代领，请转发短信并转交学生卡。",
      "该名单已剔除未填写信息用户。",
      "为省去忘记密码时找回的繁琐，允许不同账户绑定同一姓名、手机、电话，颁奖时已剔除相同用户。",
    ],
  }),
};
</script>

<style>
#app {
  background: #ebfaf5 url("./assets/bg.png") center bottom/cover no-repeat;
}
.title {
  margin: 30px auto 0;
}
.leaf {
  margin: 10px auto 0;
}
.wins {
  margin: 20px 15px 10px;
  background-color: rgba(255, 255, 255, 0.8) !important;
}
</style>