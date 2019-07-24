var str="webmaster";
alphabet(str);
function alphabet(str1)
{
	var a=str1.split("");
	var b=a.sort();
	var c=b.join("");
	console.log(c);
}