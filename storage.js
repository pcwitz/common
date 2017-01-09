'use strict';

exports.setFromDOM = function(key, selector) {
  var e = document.querySelector(selector);
  var val = e.innerText || e.textContent; // innerText for IE, textContent for other browsers
  val = val.replace(/\s/g, ''); // remove spaces from name
  localStorage.setItem(key, val);
};

exports.get = function(key) {
  var val = localStorage.getItem(key);
  return val;
};