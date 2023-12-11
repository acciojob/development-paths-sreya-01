//your JS code here. If required.
const elements = document.getElementsByTagName("li");
for(let i=0; i<elements.length(); i++)
{
	elements[i].appendChild(document.createTextNode(" development"));	
}
	