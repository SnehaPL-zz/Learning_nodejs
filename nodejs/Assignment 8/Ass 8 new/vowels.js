var str="The quick brown fox";
var s=str.split("");
var no=0;
s.forEach(Counts);
console.log(no);
function Counts(char)
{
	if(char.includes("a")==1||char.includes("e")==1||char.includes("i")==1||char.includes("o")==1||char.includes("u")==1)
	{
		no=no+1;
	}
}