Rgx={Html:{Valid:{Id:/^[a-z][\w:.-]*$/i}}};
//
function $id(s){return document.getElementById(s)||Rgx.Html.Valid.Id.test(s)?null:0};


//
var cases=["a","A"," aBcd"," AbCD","1aBcd","2AbCD","!aBcd","$AbCD","aBcd","AbCD","aBcd3_-","AbCD0_-","aBcd:3_-","AbCD:0_-","aBcd:3_-.","AbCD:0_-.","aB.cd","Ab.CD","aBc:d","AbC:D",0,"1",2,""," "];
function Test(m){m.forEach(function(x){console.log(x,$id(x))});console.log("\n")};
Test(cases);

/*
a				null
A				null
 aBcd		0
 AbCD		0
1aBcd		0
2AbCD	0
!aBcd		0
$AbCD	0
aBcd		null
AbCD		null
aBcd3_-	null
AbCD0_-	null
aBcd:3_-	null
AbCD:0_-	null
aBcd:3_-.	null
AbCD:0_-.	null
aB.cd		null
Ab.CD		null
aBc:d		null
AbC:D		null
0				0
1				0
2				0
				0
				0
*/
