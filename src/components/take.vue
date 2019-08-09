<template>
  <v-dialog fullscreen v-model="$store.state.dialog.take">
    <v-card class="bgc">
      <v-card-title>
        <h3>免费领粽子！</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          :error-messages="name.mess"
          v-model="name.value"
          label="姓名"
          maxlength="8"
          required
        />
        <v-text-field
          :error-messages="tel.mess"
          v-model="tel.value"
          label="手机"
          maxlength="11"
          required
          type="tel"
        />
        <v-text-field
          prepend-inner-icon="U"
          :error-messages="uid.mess"
          v-model="uid.value"
          label="学号"
          maxlength="9"
          required
          type="tel"
        />
        <know/>
      </v-card-text>
      <v-card-actions>
        <v-btn flat color="secondary" @click="start">直接开始</v-btn>
        <v-spacer/>
        <v-btn flat color="accent" @click="information">提交</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import know from "./know.vue";

export default {
  name: "take",
  components: {
    know
  },
  data: () => ({
    name: {
      mess: "",
      value: ""
    },
    tel: {
      mess: "",
      value: ""
    },
    uid: {
      mess: "",
      value: ""
    }
  }),
  methods: {
    start() {
      this.$store.dispatch("start");
      this.$store.dispatch("dialog", {dialog: "take", show: false});
    },
    information() {
      if (this.name.value.length == 0) {
        this.name.mess = "姓名不可为空！";
        return;
      } else this.name.mess = "";
      if (!this.tel.value.match(/\d{11}/)) {
        this.tel.mess = "请输入合法手机号";
        return;
      } else this.tel.mess = "";
      if (!this.uid.value.match(/\d{9}/)) {
        this.uid.mess = "请输入合法学号";
        return;
      } else this.uid.mess = "";
      this.$store.dispatch("information", {
        name: this.name.value,
        tel: this.tel.value,
        uid: this.uid.value,
        nick: this.$store.state.nick
      });
    }
  }
};
</script>

<style>
.bgc {
  background-color: rgba(255, 255, 255, 0.8) !important;
}
</style>
