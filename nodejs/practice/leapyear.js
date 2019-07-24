var year=process.argv[2];
if(year%4==0||year%100==0||year%400==0)
{
	console.log((process.argv[2])+' is a leap year.');
}
else
{
	console.log((process.argv[2])+' is not a leap year.');
}