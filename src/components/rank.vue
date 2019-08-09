<template>
  <v-dialog fullscreen v-model="$store.state.dialog.rank">
    <v-card>
      <v-card-title>排行榜（仅展示前100）</v-card-title>
      <v-list v-if="wrong" dense subheader>
        <v-subheader>
          <v-icon>beenhere</v-icon>表示已填信息可领取粽子（未填信息奖品顺延）
        </v-subheader>
        <v-list-tile :class="text[i]" v-for="(v, i) in rank" :key="i">
          <v-list-tile-avatar>
            <v-icon :color="color[i]" v-if="i < 3">whatshot</v-icon>
            <span v-else>{{i + 1}}</span>
          </v-list-tile-avatar>
          <v-list-tile-content>{{v.nick}}</v-list-tile-content>
          <v-icon v-if="v.flag == -1" color="primary" small>beenhere</v-icon>
          <v-list-tile-action>{{v.score}}</v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-card-text v-else>获取排行榜失败</v-card-text>
      <v-card-actions>
        <v-btn flat color="error" @click="get">刷新</v-btn>
        <v-spacer/>
        <v-btn flat color="primary" @click="back">返回</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "rank",
  data: () => ({
    rank: [],
    color: ["yellow lighten-2", "grey lighten-2", "orange lighten-2"],
    text: [
      "yellow--text text--lighten-2",
      "grey--text text--lighten-2",
      "orange--text --text--lighten-2"
    ],
    wrong: false
  }),
  mounted() {
    this.get();
  },
  methods: {
    get() {
      this.$store.dispatch("rank").then(res => {
        window.console.log(res);
        if (res) {
          this.rank = res;
          this.wrong = true;
        } else this.wrong = false;
      });
    },
    back() {
      this.$store.dispatch("dialog", {
        dialog: "rank",
        show: false
      });
    }
  }
};
</script>
