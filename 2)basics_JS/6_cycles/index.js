// Циклы
// for
console.log("Цикл for:");
var people = ["Tom","Alice","Bob","Sam"];
for(var i = 0; i < people.length; i++) {
	console.log(people[i]);
}

// for .. in
console.log("Цикл for..in:");
var people = ["Tom","Alice","Bob","Sam"];
for(var index in people) {
	console.log(people[index]);
}

// for .. of
console.log("Цикл for..of:");
let users = ["Tom", "Bob", "Sam"];
for(let val of users)
    console.log(val);

// while
console.log("Цикл while:");
var people = ["Tom", "Alice", "Bob", "Sam"];
var index = 0;
while(index < people.length){
     
    console.log(people[index]);
    index++;
}

// do while
console.log("Цикл do..while:");
var x = 1;
do{
    console.log(x * x);
    x++;
}while(x < 10)

// операторы continue и break
// break
document.write("оператор break:"+"</br>");
var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (var i = 0; i < array.length; i++) {
	    if (array[i] > 10)
	        break;
	    document.write(array[i] + "</br>");
	}

// continue
document.write("оператор continue:"+"</br>");
var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (var i = 0; i < array.length; i++)
{
    if (array[i] > 10)
        continue;
    document.write(array[i] + "</br>");
}