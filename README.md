# javascript-bootstrap-4-media-query-debugger
## Bootstrap 4 Media Queries have changed.
<br />
Extra small **<576px** <br />
Small **≥576px** <br />
Medium **≥768px** <br />
Large **≥992px** <br />
Extra large **≥1200px** <br />

This little debugger lets you know which media query you are currently seeing.<br />
Based on viewport.js [found here](https://gist.github.com/bohman/1351439#file-viewport-js)<br />
### Included Jquery and Pure Java-script versions.
<br />
<br />

#### Jquery - Insery after Jquery Loads
```
<script type="text/javascript">
    //using jQuery

    function showViewPortSize(display) {
    if(display) {
      var jsHeight = window.innerHeight;
      var jsWidth = window.innerWidth;
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
      jQuery('body').prepend('<div id="viewportsize" style="font-size:11px;z-index:9999;position:fixed;top:40px;left:5px;color:#fff;background:#000;padding:10px">Height: '+jsHeight+'<br>Width: '+jsWidth+' <br> Media:  '+mediaQ+'</div>');
      
      jQuery(window).resize(function() {

      var jsHeight = window.innerHeight;
      var jsWidth = window.innerWidth;

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

        jQuery('#viewportsize').html('Height: '+jsHeight+'<br>Width: '+jsWidth+' <br> Media: '+mediaQ);
      });
    }
  }
showViewPortSize(true);

</script>

```

#### Pure Java-script version
```
<script type="text/javascript">
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
  viewportSize.style.cssText = 'color:white;font-size:11px;z-index:9999;background:black;position:fixed;top:1px;left:5px;color:#fff;padding:10px;';
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
</script>

```
<br /><br />
![alt text](https://github.com/audetcameron/javascript-bootstrap-4-media-query-debugger/blob/master/pure-js-bootstrap-debugger.jpg)
<br />

