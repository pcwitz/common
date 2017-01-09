'use strict';

exports.slashes = function() {
  var d = new Date();
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();
  var date = month + '/' + day + '/' + year;
  return date;
};