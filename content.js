$(function () {
  $.fn.getTextNodes = function(contentText) {
    return $(this).find(":not(iframe)").addBack().contents().filter(function() {
      return this.nodeType == 3 && this.nodeValue.indexOf(contentText) != -1;
    });
  };
  var config = {}
  config.text_config = [
    {
      src: "PSD",
      target: "MUIE PSD"
    }
  ];
  config.text_config.forEach(function (obj) {
    var re = new RegExp(obj.src, 'ig');
    $('*').getTextNodes(obj.src).each(function(item, element) {
      this.nodeValue = this.nodeValue.replace(re, 'MUIE PSD');
    });
  });
});