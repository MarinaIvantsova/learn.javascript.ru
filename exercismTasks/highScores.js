// Manage a game player's High Score list.

// Your task is to build a high-score component of the classic Frogger game,
// one of the highest selling and addictive games of all time,
// and a classic of the arcade era.
// Your task is to write methods that return the highest score from the list,
// the last added score and the three highest scores.

class HighScores {
    constructor(input) {
        this.input = input;
    }

    get scores() {
        return this.input;
    }

    get latest() {
        return this.input.pop();
    }

    get personalBest() {
        return Math.max(...this.input);
    }

    get personalTopThree() {
        return this.input.sort((a, b) => b - a).slice(0, 3);
    }
}

// const input = [30, 50, 20, 70];
// console.log(new HighScores(input).scores);

// const input = [100, 0, 90, 30];
// console.log(new HighScores(input).latest);

// const input = [40, 100, 70];
// console.log(new HighScores(input).personalBest);

const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
console.log(new HighScores(input).personalTopThree);
