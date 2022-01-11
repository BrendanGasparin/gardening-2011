/*
parser.js
Takes the attribute pairs from the query string and injects them into a html element.
*/


// takes the attribute pairs from the query string and injects them into the html
function parseURL()
{
	// stores the attribute pairs from the URL, calling the substring method to strip the first '?' character
	var queryString = location.search.substring(1);

	// creates a values array to store the attribute pairs from the query string
	var values=createAssoc(queryString, '&', '=');

	// code to inject personalised information into our congratulations page
	if(values["username"]!=null)
	{
		document.getElementById("personal").innerHTML = values["realname"].replace(/\+/g, " ") + " from " + values["birthlocation"].replace(/\+/g, " ") + "! "; 
		document.getElementById("personal").innerHTML += "We are so happy you found us through " + values["foundus"].replace(/\+/g, " ") + "! ";
		document.getElementById("personal").innerHTML += "We will activate your account named &quot;" + values["username"] + "&quot; as soon as possible. "
		document.getElementById("personal").innerHTML += "Verification will be sent to your email at &quot;" + values["email"].replace("%40", "@") +"&quot;. Thank you for applying!";
	}
}

// creates an associative array from a URL string that has been stripped of the leading '?'
function createAssoc(inputString, delimiterOne, delimiter2)
{
	var queryAsAssoc = new Array();
	var keyValues = inputString.split(delimiterOne);
	for (var i in keyValues)
	{
		var key=keyValues[i].split(delimiter2);
		queryAsAssoc[key[0]]=key[1];
	}
	return queryAsAssoc;
}

window.onload=init;

function init()
{
	parseURL();
}