    //using jQuery

    function showViewPortSize(display) {
    if(display) {
      var jsHeight = window.innerHeight;
      var jsWidth = window.innerWidth;
      var mediaQ =null;

    if (jsWidth > 0 && jsWidth < 576) {
      var mediaQ ='xs';
    }else if (jsWidth >= 576 && jsWidth < 768)  {
      var mediaQ ='sm';
    }else if (jsWidth >= 768 && jsWidth < 992) {
      var mediaQ = 'md';
    }else if (jsWidth >= 992 && jsWidth < 1200) {
      var mediaQ = 'lg';
    }else if (jsWidth >= 1200) {
      var mediaQ = 'xl';
    };
      jQuery('body').prepend('<div id="viewportsize" style="font-size:11px;z-index:9999;position:fixed;top:40px;left:5px;color:#fff;background:#000;padding:10px">Height: '+jsHeight+'<br>Width: '+jsWidth+' <br> Media:  '+mediaQ+'</div>');
      
      jQuery(window).resize(function() {

      var jsHeight = window.innerHeight;
      var jsWidth = window.innerWidth;

    if (jsWidth > 0 && jsWidth < 576) {
      var mediaQ ='xs';
    }else if (jsWidth >= 576 && jsWidth < 768)  {
      var mediaQ ='sm';
    }else if (jsWidth >= 768 && jsWidth < 992) {
      var mediaQ = 'md';
    }else if (jsWidth >= 992 && jsWidth < 1200) {
      var mediaQ = 'lg';
    }else if (jsWidth >= 1200) {
      var mediaQ = 'xl';
    };

        jQuery('#viewportsize').html('Height: '+jsHeight+'<br>Width: '+jsWidth+' <br> Media: '+mediaQ);
      });
    }
  }
showViewPortSize(true);
