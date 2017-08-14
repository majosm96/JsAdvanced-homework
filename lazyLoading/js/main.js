
	(function() {
		[].forEach.call(document.querySelectorAll('noscript'), function(noscript) {
		var img = new Image();
		img.setAttribute('data-src', '');
		noscript.parentNode.insertBefore(img, noscript);
		img.onload = function() {
			img.removeAttribute('data-src');
		};
		img.src = noscript.getAttribute('data-src');
	});
	})();


// function isElementInViewport (el) {
//
//     var rect = el.getBoundingClientRect();
//
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
//     );
// }
//
// function lazyLoadImages() {
//   var images = document.querySelectorAll("#main-wrapper img[data-src]"),
//       item;
//   // load images that have entered the viewport
//   [].forEach.call(images, function (item) {
//     if (isElementInViewport(item)) {
//       item.setAttribute("src",item.getAttribute("data-src"));
//       item.removeAttribute("data-src")
//     }
//   })
//   // if all the images are loaded, stop calling the handler
//   if (images.length == 0) {
//     window.removeEventListener("DOMContentLoaded", lazyLoadImages);
//     window.removeEventListener("load", lazyLoadImages);
//     window.removeEventListener("resize", lazyLoadImages);
//     window.removeEventListener("scroll", lazyLoadImages);
//   }
// }
//
// lazyLoadImages();
