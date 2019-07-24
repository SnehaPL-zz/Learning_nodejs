var lines = +process.argv[2];

const noOfLines = function(times) {
    return new Array(times).fill('*').join('');
}
 
function leftAlignedTriangle(lines) {
    const result = [];
    for (var i = 1; i <= lines; i++) {
        result.push(noOfLines(i))
    }
    return result.join("\n");
}
 
module.exports = leftAlignedTriangle;
 
console.log(leftAlignedTriangle(lines));