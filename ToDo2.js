// Reverse

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverseArray(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

// Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.Second: allow negative shiftBy (shift L, not R).Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. Fourth: minimize the touches of each element.

function rotateArr(arr, moveBy) {
  reverseArr(arr);
  var actualMovementsNeeded;
  if (moveBy > 0) {
      actualMovementsNeeded = moveBy % arr.length;
  } else {
      actualMovementsNeeded = Math.abs(moveBy) % arr.length;
  }
  if (moveBy > 0) {
      reverseArr(arr,0,actualMovementsNeeded - 1);
      reverseArr(arr,actualMovementsNeeded, arr.length - 1);
  } else {
      reverseArr(arr,0,arr.length-actualMovementsNeeded - 1);
      reverseArr(arr, arr.length - actualMovementsNeeded,arr.length - 1);
  }
}

function reverseArr(arr, startingInd = 0, endingInd = arr.length - 1) {
  var numIterations = 0;
  for (var k = startingInd; k < (startingInd+endingInd)/2; k++) {
      var temp = arr[k];
      arr[k] = arr[endingInd - numIterations];
      arr[endingInd - numIterations] = temp;
      numIterations++;
  }
}

// Filter Range

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, minVal, maxVal) {
  var nextInd = 0;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= minVal && arr[i] <= maxVal) {
          arr[nextInd] = arr[i];
          nextInd++;
      }
  }
  arr.length = nextInd;
}

// Concat

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concatArraysV2(arr1, arr2) {
  var newArr = [];
  buildFrom(newArr,arr1);
  buildFrom(newArr,arr2);
  return newArr;
}

function buildFrom(arrayToBuild, arrayFrom) {
  var curInd = arrayToBuild.length;
  for (var i = 0; i < arrayFrom.length; i++) {
      arrayToBuild[curInd] = arrayFrom[i];
      curInd++;
  }
}