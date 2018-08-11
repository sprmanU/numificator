$(function () {
  $.fn.getTextElements = function(contentT) {
    return $(this).find(":not(iframe)").addBack().contents().filter(function() {
      return this.nodeType == 3 && this.nodeValue.indexOf(contentT) != -1;
    });
  };
  var newt = {}
  newt.text_config = [
    {
      src: "PSD",
	  target: "PSD"
    },
	{
		src: "psd",
		target: 'psd'
	}
  ];
  newt.text_config.forEach(function (obj) {
    var repl = new RegExp(obj.src, 'ig');
    $('*').getTextElements(obj.src).each(function(item, element) {
      this.nodeValue = this.nodeValue.replace(repl, 'MUIE PSD');
    });
  });
});
