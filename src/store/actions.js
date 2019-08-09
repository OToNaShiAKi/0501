import axios from "axios";
import qs from "qs";

export default {
    interval: ({
        commit
    }, login) => {
        axios
            .post("/duanwu/php/nick.php", qs.stringify(login))
            .then(res => {
                if (res.data == 1 || res.data == -1) {
                    commit("interval", {
                        nick: login.nick,
                        login: res.data
                    });
                } else if (res.data == 0) commit("snack", "昵称重复或密码错误！");
                else throw res;
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", "网络连接失败！");
            });
    },
    dialog: ({
        commit
    }, dialog) => {
        commit("dialog", dialog);
    },
    start: ({
        commit
    }) => {
        commit("start");
    },
    information: ({
        commit
    }, infor) => {
        axios
            .post("/duanwu/php/information.php", qs.stringify(infor))
            .then(res => {
                if (res.data) {
                    commit("interval", {
                        login: -1
                    });
                    commit("snack", "信息提交成功！");
                } else throw res;
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", "网络连接失败！");
            });
    },
    snack: ({
        commit
    }, str) => {
        commit("snack", str);
    },
    score: ({
        commit
    }, update) => {
        axios
            .post("/duanwu/php/score.php", qs.stringify(update))
            .then(res => {
                if (res.data.state == 1) {
                    commit("score", {
                        leaderboard: res.data.leaderboard,
                        score: update.score,
                        max: res.data.max,
                        rank: res.data.rank,
                        wrong: false
                    });
                } else if (res.data.state == 0) {
                    commit("score", {
                        leaderboard: res.data.leaderboard,
                        score: update.score,
                        max: res.data.max,
                        rank: res.data.rank,
                        wrong: "重新发送分数"
                    });
                    commit("snack", "修改分数失败，请重新发送！");
                } else if (res.data.state == -1) {
                    commit("score", {
                        score: update.score,
                        max: res.data.max,
                        wrong: "获取排行榜"
                    });
                    commit("snack", "获取排行榜失败，请重新获取！");
                } else throw res;
            })
            .catch(res => {
                window.console.log(res);
                commit("snack", "网络连接失败！");
                commit("score", {
                    score: update.score,
                    max: res.data.max,
                    wrong: "重新发送分数"
                });
            });
    },
    rank: () => axios.get("/duanwu/php/rank.php").then(res => {
        if (res.data.length > 0) return res.data;
        else throw res;
    }).catch(res => {
        window.console.log(res);
        return false;
    })
};