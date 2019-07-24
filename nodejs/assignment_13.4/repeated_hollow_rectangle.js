var column = +process.argv[2];
var row    = +process.argv[3];
var noOfRectangles=+process.argv[4];
 
const creatRectangle = function(noOfColumn, noOfRows) {
	const rectangle=[];
	for(var j=1;j<=noOfColumn;j++)
	{
		if(j==1||j==noOfColumn)
		{
			var Array=[];
			for(var k=1;k<=noOfRows;k++){
				Array.push('*');}
    			rectangle.push(Array.join(''));
		}
		else
		{
			var Array=[];
			for(var k=1;k<=noOfRows;k++){
				if(k==1||k==noOfRows)
				{
					Array.push('*');
				}
				else
				{
					Array.push(' ');
				}}
			rectangle.push(Array.join(''));
		}
	}
	return rectangle.join("\n");
}
 
function repeatedHollowRectangle(column, row, noOfRectangles) {
    const result = [];
    for (var i = 1; i <= noOfRectangles; i++) {
        result.push(creatRectangle(column, row))
    }
    return result.join("\n\n");
}
 
module.exports = repeatedHollowRectangle;
 
console.log(repeatedHollowRectangle(column, row, noOfRectangles));