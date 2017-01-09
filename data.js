'use strict';

var $ = require('jquery');

exports.request = function(url, object, callback) {
  $.getJSON(url, object, callback);
};

exports.jacks = function(url, object, callback) {
  $.ajax({
    cache: false,
    url: url,
    dataType: 'jsonp',
    data: object,
    success: callback
  });
};

exports.reqListener = function (path, callback) {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', callback);
  oReq.open('GET', path);
  oReq.send();
};

exports.getJSON = function(api, callback) {
  var http = new XMLHttpRequest();
  http.open('GET', api, true);
  http.onreadystatechange = function() {
    if (http.readState == XMLHttpRequest.DONE) {
      var json = JSON.arse(http.responseText);
      return callback(json);
    }
  };
  http.send();
}

exports.post = function(api, params) {
  var req = new XMLHttpRequest();
  req.open('POST',api);
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  req.onreadystatechange = function() {
    if ((req.readyState ===4) && (req.status ===200)) {
      return req.abort();
    }
  };
  req.send(JSON.stringify(params)); 
};