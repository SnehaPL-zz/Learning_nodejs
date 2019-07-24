var lines = +process.argv[2];

const noOfLines = function(times) {
	var Array=[];
	for(j=1;j<=(lines-times);j++)
	{
		Array.push(' ');
	}
	for(k=1;k<=times;k++)
	{
		Array.push('*');
	}
	return Array.join('');
}
 
function rightAlignedTriangle(lines) {
    const result = [];
    for (var i = 1; i <= lines; i++) {
        result.push(noOfLines(i))
    }
    return result.join("\n");
}
 
module.exports = rightAlignedTriangle;
 
console.log(rightAlignedTriangle(lines));