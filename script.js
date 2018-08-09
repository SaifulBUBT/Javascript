var arr = [34,56,11,3,66,22,90,10,5]


arr.sort(function(a,b){
	return a-b
})
//document.write(arr)
console.log(arr)

////////////// create an arry of object

// var people =[
// 	{name: 'Saiful', age:25},
// 	{name: 'Jonshon', age:30},
// 	{name: 'Darek', age: 19},
// 	{name: "Perker", age:22}



// ]
// //// sort with age
// people.sort(function(a,b){
// 	return a.age - b.age
// });

// console.log(people)




///// sort with name

var people =[
	{name: 'Saiful', age:25},
	{name: 'Jonshon', age:30},
	{name: 'Darek', age: 19},
	{name: "Perker", age:22}



]

people.sort(function(a,b){
	if(a.name > b.name){
		return 1
	}
	else if(a.name < b.name){
		return -1
	} else{return 0}
})

console.log(people)





