
makeRandomArray()
console.log(randomArray)

//function creates a new random array of 8 numbers
function makeRandomArray(){
	enableButtons()
	$('#sortAnimation').empty()
	randomArray = [];
	for (var i = 0; i < 8; i++){
		var numPos = [];
		numPos.push(Math.floor(Math.random()*100));
		numPos.push(i*84);
		numPos.push(i);
		numPos.push(i);
		randomArray.push(numPos);
		$('#sortAnimation').append("<div class='number' id='"+i+"' style='left: "+(50+i*84)+"px;'>" + randomArray[i][0] + "</div>")
	}
};

//function runs selection sort function 7 times to sort a random array of 8 numbers
function runSelect(){
	disableButtons()
	for (var i = 0; i<7; i++){
			setTimeout('selectionSort('+i+')', i*2500)
		}
}

//selection sort function. takes input i from runSelect to determine where to begin sorting
function selectionSort(i){
	
	swapOBJ1 = ($.extend(true, [], randomArray));
	
	begin = i;
	lowest = i;
	console.log("lowest:" +lowest)
	console.log("begin:" +begin)
	for (var j = begin; j < 8; j++){
		if(swapOBJ1[j][0] < swapOBJ1[lowest][0])
			lowest = swapOBJ1[j][3];
			lowestnum = swapOBJ1[j][0];
			lowestID = swapOBJ1[j][2];
	}
	
	if (begin != lowest){
		swapPos(randomArray[begin], randomArray[lowest]);
		
		$('#announce').html("Swapping "+randomArray[begin][0]+" and "+randomArray[lowest][0]+"...")
		
		randomArray[lowest][0] = swapOBJ1[begin][0];
		randomArray[begin][0] = swapOBJ1[lowest][0];
		
		randomArray[lowest][2] = swapOBJ1[begin][2];
		randomArray[begin][2] = swapOBJ1[lowest][2];

	}
	else
		$('#announce').html(randomArray[begin][0]+" is already in the correct position. No swap needed!")
	if(i==6)
		setTimeout("done('Selection sort')",2500)
	console.log(randomArray)
}

//function announces completed sorting
function done(type){
	$('#announce').html(type+" completed!")
	enableNewNums()
}

//function called when bubble sort button in pushed. calls the bubbleSort function 7 times and is called again by bubbleSort if a swap occured on the pass that was made
function runBub(){
	disableButtons()
	for (var i = 0; i<7; i++){
			setTimeout('bubbleSort('+i+')', i*800)
		}
	swapped = false;
}


//implements bubble sort
function bubbleSort(i){
	iter = i;
	
	$('#'+ randomArray[iter][2]).fadeTo(125, 0.5)
	$('#'+ randomArray[iter+1][2]).fadeTo(125, 0.5)
	
	$('#'+ randomArray[iter][2]).fadeTo(125, 1)
	$('#'+ randomArray[iter+1][2]).fadeTo(125, 1)
	
	if (randomArray[iter][0] > randomArray[iter+1][0]){
	
		swapBub(randomArray[iter], randomArray[iter+1])
		
		$('#announce').html("Swapping...")
		
		
		lowest = randomArray[iter+1][3];
		lowestnum = randomArray[iter+1][0];
		lowestID = randomArray[iter+1][2];
	
		randomArray[lowest][0] = randomArray[iter][0];
		randomArray[iter][0] = lowestnum;
		
		randomArray[lowest][2] = randomArray[iter][2];
		randomArray[iter][2] = lowestID;
		
		swapped = true;
	}
	else
		$('#announce').html("Skipping...")
	
	if(i==6 && swapped == true)
		setTimeout('runBub()', 800)
	if(i==6 && swapped == false)
		done("Bubble sort ")
	console.log(randomArray)
}




//function animates the swap of two numbers. takes two objects in the from [number, ojbectPosition, objID, objArrayIndex]
function swapPos(obj1, obj2){
	$obj1 = $("#"+obj1[2]);
	$obj2 = $("#"+obj2[2]);

	
	$obj1.animate({
	top: 50
	}, 350).promise().done(function(){
	
	$obj2.animate({
	top: 150
	}, 350).promise().done(function(){
	
	$obj1.animate({
	left: 50+obj2[1]
	}, 350).promise().done(function(){
	
	$obj2.animate({
	left: 50+obj1[1]
	}, 350).promise().done(function(){
	
	$obj1.animate({
	top: 250
	}, 350).promise().done(function(){
	
	$obj2.animate({
	top: 250
	}, 350)
	
		
	});
	});	
	});
	});
	});
}

