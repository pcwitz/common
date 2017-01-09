'use strict';

exports.start = function(appendId) {
  var appendTo = document.getElementById(appendId);
  var spinner = document.createElement('img');
  spinner.id = 'spinner';
  var cssString = 'display: block; width: 50px; height: 50px; margin: 0 auto; z-index: 5000;';
  spinner.style.cssText = cssString;
  spinner.src = '../images/spinner.gif';
  appendTo.appendChild(spinner);
};

exports.stop = function() {
  var spinner = document.getElementById('spinner');
  spinner.parentNode.removeChild(spinner);
};