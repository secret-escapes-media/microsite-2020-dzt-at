// general js for the project that wouldn't be a reuseable component



/*********** Blur and change colour of hero images  *************/


$(window).on('scroll', function () {

//console.log('hey');
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
    pixs = pixs / 100,
    offset = 600,
    range = 100,
    calc = 0.8 - (pixs )/17;

	if(isFirefox === false){

		$(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });

  }  else  { $(".bv-banner-out").css({"opacity": calc });}
});



$('.js-image-attribution').each(function() {
  var $this = $(this);
  var contents = $this.html();
  $this.css('cursor', 'pointer');
  $this.html("<img style=\"width: 15px; height: 15px;\" src=\"_assets/img/icons/info.svg\" alt=\"picture information\">");
  $this.on('click',function(){
    $this.html(contents);
    $this.css('cursor', 'auto');
  });
});





/*********** Get the modal  *************/

// Get the modal
var modal = document.getElementById('bv-myModal');

// Get the button that opens the modal
var btn = document.getElementById("bv-myBtn");

//console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bv-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
    $('body').addClass('bv-disable-scroll');
		//console.log(child.id);
		$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
      $('body').removeClass('bv-disable-scroll');

			//$('#video').stopVideo();
			$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
        $('body').removeClass('bv-disable-scroll');
				$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  }
}
