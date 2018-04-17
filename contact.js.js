window. onload = functin();
{
	//buttons
	var quickaddBtn = document.getelementbyid ("quickadd");
	var addbtn = document.getelementbyid("add");
	var cancelbtn = document.getelementbyid("cancel");
	var quickaddformdiv = document.queryselector(".quickaddform");

// form fields
	var fullname = document.getElementById("fullname")
	var mobile = document.getElementById("mobile")
	var address = document.getElementById("address");
	var office = document.getElementById("office");
	var email = document.getElementById("email");

	//addressbook display
	var addbookDiv = document.querySelector(".addbook");

	//create storage array
	var addressbook = [];

	//eventlisteners
	quickaddBtn.addeventlistener("click", fuction(),{
		quickaddformdiv : style.display = "block",
	});

cancelbtn.addeventlistener("cick", function(){
	quickaddformdiv.style.display = "none";
});

addbtn.addeventlistener("click", addtobook);

addbookDiv.addeventlistener("click", removeEntry);

function jsonstructure(fullname, mobile, address, office, email){
	this.fullname = fullname;
	this.mobile = mobile;
	this.address = address;
	this.office = office;
	this.email = email;
}
function addtobook(){
	var isNull = fullname.value!=''&& mobile.value!='' && address.value !=''&& office.value!=''&& email.value!='';
	if (isNull){
		// add the content of the form to the array & local storage
	var obj = new jsonstructure(fullname,value,mobile.value,address.value,office.value,email.value);
	addressbook.push(obj);
	localStorage["addbook"] = JSON.stringify(addressbook);
	// hide the form panel
	quickaddformdiv.style.display = "none";
	// clear the form
	clearform();
	// updating and displaying all records in the addressbook
	showaddressbook();

	}
}
function removeEntry(e){
	if(e.target.classlist.contains("delbutton")){
	var remID = e.target.getAttribute("data-id");
	addressbook.splice(remID, 1);
	localstorage["addbook"] = JSON.stringify(addressbook);

	}
}
function clearform(){
	var frm = document.querySelectorAll(".formfields");
	for(var i in frm){
		frm[i].value = '';
	}
}
function showaddressbook(){
	if(localstorage['addbook'] === undefined){
		localStorage['addbook'] = "[]";
	} else {
		addressbook = JSON.parse(localstorage['addbook']);
		addbookDiv.innerHTML = '';
		for(var n in addressbook){
			var str = '<div class="entry">';
				str += '<div class= "fullname"><p>' + addressbook[n].full
				name + '</p></div>';
				str += '<div class= "mobile"><p>' + addressbook[n].mobile + '</p></div>';
				str += '<div class= "address"><p>' + addressbook[n].address + '</p></div>';
				str += '<div class= "office"><p>' + addressbook[n].office + '</p></div>';
				str += '<div class= "email"><p>' + addressbook[n].email + '</p></div>';
				str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
				str += '</div>';
				addbookDiv.innerHTML += str;
		
		}

	}
}
showaddressbook();
}
   