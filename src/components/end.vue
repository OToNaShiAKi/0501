<template>
  <v-dialog persistent fullscreen v-model="$store.state.dialog.end">
    <v-card class="bgc">
      <v-card-title>
        <h3 class="primary--text">本次得分：{{$store.state.score}}</h3>
      </v-card-title>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>最高分：{{$store.state.max}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>排名：{{$store.state.rank}}</v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list subheader>
        <v-subheader>获奖风采：</v-subheader>
        <v-list-tile :class="text[i]" v-for="(v, i) in $store.state.leaderboard" :key="i">
          <v-list-tile-avatar>
            <v-icon :color="color[i]" v-if="i < 3">whatshot</v-icon>
            <span v-else>{{i + 1}}</span>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{v.nick}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>{{v.score}}</v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-card-actions>
        <v-btn color="accent" @click="free" v-if="$store.state.login == 1" flat>免费领粽子</v-btn>
        <v-btn color="accent" flat v-if="$store.state.wrong" @click="send">{{$store.state.wrong}}</v-btn>
        <v-spacer/>
        <v-btn color="secondary" flat @click="start">重新开始</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "end",
  data: () => ({
    color: ["yellow lighten-2", "grey lighten-2", "orange lighten-2"],
    text: [
      "yellow--text text--lighten-2",
      "grey--text text--lighten-2",
      "orange--text --text--lighten-2"
    ]
  }),
  methods: {
    start() {
      this.$store.dispatch("start");
      this.$store.dispatch("dialog", { dialog: "end", show: false });
    },
    send() {
      this.$store.dispatch("score", {
        nick: this.$store.state.nick,
        score: this.$store.state.score
      });
    },
    free() {
      this.$store.dispatch("dialog", { dialog: "take", show: true });
      this.$store.dispatch("dialog", { dialog: "end", show: false });
    }
  }
};
</script>
