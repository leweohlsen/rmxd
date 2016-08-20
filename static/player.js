$(document).ready(function() {
  var widget = SC.Widget(document.getElementById('soundcloud_widget'));
  widget.bind(SC.Widget.Events.READY, function() {
    console.log('Ready...');
  });

  $('button').click(function() {
    widget.toggle();
  });

  $('.track').click(function() {
    var rank = $(this).find('.rank').html();
    var remixes = $('#remixes'+ rank + ' .panel-body').children();
    remixes.each(function (index, remix) {
      setPlayLikeQuota($(remix));
    });
  });

  $('.remix').click(function() {
    var uri = $(this).attr('data-uri');
    widget.load(uri, function() {
      widget.toggle();
    });
    setBgImage($(this));
    $('.playing').removeClass('playing');
    $(this).addClass('playing');
  });

  function setPlayLikeQuota(remix){
    var plays = parseInt(remix.attr('data-plays'));
    var likes = parseInt(remix.attr('data-likes'));
    remix.find('.plike-quota').html(plays/likes);
  }

  function setBgImage(remix){
    var artUrl = remix.attr('data-img');
    // get highest available album art resolution
    artUrl = artUrl.replace("large", "t500x500");
    // set bodys background image via jQ
    $(".background-artwork").attr("src", artUrl);
  }

});
