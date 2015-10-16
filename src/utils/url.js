

module.exports.search = function() {
  return window.location.search;
};

module.exports.toQueryString = function(properties) {
  var property;
  var queryString = [];

  for (property in properties) {
    if (properties.hasOwnProperty(property)) {
      queryString.push("" + property + "=" + properties[property]);
    }
  }

  return "?" + queryString.join("&");
};

module.exports.getQueryStringProperty = function(queryString, prop) {
  var pairs = queryString.replace(/^\?/, "").replace(/\/$/, "").split("&");
  var properties = {};

  pairs.forEach(function(pair) {
    pair = pair.split("=");
    properties[ pair[0] ] = pair[1];
  });

  return properties[prop];
};

module.exports.ajax = function(url, success, error) {
  var request = new XMLHttpRequest;

  request.open("GET", url);

  request.onload = function() {
    if (this.status === 200) {
      success(this.responseText);
    }
    else {
      error(new Error(this.status));
    }
  };

  request.onerror = function() {
    error(new Error(this.status));
  };

  request.send();
};

