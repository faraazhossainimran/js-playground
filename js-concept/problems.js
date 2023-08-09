// Problem 1
function cubeNumber(number) {
    if(typeof number !== 'number' ){
      const message = 'Please add a number'
      return message;
    } else {
    const cube = number * number * number;
    return cube;
    }
  }
  const number= "p";
  const cubRresult = cubeNumber(number);
  console.log(cubRresult)



  // problem 4
  const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
  }
  function findAddress(obj) {
    if(!!obj){
      const street = obj.street || "__";
      const house = obj.house || "__";
      const society = obj.society || "__";
      const address = street+ "," + house + "," + society;
      console.log(address)
    } else {
      console.log("add obj")
    }
   console.log(obj);
  }
  findAddress(obj);


  function matchFinder(str1, str2) {
    if (str1.indexOf(str2) !== -1) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test
  var firstString = "Hello, world!";
  var secondString = "2";
  
  var isMatched = matchFinder(firstString, secondString);
  
  console.log(isMatched);