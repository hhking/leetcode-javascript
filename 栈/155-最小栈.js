/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.min === undefined) {
    this.min = x
  } else if (x < this.min) {
    this.min = x;
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (!this.stack.length) return null;
  const item = this.stack.pop();
  this.min = Math.min(...this.stack);
  return item;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (!this.stack.length) return null;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};