//function animates bubble sort swaps. takes two objects in the from [number, ojbectPosition, objID, objArrayIndex]
function swapBub(obj1, obj2){
	$obj1 = $("#"+obj1[2]);
	$obj2 = $("#"+obj2[2]);
	
	console.log("swapBub called")
	
	
	$obj1.animate({
	left: 50+obj2[1]
	}, 350).promise().done(function(){
	
	$obj2.animate({
	left: 50+obj1[1]
	}, 350)
	
	});
}



//function called when Insertion sort html button is pressed, calls insertion sort 7 times
function insertCall (){
	disableButtons()
	for (var i = 1; i<8; i++){
		setTimeout('insertionSort('+i+')', (i-1)*2500)
	}
}

//function implements insertion sort
function insertionSort(i){

	swapOBJ1 = ($.extend(true, [], randomArray));
	console.log(swapOBJ1)
	swapIndex = swapOBJ1[i][3];
	
	for (var j = swapOBJ1[i][3]-1; j>=0; j--){
		if (randomArray[i][0] < randomArray[j][0])
			swapIndex = swapOBJ1[j][3];
	}
	console.log(i)
	console.log(swapIndex)
	
	if (swapIndex != (i)){
	
		$('#announce').html("Inserting "+randomArray[i][0]+" before "+ randomArray[swapIndex][0]+"!")
		
		swapHover(swapOBJ1[swapIndex], swapOBJ1[i])
		
		for (var k = swapOBJ1[i][3]; k >= swapIndex+1; k--){
			rightShift(swapOBJ1[k-1])
			randomArray[k][0] = swapOBJ1[k-1][0];
			randomArray[k][2] = swapOBJ1[k-1][2];
		}
		
		randomArray[swapIndex][0] = swapOBJ1[i][0];
		randomArray[swapIndex][2] = swapOBJ1[i][2];
	}
	
	else
		$('#announce').html(randomArray[i][0]+" is already in the correct position!")
	
	console.log(randomArray)
	if (i==7)
		setTimeout("done('Insertion sort')",2500)
}

//inserts current object into approprite position in sorted array over 1.6 seconds
function swapHover(obj1, obj2){
	$obj1 = $("#"+obj1[2]);
	$obj2 = $("#"+obj2[2]);
	
	console.log("swapInsert called")
	
	$obj2.animate({
	top: 150
	}, 400).promise().done(function(){
	
	$obj2.animate({
	left: 50+obj1[1]
	}, 400).promise().done(function(){
	
	$obj2.animate({
	top: 250
	}, 1000)
	
		
	});
	});
}

//shifts objects to the right to make room for inserted object over 1.2 seconds
function rightShift(obj1){
	$obj1 = $("#"+obj1[2]);
	
	$obj1.animate({
	left: 84+50+obj1[1]
	}, 1200)
}

//function called when merge sort HTML button is pressed, begins the merge sort and merge animatinon functions
function runMerge(){
    randomArray1 = randomArray.slice();
	disableButtons()
	mergeUp1()
	mergeSort(randomArray)
}

//sorts randomArray using merge sort
function mergeSort(list){
	if (list.length < 2){
		return list
	}
	var halfrandomArray = Math.floor(((list.length)-1)/2)
	var list1 = mergeSort(list.slice(0, halfrandomArray+1))
	var list2 = mergeSort(list.slice(halfrandomArray+1, list.length))
	return merge(list1,list2)
}

//merge function for mergesort
function merge(list1,list2){
	sorted = [];
    var i = 0;
    var j = 0;
    while ((i < list1.length) || (j < list2.length)){
		if ( i == list1.length){
			sorted.push(list2[j])
			j++
		}
		else if (j == list2.length){
			sorted.push(list1[i])
			i++
		}
		else if (list1[i] <= list2[j]){
			sorted.push(list1[i])
			i++
		}
		else{
			sorted.push(list2[j])
			j++
		}
	}
	return sorted
}

//first function for handling merge sort animation. the animation of merge sort on screen is separate from the actual merge operation performed on randomArray.
function mergeUp1(){
	$('#announce').html("Splitting into 2 groups of 4!")
	for (obj1 in randomArray1){
	$obj1 = $("#"+randomArray1[obj1][2]);
	if (randomArray1[obj1][2] <=3){
	$obj1.animate({
	top: 150, left: randomArray1[obj1][1]-15+50
	}, 1250)
	}
	else{
	$obj1.animate({
	top: 150, left: randomArray1[obj1][1]+15+50
	}, 1250)
	}
	}
	setTimeout('mergeUp2()', 1250)
}

