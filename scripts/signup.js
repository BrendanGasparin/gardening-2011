/*
signup.js
Author: Brendan Gasparin
Date: October 2001
Controls the dynamic elements and validates the information from the form at signup.html
*/


// validates information entered into the form at signup.html
function validate()
{
	var reg=new RegExp("[0-9]");							// reg expression checking for at least one number
	var reg2=/^[A-Za-z0-0._]+\@+[a-z0-9-]+\.+[a-z0-9.]+$/; 				// reg expression looking for a valid email address
	var reg3=/^[A-Za-z0-9]{5,12}$/;							// reg expression requiring 5-12 alphanumeric characters only
	var reg4=/^[A-Za-z ]+$/;							// reg expression looking for letters and spaces only

	var username=document.getElementById("username").value;				// username
	var passwd=document.getElementById("passwd").value;				// password
	var passwd2=document.getElementById("passwd2").value;				// re-entered password
	var email=document.getElementById("email").value;				// email
	var realname=document.getElementById("realname").value;				// real name

	var gender=getSelectedRadio(document.getElementsByName("gender"));		// gender
	var birthcountry=getSelectedRadio(document.getElementsByName("birthcountry"));	// born in Australia?
	var birthlocation="";								// state or continent of birth

	var forfun=document.getElementById("fun").checked;				// garden for fun?
	var forhealth=document.getElementById("health").checked;			// garden for health?
	var forprofit=document.getElementById("profit").checked;			// garden for profit?

	var howfindus=document.getElementById("foundus").value;				// how did the user find us?
	var whyjoin=document.getElementById("whyjoin").value;				// why do they wish to join?

	if(document.getElementById("birthlocation"))					// assign the state or continent of birth
	{										// but only if the associated select buttons have actually been created
		birthlocation=document.getElementById("birthlocation").value;
	}

	// username validation - field must be 5-12 alphanumeric characters
	if(username.search(reg3)==-1)
	{
		alert("Username must consist of 5-12 letters or numbers with no spaces.");
		return false;
	}

	// password validation - must be 8 characters, contain a number,
	// and must match the re-entered password
	if((passwd.length<8)||(passwd.search(reg)==-1))
	{
		alert("Password must be at least 8 characters and contain a number.");
		return false;
	}
	if(passwd!=passwd2)
	{
		alert("Your passwords do not match.");
		return false;
	}

	// email validation - alphanumeric characters, full stops and underscores,
	// followed by an @ symbol,
	// followed by lower-case alphanumeric characters or dashes, 
	// followed by at least one full stop
	// followed by lower-case alphanumeric characters and full stops
	if(email.search(reg2)==-1)
	{
		alert("You must enter a valid email address.");
		return false;
	}

	// real name validation - field must consist of letters and spaces only
	if(realname.search(reg4)==-1)
	{
		alert("Your name can consist of letters and spaces and must not be blank.");
		return false;
	}

	// gender validation - a button must be selected
	if(!gender)
	{
		alert("You must select a gender.");
		return false;
	}

	// country validation - a button must be selected
	if(!birthcountry)
	{
		alert("You must select whether or not you were born in Australia.");
		return false;
	}

	// location validation - value must not be blank
	if(birthlocation=="")
	{
		alert("You must select a state or continent.");
		return false;
	}

	// check user selected a reason for gardening
	if((!forfun)&&(!forhealth)&&(!forprofit))
	{
		alert("You must select a reason you like gardening.");
		return false;
	}

	// check the user entered a reason for joining
	if(whyjoin=="")
	{
		alert("You must enter a reason you wish to join us.");
		return false;
	}

	// check the user selected how they found our website
	if(howfindus=="none")
	{
		alert("You must tell us how you found our website.");
		return false;
	}

	return true;
}

// returns the selected value from the supplied radio button group
// if no button is selected returns false
function getSelectedRadio(radioGroup)
{
	for(var i=0; i<radioGroup.length; i++)
	{
		if(radioGroup[i].checked)
		{
			return radioGroup[i].value;
		}
	}

	return false;
}

