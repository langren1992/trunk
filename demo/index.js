/**
 * Created by Administrator on 2016/3/11 0011.
 */
(function ($) {

	$.util.namespace("indexPage");

	window.indexPage.initPopWindow = function(url, title, width, height){
		title = title == undefined ? '&nbsp;' : title;
		width = width == undefined ? 600 : width;
		height = height == undefined ? 300 : height;
		if (url != undefined) {
			var content = '<iframe  frameborder="0" src="' + url + '" style="width:100%;height:98%;hoverflow:auto;"></iframe>';
			parent.parent.$('#openWindow').window({
				title: title,
				width: width,
				height: height,
				content: content,
				modal: true,
				animate: true,
				minimizable: false

			});

		}
	};
})(jQuery);