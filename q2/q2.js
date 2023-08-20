let obj = {
  counter: 0,
  increase: function () {
    this.counter += 1;
    return this;
  },

  decrease: function () {
    this.counter -= 1;
    return this;
  },

  rest: function () {
    this.counter = 0;
    return this;
  },

  read: function () {
    console.log(this.counter);
    return this;
  },
};
obj.increase();
obj.increase();
obj.increase();
obj.rest();
obj.read();

obj.decrease();
obj.read();
obj.rest();
obj.read();
