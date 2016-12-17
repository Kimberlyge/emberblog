import Ember from 'ember';

const {on, $} = Ember;

export default Ember.Component.extend({

	detail: on('didInsertElement', function() {

		// var imgs = document.body.getElementsByTagName('img');

		// for(var x = 0; x < imgs.length; x++) {
		//     imgs[x].onclick = function() {
		//         this._colorDetect(this.src,function(brightness) {
		//             document.getElementsByTagName('pre')[0].innerHTML = "Brightness: "+brightness;
		//         });
		//     }
		// }
		// this._imgToBg();
	}),

    _imgToBg() {

    	// var html = document.querySelectorAll('html');
    	// var teaserMedia = document.querySelectorAll('.Teaser-media');

    	// if (html.classList.contains('no-objectfit')) {
    	// 	console.log('doesnt support object fit');
    	// }
		// var src = teaserMedia.children[0].currentSrc;

		// console.log(src);

		// if (!src) {
		// 	src = $(e).find('img').data('currentSrc');
		// }

		// $(teaserMedia).css({
		// 	'background-image': 'url(' + src + ')'
		// });

	},

	// _colorDetect(imageSrc,callback) {
	// 	var img = document.createElement("img");
 //        img.src = imageSrc;
 //        img.style.display = "none";
 //        document.body.appendChild(img);

 //        var colorSum = 0;

 //        img.onload = function() {
 //            // create canvas
 //            var canvas = document.createElement("canvas");
 //            canvas.width = this.width;
 //            canvas.height = this.height;

 //            var ctx = canvas.getContext("2d");
 //            ctx.drawImage(this,0,0);

 //            var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
 //            var data = imageData.data;
 //            var r,g,b,avg;

 //              for(var x = 0, len = data.length; x < len; x+=4) {
 //                r = data[x];
 //                g = data[x+1];
 //                b = data[x+2];

 //                avg = Math.floor((r+g+b)/3);
 //                colorSum += avg;
 //            }

 //            var brightness = Math.floor(colorSum / (this.width*this.height));
 //            callback(brightness);
 //        }
	// }

});
