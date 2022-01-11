/*
slideshow.js
Author: Brendan Gasparin
Date: October 2011
Controls the slideshow located at slideshow.html.
*/

// go back by one slide in the Slide array
// and update the relevant xhtml elements to display the image and caption
function prevImage()
{
	if(count==0)
	{
		count=slide.length-1;
	}
	else
	{
		count--;
	}

	document.getElementById("slide").src="./images/"+slide[count].smallImg;
	document.getElementById("imgcaption").innerHTML=slide[count].caption;
	document.getElementById("imgcaption").innerHTML+="<br />Photographed by Brendan Gasparin";
}

// go forward one slide in the Slide array
// and update the relevant xhtml elements to display the image and caption
function nextImage()
{
	if(count>=slide.length-1)
	{
		count=0;
	}
	else
	{
		count++;
	}

	document.getElementById("slide").src="./images/"+slide[count].smallImg;
	document.getElementById("imgcaption").innerHTML=slide[count].caption;
	document.getElementById("imgcaption").innerHTML+="<br />Photographed by Brendan Gasparin";
}

// opens a new window containing the enlarged slide
// if the window has already been opened it instead changes the image in that window and refocuses it
function enlargeImage()
{
	if(navigator.userAgent.toLowerCase().indexOf("safari")==-1)		// if the user's browser is anything but Safari use the following nice clean code to cycle between windows
	{

		if(largeSlide==null || largeSlide.closed)
		{
			largeSlide=window.open("./images/"+slide[count].largeImg, "largeSlide", "width=480, height=360, location=no, menubar=no, toolbar=no, directories=no, resizeable=no");
		}
		else
		{
			// open the new url in the largeSlide window
			largeSlide.location.href="./images/"+slide[count].largeImg;
			largeSlide.focus();
		}
	}									// if the user is running on Safari the alternate code below allows the window(s) to size properly and still be re-opened
	else									// after the user closes one -  Safari did not like the W3C recommended methods which works on other browsers
	{									
		largeSlide=window.open("./images/"+slide[count].largeImg, "largeSlide"+windowCount, "width=480, height=320, innerHeight=300");
		windowCount++;
	}
}

// a slide object
// aSmallImage is the standard-sized image
// aLargeImage is a larger version of the image
// textCaption is a text caption to accompany the image
function Slide(aSmallImage, aLargeImage, textCaption)
{
	this.smallImg=aSmallImage;
	this.largeImg=aLargeImage;
	this.caption=textCaption;
}

var largeSlide;									// this will point to our new window opened by the enlarge button
var windowCount;								// a count of how many times Safari has cycled through new 'enlarge' windows

// declare and populate an array of Slide objects
var slide=new Array(14);							// our array of Slide objects
var count=0;									// our current index position in the array
slide[0]=new Slide("bee.jpg", "lg_bee.jpg", "A bee resting on a flower.");
slide[1]=new Slide("mulched.jpg", "lg_mulched.jpg", "Plants bedded in mulch.");
slide[2]=new Slide("herbwheel.jpg", "lg_herbwheel.jpg", "A wagon wheel herb divider.");
slide[3]=new Slide("mantis.jpg", "lg_mantis.jpg", "A praying mantis laying an egg sack.");
slide[4]=new Slide("hatchlings.jpg", "lg_hatchlings.jpg", "Newly born praying mantis hatchlings.");
slide[5]=new Slide("compostbin.jpg", "lg_compostbin.jpg", "Free-standing compost bin.");
slide[6]=new Slide("composttumbler.jpg", "lg_composttumbler.jpg", "A tumbling compost bin.");
slide[7]=new Slide("gardenbox1.jpg", "lg_gardenbox1.jpg", "A garden bed of vegetables.");
slide[8]=new Slide("gardenbox2.jpg", "lg_gardenbox2.jpg", "Another bed of vegetables.");
slide[9]=new Slide("gardenbox3.jpg", "lg_gardenbox3.jpg", "Mmm...delicious vegetables!");
slide[10]=new Slide("gardenbox4.jpg", "lg_gardenbox4.jpg", "These are ready for harvesting.");
slide[11]=new Slide("gardenbox5.jpg", "lg_gardenbox5.jpg", "This garden bed is overflowing!");
slide[12]=new Slide("gardenbox6.jpg", "lg_gardenbox6.jpg", "A freshly planted bed.");
slide[13]=new Slide("cabbagemoth.jpg", "lg_cabbagemoth.jpg", "The white cabbage moth.");

window.onload=init;

function init()
{
	document.getElementById("prev").onclick=prevImage;
	document.getElementById("next").onclick=nextImage;
	document.getElementById("enlarge").onclick=enlargeImage;
}