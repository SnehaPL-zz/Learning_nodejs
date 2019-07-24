var str="thequickbrownfoxjumpsoverthelazydog";
var arr=str.split("");
var newarr=arr.reduce(char,[]);
var str2=newarr.join("");
console.log(str2);
function char(arr1,uniq)
{
	if(arr1.includes(uniq)!=1)
	{
		arr1.push(uniq);
	}
	return arr1;
}