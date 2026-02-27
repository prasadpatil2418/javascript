//reduce concepts:
var marks =[10,20,30,40,50];

//creates 2 arguments sum is iterating each value in array and mark is for action (+ here) 
let total= marks.reduce((sum,mark)=>sum+mark,0);
console.log("Total is ", total);

//filter concepts:
var scores = [12,13,14,16,17,23];
//create new array with even no. of score array
var evenScore =[];
for(i=0;i<scores.length; i++)
    {
        if(scores[i]%2 ==0){

            evenScore.push(scores[i])
        }
    }
    console.log(evenScore)

    //creates an arguments and perform the action as per condition
    const newEvenScore = scores.filter(score=>score%2==0)
console.log("new array of scores is",newEvenScore) 

//map concepts:
var array = [10,11,13,16,18]
//creates an arguments and perform action on each element in array
var mappedArray = array.map(score=>score*2)
console.log("mapped array is",mappedArray)
var newSum= mappedArray.reduce((sum,val)=>sum+val,0)
console.log("sum of mapped Array is", newSum)

var array = [10,11,13,16,18]
let sumValue = array.filter(score=>score%2==0).map(score=>score*2).reduce((sum,val)=>sum+val,0)
console.log("total sum is", sumValue)