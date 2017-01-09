'use strict';

exports.makeTable = function(data, headers, options) {
  var table = '<table';
  var style;
  if (options.id) {
    table += ' id="' + options.id + '"';
  } 
  if (options.class) {
    table += ' class="' + options.class + '"';
  }
  table += '><thead>';

  for (var i = 0; i < headers.length; i++) {
    table += '<th class="data">' + headers[i] + '</th>';
  }
  table += '</thead><tbody>';

  for (var j = 0; j < data.length; j++) {
    table += '<tr>';
    var obj = data[j];
    for (var key in obj) {
      var val = obj[key];
      //we wanted fnexdt to determine if account is active, but don't want to display the value
      if (key !== 'fnexdt') {
        table += '<td>' + val + '</td>';
      }
    } 
    var sis = !data[j].hasOwnProperty('fnexdt');
    if (options.td && (data[j].fnexdt ==='0' || sis ===true)) {
      table += '<td id="' + j + '">' + options.td + '</td>';
    } else {
      table += '<td><div title="not active" class="icon-notice"></div></td>';
    }
    table += '</tr>';
  }
  table += '</tbody></table>';
  return table;
};

exports.getNearestAncestorByTagName = function(htmlElementNode, parentTagName) {
  while (htmlElementNode) {
    htmlElementNode = htmlElementNode.parentNode;
    if (htmlElementNode.tagName.toLowerCase() ===parentTagName) {
      return htmlElementNode;
    }
  }
  return undefined;
};