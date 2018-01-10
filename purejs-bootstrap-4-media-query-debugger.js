function showViewPortSize(display) {
	var jsWidth = document.documentElement.clientWidth;
	var jsHeight = document.documentElement.clientHeight;
	var mediaQ =null;

	if (jsWidth > 320 && jsWidth <= 576) {
		var mediaQ ='xs';
	}else if (jsWidth > 577 && jsWidth <=768)  {
		var mediaQ ='sm';
	}else if (jsWidth > 769 && jsWidth <=992) {
		var mediaQ = 'md';
	}else if (jsWidth > 993 && jsWidth <= 1200) {
		var mediaQ = 'lg';
	}else if (jsWidth > 1200) {
		var mediaQ = 'xl';
	};
	//create the element
	var viewportSize = document.createElement('div');
	viewportSize.style.cssText = 'color:white;font-size:11px;z-index:9999;background:black;position:fixed;top:40px;left:5px;color:#fff;padding:10px;';
	document.body.appendChild(viewportSize);
	viewportSize.id = "viewportSize";
	//add the innerHtml
	viewportSize.innerHTML = 'Height: ' +jsHeight
	+'<br>Width: ' +jsWidth
	+'<br>Media: ' +mediaQ;

	//on resize
	window.addEventListener( 'resize', function( event ) {
		var jsWidth = document.documentElement.clientWidth;
		var jsHeight = document.documentElement.clientHeight;
		var mediaQ =null;
		if (jsWidth > 320 && jsWidth <= 576) {
			var mediaQ ='xs';
		}else if (jsWidth > 577 && jsWidth <=768)  {
			var mediaQ ='sm';
		}else if (jsWidth > 769 && jsWidth <=992) {
			var mediaQ = 'md';
		}else if (jsWidth > 993 && jsWidth <= 1200) {
			var mediaQ = 'lg';
		}else if (jsWidth > 1200) {
			var mediaQ = 'xl';
		};
		//change innerHtml
		viewportSize.innerHTML = 'Height: ' +jsHeight
		+'<br>Width: ' +jsWidth
		+'<br>Media: ' +mediaQ;

	}, false ); //end resize

}



showViewPortSize(true);
