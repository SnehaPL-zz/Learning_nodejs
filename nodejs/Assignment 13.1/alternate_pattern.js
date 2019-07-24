var colum=+process.argv[2];
var row=+process.argv[3];

const createEvenRowOfSize=function(times){
	return new Array(times).fill('*').join('');	
}

const createOddRowOfSize=function(times){
	return new Array(times).fill('-').join('');	
}

function alternatePattern(colum,row)
{
	const result=[];
	for(var i=1;i<=colum;i++)
	{
		if(i%2!=0){
		result.push(createEvenRowOfSize(row))}
		else{
		result.push(createOddRowOfSize(row))
		}
	}
	return result.join("\n");
}

module.exports=alternatePattern;
console.log(alternatePattern(colum,row));