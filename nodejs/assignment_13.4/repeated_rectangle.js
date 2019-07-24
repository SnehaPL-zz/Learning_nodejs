var column = +process.argv[2];
var row    = +process.argv[3];
var noOfRectangles=+process.argv[4];
 
const creatRectangle = function(noOfColumn, noOfRows) {
	const rectangle=[];
	for(var j=1;j<=noOfColumn;j++)
	{
    		rectangle.push(new Array(noOfRows).fill('*').join(''));
	}
	return rectangle.join("\n");
}
 
function repeatedRectangle(column, row, noOfRectangles) {
    const result = [];
    for (var i = 1; i <= noOfRectangles; i++) {
        result.push(creatRectangle(column, row))
    }
    return result.join("\n\n");
}
 
module.exports = repeatedRectangle;
 
console.log(repeatedRectangle(column, row, noOfRectangles));