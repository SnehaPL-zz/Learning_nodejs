var noOfStars = +process.argv[2];

const upperPart = function(times) {
	var count=noOfStars-times;
	var Array=[];
	if(times==1||times==(parseInt(noOfStars/2)+1))
	{
		for(j=1;j<=count;j++)
		{
			Array.push(' ');
		}
		for(k=1;k<=((2*times)-1);k++)
		{
			if(k==1||k==((2*times)-1))
			{
				Array.push('*');
			}
			else
			{
				Array.push(' ');
			}
		}
		return Array.join('');
	}
	else
	{
		for(j=1;j<=count;j++)
		{
			Array.push(' ');
		}
		for(k=1;k<=((2*times)-1);k++)
		{
			if(k==1)
			{
				Array.push('/');
			}
			else if(k==(2*times)-1)
			{
				Array.push('\\');
			}
			else
			{
				Array.push(' ');
			}
		}
		return Array.join('');
	
	}
}

const lowerPart = function(times) {
	var count=noOfStars-times;
	var Array=[];
	if(times==1)
	{
		for(j=1;j<=count;j++)
		{
			Array.push(' ');
		}
		for(k=1;k<=(2*times)-1;k++)
		{
			if(k==1||k==((2*times)-1))
			{
				Array.push('*');
			}
			else
			{
				Array.push(' ');
			}
		}
		return Array.join('');
	}
	else
	{
		for(j=1;j<=count;j++)
		{
			Array.push(' ');
		}
		for(k=1;k<=(2*times)-1;k++)
		{
			if(k==1)
			{
				Array.push('\\');
			}
			else if(k==((2*times)-1))
			{
				Array.push('/');
			}
			else
			{
				Array.push(' ');
			}
		}
		return Array.join('');	
	}
}
 
function angledHollowDiamond(noOfStars) {
    const result = [];
if(noOfStars>0){
    for (var i = 1; i <= (noOfStars/2)+1; i++) {
        result.push(upperPart(i))
    }}

    for (var i =parseInt(noOfStars/2); i >=1; i--) {
        result.push(lowerPart(i))
    }
    return result.join("\n");
}
 
module.exports = angledHollowDiamond;
 
console.log(angledHollowDiamond(noOfStars));