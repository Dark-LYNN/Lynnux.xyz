function get(id){
	return document.getElementById(id).value
}
function getC(id){
	return document.getElementById(id).checked
}

function send(){
	if(!get('url')){
		alert("You need to provide a webhook!")
	}else{
	var hookurl = get('url') + "/slack"
	var msgJson
	if((getC('field_toggle')) === true){
		msgJson = {
		 "username": get('name'),
		 "icon_url": get('avatar'),
		 "text": get('content'),
		 "attachments":[{
			"title": get('title'),
            "title_link": get('title_link'),
		   "author_icon": get('author_icon'),
		   "author_name": get('author_name'),
		   "author_link": get('author_link'),
		   "color": get('color'),
			"image_url": get('image'),
            "thumb_url": get('thumb'),
            "footer": get('footer'),
			"footer_icon": get('footer_icon'),
		   "fields": [{
		    "title": get('embed_title1'),
		    "value": get('embed_content1'),
		    "short": getC('field1')
			},{
			"title": get('embed_title2'),
		    "value": get('embed_content2'),
		    "short": getC('field2')
			},{
			"title": get('embed_title3'),
		    "value": get('embed_content3'),
		    "short": getC('field3')
			},{
			"title": get('embed_title4'),
		    "value": get('embed_content4'),
		    "short": getC('field4')
			}
			]
		 }]
		}
	}else{
		msgJson ={
			"username": get('name'),
			"icon_url": get('avatar'),
			"text": get('content'),
		}
	}
  post(hookurl, msgJson);
}
}
function post(url, jsonmsg){
	xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	var data = JSON.stringify(jsonmsg);
	xhr.send(data);
	xhr.onreadystatechange = function() {
		if(this.status != 200){
			alert(this.responseText);
		}
	}
}