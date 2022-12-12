"use strict";
function flattenAndSort(array) { 
  return array.flat(1).sort((a, b) => a - b)
}