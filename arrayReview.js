var threeItems = [1,2,3];
//create a function named 'last' that returns the last object from 'threeItems'
//alert the result of your function

  //code here
var last = function(arr) {

	return arr[arr.length - 1];
};

lastItem = last(threeItems);


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

  //code here
var orderedArray = function(arr) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== i) {
			arr.splice(i,0,i);
		};		
	};
	return arr;
};


//Loop through evenArray removing all values that aren't even 
//hint x % 2 --> checks for even numbers
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

var removeOdds = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		if((arr[i] % 2) !== 0){
			debugger;
			arr.splice(i,1);
			i--;
		};
	};
	return arr;
};



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
var evalRandomNum = function(arr, getRandomFunct) {
	var randomNum = getRandomFunct();
	for (var i = 0; i < arr.length; i++) {
		debugger;
	 	if(randomNum === arr[i]) {
	 		alert("The random number " + randomNum + " was found in index # " + i + " of your array!");
	 	} else {
	 		alert("Your random number wasn't found in the array!")
	 	};
	}; 
};


evalRandomNum(randomArray,getRandomArbitrary);

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];

var copyAddTwo = function(arr) {
	var second = arr.slice(0,arr.length);
	second.push((arr.length + 1),(arr.length + 2));
	return second;
}



alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];