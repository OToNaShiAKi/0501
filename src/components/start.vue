<template>
  <section>
    <v-img class="title" :src="title" width="275"/>
    <v-img class="leaf" :src="free" width="186"/>
    <v-btn class="d-block rank" outline small @click="rank" color="primary">查看排行榜</v-btn>
    <div class="nick">
      <v-text-field
        :error-messages="nick.mess"
        v-model="nick.value"
        label="输入昵称"
        maxlength="8"
        required
      />
      <v-text-field
        :error-messages="pass.mess"
        v-model="pass.value"
        type="password"
        label="设置或输入密码"
        maxlength="16"
        required
      />
    </div>
    <v-img @click="nickname" class="btn" :src="btn" width="90" height="30"/>
  </section>
</template>

<script>
import title from "@/assets/title.png";
import free from "@/assets/free.png";
import btn from "@/assets/btn.png";

export default {
  name: "start",
  data: () => ({
    title,
    free,
    btn,
    nick: {
      mess: "",
      value: ""
    },
    pass: {
      value: "",
      mess: ""
    }
  }),
  methods: {
    nickname() {
      if (this.nick.value.length == 0) {
        this.nick.mess = "用户名不可为空！";
        return;
      } else this.nick.mess = "";
      if (this.pass.value.length < 8) {
        this.pass.mess = "密码至少为8位";
        return;
      } else this.pass.mess = "";
      this.$store.dispatch("interval", {
        nick: this.nick.value,
        pass: this.pass.value
      });
    },
    rank() {
      this.$store.dispatch("dialog", {
        dialog: "rank",
        show: true
      });
    }
  }
};
</script>

<style>
.title {
  margin: 50px auto 0;
}
.leaf {
  margin: 20px auto 0;
}
.nick {
  width: 240px;
  max-width: 80%;
  margin: 50px auto 0 !important;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 6px;
}
.btn {
  margin: 20px auto 0;
}
.rank {
  margin: 20px auto !important;
}
</style>