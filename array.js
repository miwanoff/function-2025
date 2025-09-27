let someArray = [1, 2, 3, 4];
function showArray(arr) {
    for(let i = 0; i < arr.length; ++i) {
        document.writeln(arr[i] + " "); // 1 2 3 4
    }
    document.writeln("<br>");
}

function change(array){
  array[0] = 8; // змінили першый элемент массиву
}

showArray(someArray);
change(someArray)
showArray(someArray);