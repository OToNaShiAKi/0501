<template>
  <v-list subheader dense>
    <v-list-group>
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>奖项设置</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-list-tile v-for="i in 6" :key="i">
        <v-list-tile-avatar>
          第
          <v-icon :color="color[i - 1]">looks_{{i | icon}}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-sub-title class="right">{{6 - i + 1}}个</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-avatar>
          <v-img :src="zongzi"/>
        </v-list-tile-avatar>
      </v-list-tile>
    </v-list-group>
    <v-list-group>
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>查看领取规则</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-list-tile v-for="(v, i) in know" :key="i">
        <v-list-tile-content>{{v}}</v-list-tile-content>
      </v-list-tile>
    </v-list-group>
    <v-list-group>
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>游戏玩法</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-list-tile v-for="(v, i) in play" :key="i">
        <v-list-tile-content>{{v}}</v-list-tile-content>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
import zongzi from "@/assets/zongzi.png";

export default {
  name: "list",
  data: () => ({
    zongzi,
    know: [
      "活动时间为即日起至6月9日24:00。",
      "未填写个人信息或非华科学生仍参与排名，但不参与领取粽子。",
      "活动结束后会有获奖短信提醒，请在6月10日15:30-20:30于紫崧10栋领取。",
      "领取时请凭获奖短信和华科学生卡领取。",
      "若为之后补填个人信息，前期游戏成绩依旧有效。",
      "若为他人代领，请转发短信并转交学生卡。",
      "前6名中存在未填信息或非华科学生，奖品自动顺延。",
      "若分数相同，则平分名次所得粽子数之和。"
    ],
    play: [
      "点击左侧煮糯米、剪粽叶可以获得糯米和粽叶。",
      "包一个粽子需一片粽叶和两团糯米。",
      "根据最上方食材选择底部对应食材消除。",
      "超出最下方横线即结束。",
      "由于开发时间短，存在不细致的地方还请谅解。"
    ],
    color: ["yellow lighten-2", "grey lighten-2", "orange lighten-2"]
  })
};
</script>
