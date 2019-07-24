var column = +process.argv[2];
var row    = +process.argv[3];
 
const createRowOfSize = function(times) {
    return new Array(times).fill('*').join('');
}
 
function filledRectangle(column, row) {
    const result = [];
    for (var i = 0; i < column; i++) {
        result.push(createRowOfSize(row))
    }
    return result.join("\n");
}
 
module.exports = filledRectangle;
 
console.log(filledRectangle(column, row));