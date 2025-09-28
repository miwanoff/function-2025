let as = [4, 8, 21, 3];

function comp(a, b) {
    return a < b ? -1 : (a == b ? 0 : 1); 
}

as.sort(comp);
console.log(as);

