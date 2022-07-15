class Task {
  constructor(string) {
    this.string = string;
  }
  stringLength() {
    if (this.string.length === 0) {
      return 'length 0';
    } else if (this.string.length > 10) {
      return 'out of range';
    } else {
      return this.string.length;
    }
  }
  reverseString() {
    let rs = [];
    for (let i = this.string.length - 1; i >= 0; i--) {
      rs += this.string[i];
    }
    return rs;
  }
}

module.exports = Task;
