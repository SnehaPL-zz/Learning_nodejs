var colum=+process.argv[2];
var row=+process.argv[3];

const createRowOfSize=function(times){
	return new Array(times).fill('*').join('');	
}

const createEmptyRowOfSize=function(times){
	var Array=[];
	for(var j=1;j<=times;j++){
	if(j==1||j==times)
	{
	Array.push('*');
	}
	else
	{
	Array.push(' ');
	}}
	return Array.join('');
}

function emptyRectangle(colum,row)
{
	const result=[];
	for(var i=0;i<colum;i++)
	{
		if(i==0||i==(colum-1)){
		result.push(createRowOfSize(row))}
		else{
		result.push(createEmptyRowOfSize(row))
		}
	}
	return result.join("\n");
}

module.exports=emptyRectangle;
console.log(emptyRectangle(colum,row));