// dynamically adds a select element of Australian state options to the form
function addStates()
{		
	if(!document.getElementById)	// Stop older browsers from advancing
	{
		return;
	}

	// delete any previously existing drop-down that was dynamically created with the "dropdown" id
	if(document.getElementById("dropdown"))
	{
		document.getElementById("dynamicelement").removeChild(document.getElementById("dropdown"));
	}

	var listItem = document.getElementById("dynamicelement");

	if(document.createElement)	// W3C DOM method
	{
		// Declare variables pointing to our new elements
		var newList=document.createElement("li");
		var selectBox=document.createElement("select");
		var selectLabel=document.createElement("label");

		// give the new list element an id so we can delete it later
		newList.id="dropdown";

		// option elements for our select selement
		var option0=document.createElement("option");
		var option1=document.createElement("option");
		var option2=document.createElement("option");
		var option3=document.createElement("option");
		var option4=document.createElement("option");
		var option5=document.createElement("option");
		var option6=document.createElement("option");
		var option7=document.createElement("option");

		// set attributes for our select element and label
		selectBox.id="birthlocation";
		selectBox.name="birthlocation";
		selectLabel.for="birthlocation";

		// set attributes for the options of our select element
		option0.value="";
		option1.value="New South Wales";
		option2.value="Northern Territory";
		option3.value="Queensland";
		option4.value="South Australia";
		option5.value="Tasmania";
		option6.value="Victoria";
		option7.value="Western Australia";

		// create text nodes to go into the options of our select element and label
		var labelText=document.createTextNode("In which state were you born?");
		var opt0=document.createTextNode("");
		var opt1=document.createTextNode("New South Wales");
		var opt2=document.createTextNode("Northern Territory");
		var opt3=document.createTextNode("Queensland");
		var opt4=document.createTextNode("South Australia");
		var opt5=document.createTextNode("Tasmania");
		var opt6=document.createTextNode("Victoria");
		var opt7=document.createTextNode("Western Australia");

		// append text nodes to our label and option elements
		selectLabel.appendChild(labelText);
		option0.appendChild(opt0);
		option1.appendChild(opt1);
		option2.appendChild(opt2);
		option3.appendChild(opt3);
		option4.appendChild(opt4);
		option5.appendChild(opt5);
		option6.appendChild(opt6);
		option7.appendChild(opt7);

		// append option elements to the select element
		selectBox.appendChild(option0);
		selectBox.appendChild(option1);
		selectBox.appendChild(option2);
		selectBox.appendChild(option3);
		selectBox.appendChild(option4);
		selectBox.appendChild(option5);
		selectBox.appendChild(option6);
		selectBox.appendChild(option7);

		// append our label and select element to the list
		newList.appendChild(selectLabel);
		newList.appendChild(selectBox);
		listItem.appendChild(newList);		
	}
}

// dynamically adds a select element of continent options to the form
function addContinents()
{		
	if(!document.getElementById)	// Stop older browsers from advancing
	{
		return;
	}

	// delete any previously existing drop-down that was created with the "dropdown" id
	if(document.getElementById("dropdown"))
	{
		document.getElementById("dynamicelement").removeChild(document.getElementById("dropdown"));
	}

	var listItem = document.getElementById("dynamicelement");

	if(document.createElement)	// W3C DOM method
	{
		// Declare variables pointing to our new elements
		var newList=document.createElement("li");
		var selectBox=document.createElement("select");
		var selectLabel=document.createElement("label");

		// give the new list element an id so we can delete it later
		newList.id="dropdown";

		// option elements for our select selement
		var option0=document.createElement("option");
		var option1=document.createElement("option");
		var option2=document.createElement("option");
		var option3=document.createElement("option");
		var option4=document.createElement("option");
		var option5=document.createElement("option");
		var option6=document.createElement("option");
		var option7=document.createElement("option");

		// set attributes for our select element and label
		selectBox.id="birthlocation";
		selectBox.name="birthlocation";
		selectLabel.for="birthlocation";

		// set attributes for the options of our select element
		option0.value="";
		option1.value="Africa";
		option2.value="Antarctica";
		option3.value="Asia";
		option4.value="Europe";
		option5.value="North America";
		option6.value="South America";
		option7.value="other";

		// create text nodes to go into the options of our select element and label
		var labelText=document.createTextNode("On which continent where you born?");
		var opt0=document.createTextNode("");
		var opt1=document.createTextNode("Africa");
		var opt2=document.createTextNode("Antarctica");
		var opt3=document.createTextNode("Asia");
		var opt4=document.createTextNode("Europe");
		var opt5=document.createTextNode("North America");
		var opt6=document.createTextNode("South America");
		var opt7=document.createTextNode("Other");

		// append text nodes to our label and option elements
		selectLabel.appendChild(labelText);
		option0.appendChild(opt0);
		option1.appendChild(opt1);
		option2.appendChild(opt2);
		option3.appendChild(opt3);
		option4.appendChild(opt4);
		option5.appendChild(opt5);
		option6.appendChild(opt6);
		option7.appendChild(opt7);

		// append option elements to the select element
		selectBox.appendChild(option0);
		selectBox.appendChild(option1);
		selectBox.appendChild(option2);
		selectBox.appendChild(option3);
		selectBox.appendChild(option4);
		selectBox.appendChild(option5);
		selectBox.appendChild(option6);
		selectBox.appendChild(option7);

		// append our label and select element to the list
		newList.appendChild(selectLabel);
		newList.appendChild(selectBox);
		listItem.appendChild(newList);		
	}
}

var birthlocation="";
window.onload=init;

function init()
{
	document.getElementById("signform").onsubmit=validate;
	document.getElementById("val").onclick=validate;
	document.getElementById("australia").onclick=addStates;
	document.getElementById("overseas").onclick=addContinents;
}