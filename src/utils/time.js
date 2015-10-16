module.exports.until = function(timeTo) {
  var minutes = Math.round(timeTo / 60);
  var seconds = Math.round((timeTo - (minutes * 60)) / 30) * 30;
  return "" + minutes + ":" + (seconds < 10 ? "0" : "") + (seconds > 0 ? seconds : "0");
};