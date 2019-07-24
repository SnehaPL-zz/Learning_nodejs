var size=+process.argv[2];
var groups=+process.argv[3];

const createGroupOfSize=function(times){
	return new Array(times).fill('-').join('');	
}

function groupedDashes(size,groups)
{
	const result=[];
	for(var i=1;i<=groups;i++)
	{
		result.push(createGroupOfSize(size))
	}
	return result.join("\n\n");
}

module.exports=groupedDashes;
console.log(groupedDashes(size,groups));