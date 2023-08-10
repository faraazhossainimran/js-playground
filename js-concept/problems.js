function cubeNumber(number) {
    if(typeof number !== 'number' ){
      const cubeNumberMessage = 'Please add a number';
      return cubeNumberMessage;
    } else {
    const cube = number * number * number;
    return cube;
    }
  }

function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
      const matchFinderMessage = "Plase add two string";
      return matchFinderMessage;
    } else if(string1.indexOf(string2) !== -1){
      return true;
    } else {
      return false;
    }
  }  

function sortMaker(arr) {
  var sortedElements = [];
  for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number" || arr[i] < 0) {
          return "Invalid Input"; 
      }
      sortedElements.push(arr[i]);
  }
  for (var i = 0; i < sortedElements.length; i++) {
          if (sortedElements[i] < sortedElements[i + 1]) { 
              var temp = sortedElements[i];
              sortedElements[i] = sortedElements[i + 1];
              sortedElements[i + 1] = temp;
          } else if (sortedElements[i] === sortedElements[i + 1]) {
              return "equal";
          }
  }
  return sortedElements;
}

function findAddress(obj) {
      const street = obj.street || "__";
      const house = obj.house || "__";
      const society = obj.society || "__";
      const address = street+ "," + house + "," + society;
      return address;
  }


function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
      var canPayMessage = "Please add money at first";
      return canPayMessage; 
  } else{
    var totalCost = 0;
    for (var i = 0; i < changeArray.length; i++) {
        totalCost += changeArray[i];
    }
    return totalCost >= totalDue;
  }
}