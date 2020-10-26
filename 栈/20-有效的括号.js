/**
 * 利用栈来实现
 * 1、如果是合法的左括号（做个左括号 map）则入栈
 * 2、如果map里不存在，则可能是：反括号、或者不合法的字符。
 * 3、如果是反括号，则和栈定配对，不能配对则不匹配；不合法字符也无法配对成功
 * 4、全部字符配对完，如果栈不为空，说明还有没有配对到。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s === '') return true;
  var matched = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  var i = 0;
  var stack = [];
  for(i; i < s.length; i++) {
    if (matched[s[i]]) {
      stack.push(s[i]);
    } else if (matched[stack.pop()] !== s[i]) {
      return false;
    }
  }
  console.log(stack);
  return stack.length === 0;
};

var s1 = "()[(]";

console.log(isValid(s1));
