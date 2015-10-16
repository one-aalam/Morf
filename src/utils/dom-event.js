module.exports.debounce = function(callback, wait) {
  var timeout;

  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(callback, wait);
  };
};