//second animation function for merge sort
function mergeUp2(){
	$('#announce').html("Splitting into 4 groups of 2!")
	for (obj1 in randomArray1){
	$obj1 = $("#"+randomArray1[obj1][2]);
	if (randomArray1[obj1][2] <=1){
	$obj1.animate({
	top: 50, left: randomArray1[obj1][1]-50+50
	}, 1250)
	}
	else if (randomArray1[obj1][2] >=6){
	$obj1.animate({
	top: 50, left: randomArray1[obj1][1]+50+50
	}, 1250)
	}
	else if ((randomArray1[obj1][2] ==2) || (randomArray1[obj1][2] ==3)){
	$obj1.animate({
	top: 50, left: randomArray1[obj1][1]-20+50
	}, 1250)
	}
	else{
	$obj1.animate({
	top: 50, left: randomArray1[obj1][1]+20+50
	}, 1250)
	}
	}
	setTimeout('mergeSwap()', 1250)
}

//third animation function for merge sort. swaps values in each 2 value pair
function mergeSwap(){
	$('#announce').html("Swapping values in each pair so that the lowest value is first!")
	for (obj1 in randomArray1){
	obj1 = parseInt(obj1)
	$obj1 = $("#"+randomArray1[obj1][2]);
		if (obj1 % 2 == 0){
			if (randomArray1[obj1][0] > randomArray1[obj1+1][0]){
				
				$obj2 = $("#"+randomArray1[obj1+1][2]);
				
				if (randomArray1[obj1][2] ==0){
				$obj2.animate({
				left: randomArray1[obj1][1]-50+50
				}, 1250)
				
				$obj1.animate({
				left: randomArray1[obj1+1][1]-50+50
				}, 1250)
				
	
				}
				
				else if (randomArray1[obj1][2] ==6){
				$obj2.animate({
				left: randomArray1[obj1][1]+50+50
				}, 1250)
				
				$obj1.animate({
				left: randomArray1[obj1+1][1]+50+50
				}, 1250)
				
				}
				else if ((randomArray1[obj1][2] ==4) || (randomArray1[obj1][2] ==3)){
				$obj2.animate({
				left: randomArray1[obj1][1]+20+50
				}, 1250)
				
				$obj1.animate({
				left: randomArray1[obj1+1][1]+20+50
				}, 1250)
				
				}
				else{
				$obj2.animate({
				left: randomArray1[obj1][1]-20+50
				}, 1250)
				
				$obj1.animate({
				left: randomArray1[obj1+1][1]-20+50
				}, 1250)
				
				}
			}
		}
	}
	setTimeout('mergeCall()', 1250)
}

//calls merge down 8 times
function mergeCall(){
	$('#announce').html("Merging 4 sorted groups of 2 into 2 sorted groups of 4!")
	half1 = randomArray1.slice(0,4)
	half2 = randomArray1.slice(4,8)
	console.log(half1, half2)
	for (var i = 0; i<8;i++){
		setTimeout('mergeDown('+i+')', i*350)
	}
	setTimeout('mergeCall2()', 2700)
}

//animates values in each pair of 2 moving the the correct position in two groups of 4
function mergeDown(i){
	
		if (i <=3){
			console.log(i , half1)
			var lowest = half1[0][0]
			var lowestindex = 0
			for (obj1 in half1){
				if (half1[obj1][0] < lowest){
					lowest = half1[obj1][0];
					lowestindex = obj1;
				}	
			}
			$obj1 = $("#"+half1[lowestindex][2]);
			$obj1.animate({
			top: 150, left: (84*i)-15+50
			}, 325)
			half1.splice(lowestindex, 1)
		}
		else{
			console.log(i , half2)
			var lowest = half2[0][0]
			var lowestindex = 0
			for (obj1 in half2){
				if (half2[obj1][0] < lowest){
					lowest = half2[obj1][0];
					lowestindex = obj1;
				}	
			}
			$obj1 = $("#"+half2[lowestindex][2]);
			$obj1.animate({
			top: 150, left: (84*i)+15+50
			}, 325)
			half2.splice(lowestindex, 1)
		}
}

//calls mergeDown2
function mergeCall2(){
	$('#announce').html("Merging 2 sorted groups of 4 into 1 sorted group of 8!")
	for (var i = 0; i<8;i++){
		setTimeout('mergeDown2('+i+')', i*350)
	}
}

//animates each number in the two 4 number blocks moving to the correct position in the final sorted array
function mergeDown2(i){
	var lowest = randomArray1[0][0]
	var lowestindex = 0
	for (obj1 in randomArray1){
		if (randomArray1[obj1][0] < lowest){
			lowest = randomArray1[obj1][0];
			lowestindex = obj1;
		}	
	}
	$obj1 = $("#"+randomArray1[lowestindex][2]);
	$obj1.animate({
	top: 250, left: (84*i)+50
	}, 325)
	randomArray1.splice(lowestindex, 1)
	if (i==7)
		setTimeout("done('Merge sort')",350)
}



function disableButtons()
{
	$('button').attr('disabled', 'disabled');
}

function enableButtons()
{
	$('button').removeAttr('disabled');
}

function enableNewNums()
{
	$('#randomize').removeAttr('disabled');
}


