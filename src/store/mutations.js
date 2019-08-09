export default {
    interval: (state, {
        nick,
        login,
    }) => {
        state.nick = nick || state.nick;
        state.login = login;
        if (login == -1) {
            state.start = true;
            state.dialog.take = false;
        } else if (login == 1) state.dialog.take = true;
    },
    dialog: (state, {
        dialog,
        show
    }) => {
        state.dialog[dialog] = show;
    },
    start: (state) => {
        state.start = true;
    },
    snack: (state, str) => {
        state.snack.show = true;
        state.snack.text = str;
    },
    score: (state, {
        leaderboard,
        score,
        rank,
        wrong,
        max
    }) => {
        state.leaderboard = leaderboard;
        state.score = score;
        state.rank = rank;
        state.max = max;
        state.start = false;
        state.dialog.end = true;
        if (wrong) state.wrong = wrong;
    }
}