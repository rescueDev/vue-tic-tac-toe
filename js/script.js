var app = new Vue({
  el: "#game",
  data: {
    round: 0,
    grid: [],
    indexSelected: 0,
    cellSelected: "",
    user1: "X",
    user2: "O",
    winningConditions: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9], //orizzontali
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9], //verticali
      [1, 5, 9],
      [3, 5, 7], //diagonali
    ],
    winner: "",
    displayWinner: "",
    endGame: false,
  },
  mounted: function () {
    for (let index = 0; index < 9; index++) {
      this.grid.push("");
    }
    console.log("Grid", this.grid);
  },
  methods: {
    clickCell(cella, index) {
      this.indexSelected = index;
      this.cellSelected = cella;

      //inizia la x
      if (cella === "") {
        if (this.round % 2 === 0) {
          this.$set(this.grid, index, this.user1);
          console.log(this.grid);
        } else {
          this.$set(this.grid, index, this.user2);
          console.log(this.grid);
        }
        this.round++;
      }
      this.checkWinner();
      console.log("Grid after", this.grid);
      console.log("Round", this.round);
      console.log("Winning ", this.winningConditions);
    },
    checkWinner() {
      this.winningConditions.forEach((el) => {
        var indiceArr = el;
        console.log("indiceArr", indiceArr);
        for (let j = 0; j < indiceArr.length; j++) {
          const element = indiceArr[j];
        }
      });
      for (let index = 0; index < this.grid.length; index++) {
        const element = this.grid[index];
        if (
          //x orizzontali
          (this.grid[0].includes("X") &&
            this.grid[1].includes("X") &&
            this.grid[2].includes("X")) ||
          (this.grid[3].includes("X") &&
            this.grid[4].includes("X") &&
            this.grid[5].includes("X")) ||
          (this.grid[6].includes("X") &&
            this.grid[7].includes("X") &&
            this.grid[8].includes("X")) ||
          (this.grid[0].includes("X") &&
            this.grid[3].includes("X") &&
            this.grid[6].includes("X")) ||
          (this.grid[1].includes("X") &&
            this.grid[4].includes("X") &&
            this.grid[7].includes("X")) ||
          (this.grid[2].includes("X") &&
            this.grid[5].includes("X") &&
            this.grid[8].includes("X")) ||
          (this.grid[0].includes("X") &&
            this.grid[4].includes("X") &&
            this.grid[8].includes("X")) ||
          (this.grid[2].includes("X") &&
            this.grid[4].includes("X") &&
            this.grid[6].includes("X")) === true
        ) {
          this.winner = "X";
          this.endGame = true;
        } else if (
          (this.grid[0].includes("O") &&
            this.grid[1].includes("O") &&
            this.grid[2].includes("O")) ||
          (this.grid[3].includes("O") &&
            this.grid[4].includes("O") &&
            this.grid[5].includes("O")) ||
          (this.grid[6].includes("O") &&
            this.grid[7].includes("O") &&
            this.grid[8].includes("O")) ||
          (this.grid[0].includes("O") &&
            this.grid[3].includes("O") &&
            this.grid[6].includes("O")) ||
          (this.grid[1].includes("O") &&
            this.grid[4].includes("O") &&
            this.grid[7].includes("O")) ||
          (this.grid[2].includes("O") &&
            this.grid[5].includes("O") &&
            this.grid[8].includes("O")) ||
          (this.grid[0].includes("O") &&
            this.grid[4].includes("O") &&
            this.grid[8].includes("O")) ||
          (this.grid[2].includes("O") &&
            this.grid[4].includes("O") &&
            this.grid[6].includes("O")) === true
        ) {
          this.winner = "O";
          this.endGame = true;
        } else if (this.round === 9) {
          this.endGame = true;
          this.winner = "draw";
        }
      }
    },
  },
  watch: {
    winner(value) {
      if (value === "X") {
        this.displayWinner = "X";
      } else if (value === "O") {
        this.displayWinner = "O";
      } else if (value === "draw") {
        this.displayWinner = "draw";
      }
    },
  },
});
