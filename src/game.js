class Game2048 {
    constructor(size = 4) {
        this.size = size;
        this.board = this.createBoard();
        this.addTile();
        this.addTile();
    }

    createBoard() {
        return Array.from({ length: this.size }, () => Array(this.size).fill(0));
    }

    addTile() {
        let added = false;
        while (!added) {
            let row = Math.floor(Math.random() * this.size);
            let col = Math.floor(Math.random() * this.size);
            if (this.board[row][col] === 0) {
                this.board[row][col] = Math.random() > 0.1 ? 2 : 4;
                added = true;
            }
        }
    }

    slide(row) {
        let arr = row.filter(val => val);
        let missing = this.size - arr.length;
        let zeros = Array(missing).fill(0);
        arr = zeros.concat(arr);
        return arr;
    }

    combine(row) {
        for (let i = this.size - 1; i >= 1; i--) {
            let a = row[i];
            let b = row[i - 1];
            if (a === b) {
                row[i] = a + b;
                row[i - 1] = 0;
            }
        }
        return row;
    }

    move(direction) {
        for (let i = 0; i < this.size; i++) {
            if (direction === 'left' || direction === 'right') {
                let row = this.board[i];
                row = direction === 'left' ? this.slide(row) : this.slide(row.reverse()).reverse();
                row = this.combine(row);
                row = direction === 'left' ? this.slide(row) : this.slide(row.reverse()).reverse();
                this.board[i] = row;
            } else {
                let col = this.board.map(row => row[i]);
                col = direction === 'up' ? this.slide(col) : this.slide(col.reverse()).reverse();
                col = this.combine(col);
                col = direction === 'up' ? this.slide(col) : this.slide(col.reverse()).reverse();
                for (let j = 0; j < this.size; j++) {
                    this.board[j][i] = col[j];
                }
            }
        }
        this.addTile();
    }

    isGameOver() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] === 0) return false;
                if (i !== this.size - 1 && this.board[i][j] === this.board[i + 1][j]) return false;
                if (j !== this.size - 1 && this.board[i][j] === this.board[i][j + 1]) return false;
            }
        }
        return true;
    }

    printBoard() {
        console.log(this.board.map(row => row.join(' | ')).join('\n'));
    }
}

module.exports = Game2048;
