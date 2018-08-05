/**
 * Hosting Raja package
 * @author J-Extension <contact@jextn.com>
 * @link http://www.jextn.com
 * @copyright (C) 2012 - 2013 J-Extension
 * @license GNU/GPL, see LICENSE.php for full license.
**/

Joomla.submitbutton = function(task) {

	if (task == 'career.cancel' || document.formvalidator.isValid(document.id('adminForm'))) {

		if (isValid) {
			Joomla.submitform(task);
			return true;
		} else {
			return false;
		}
	} else {
		var dl					= document.getElementById('system-message');
		dl.style.display 		= 'block';
		var div					= document.getElementById('je-error-message');
		var jeerror				= document.getElementById('je-errorwarning-message').value;
		div.innerHTML			= jeerror;
	}
}

function display(radiovalue)
{
	if(radiovalue==0){
		document.getElementById('resume').style.display 		= 'block';
		document.getElementById('resume_span').style.display 	= 'block';
		document.getElementById('text_resume').style.display 	= 'none';
	}
	if(radiovalue==1){
		document.getElementById('text_resume').style.display 	= 'block';
		document.getElementById('resume').style.display 		= 'none';
		document.getElementById('resume_span').style.display 	= 'none';
	}
}

function clickpaste()
{
	if(document.getElementById('text_resume').value == 'Paste here'){
		document.getElementById('text_resume').value 			= '';
	}
}
function clickpaste1()
{
	if(document.getElementById('text_resume').value == ''){
		document.getElementById('text_resume').value 			= 'Paste here';
	}
	clearLabel('resume');
}

function validate_doc()
{
	document.getElementById('resume').style.border 				= "none";
	document.getElementById('text_resume').style.border 		= "none";
	var text_resume 											= document.getElementById('text_resume').value;
	var doc       												= document.getElementById('resume').value;

	var types    												= document.getElementById('types').value;
    var doc_exe   												= doc.split(".");
	if(text_resume=='Paste here' && doc==''){
		document.getElementById('resume').style.border 			= "1px solid #FF0000";
		document.getElementById('text_resume').style.border 	= "1px solid #FF0000";
		return false;
	}

	var fullname 												= document.getElementById('jform_fullname').value;
	var email 													= document.getElementById('jform_email').value;
	var mobile 													= document.getElementById('jform_mobile').value;
	document.getElementById('jform_fullname').style.border 		= "none";
	document.getElementById('jform_email').style.border 		= "none";
	document.getElementById('jform_mobile').style.border 		= "none";

	document.getElementById("jform_fullname").title 			= "none";
	document.getElementById("jform_email").title 				= "none";
	document.getElementById("jform_mobile").title 				= "none";
	document.getElementById("resume").title 					= "none";


	if (trim(fullname) != ''){
		var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
		for (var i = 0; i < fullname.length; i++){
	   		if (iChars.indexOf(fullname.charAt(i)) != -1){
    			document.getElementById('jform_fullname').style.border 	= "1px solid #FF0000";
				document.getElementById('jform_fullname').focus();
				document.getElementById("jform_fullname").title 		="Please remove the special characters";
				return false;
        	}
        }
	}
	if (trim(fullname) != ''){
		var iChars 														= "0123456789";
		for (var i = 0; i < fullname.length; i++){
	   		if (iChars.indexOf(fullname.charAt(i)) != -1){
				document.getElementById('jform_fullname').style.border 	= "1px solid #FF0000";
				document.getElementById('jform_fullname').focus();
				document.getElementById("jform_fullname").title 		="Please remove numbers";
				return false;
        	}
        }
	}
	if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)){
		document.getElementById('jform_email').style.border 			= "1px solid #FF0000";
		document.getElementById('jform_email').focus();
		document.getElementById("jform_email").title 					="Please Enter valid e-mail";
		return false;
	}
	if (!/\D/.test(mobile) == false){
		document.getElementById('jform_mobile').style.border 			= "1px solid #FF0000";
		document.getElementById('jform_mobile').focus();
		document.getElementById("jform_mobile").title 					="Please Enter valid mobile number";
		return false;
	}

	var doc_types 														= new Array();
	doc_types     														= types.split(",");

    if(doc != '')
	{
		for (var k = 0; k < doc_types.length;k++)
	    {
	   		if(doc_types[k] == doc_exe[1])
	   		{
				document.getElementById('resume').style.border 			= "none";
				return true;
	   		}
	    }

    	document.getElementById('resume').style.border 					= "1px solid #FF0000";
    	document.getElementById("resume").title 						= "Please upload supported file formats.";
   		return false;
    }
}


function ltrim(str) {
	for(var k = 0; k < str.length && isWhitespace(str.charAt(k)); k++);
	return str.substring(k, str.length);
}
function rtrim(str) {
	for(var j=str.length-1; j>=0 && isWhitespace(str.charAt(j)) ; j--) ;
	return str.substring(0,j+1);
}
function trim(str) {
	return ltrim(rtrim(str));
}
function isWhitespace(charToCheck) {
	var whitespaceChars 												= " \t\n\r\f";
	return (whitespaceChars.indexOf(charToCheck) != -1);
}