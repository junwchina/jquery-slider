(function($) {

  $.fn.extend({

    // slide content from left to right, see github page.
    // Basic idea 
    // 1. set slider's container overflow: hidden
    // 2. get the width of the slider's container to animate.
    // 3. create a transfer div twice this width (transfer).
    // 4. copy the contents of the original div to a temp div (current).
    // 5. put the new contents in another temp div (next).
    // 6. put current and next side by side into transfer.
    // 7. remove content from original div and put new transfer div in (should look the same).
    // 8. animate transfer div - new look complete.
    // 9. replace original div contents with new data (looks the same as previous step) 
    slideToRight: function(data) {
      var _slider = $(this);
      var width = parseInt(_slider.css('width'));
      var transfer = $('<div class="transfer"></div>').css({ 'width': (2 * width) + 'px' });
      var current = $('<div class="current"></div>').css({ 'width': width + 'px', 'left': '0', 'float': 'left' }).html($('#slider').html());
      var next = $('<div class="next"></div>').css({ 'width': width + 'px', 'left': width + 'px', 'float': 'left' }).html(data);

      _slider.css("overflow-x", "hidden")

      transfer.append(current).append(next);

      _slider.html('').append(transfer);

      transfer.animate({ 'margin-left': '-' + width + 'px' }, 300, function () {
          _slider.html(data);
      });

      return this;
    }, 


    // right to left
    slideToLeft: function(data) {
      var _slider = $(this);
      var width = parseInt(_slider.css('width'));
      var transfer = $('<div class="transfer"></div>').css({ 'width': (2 * width) + 'px' , 'margin-left': '-' + width + 'px'});
      var current = $('<div class="current"></div>').css({ 'width': width + 'px', 'left': '0', 'float': 'left' }).html($('#slider').html());
      var next = $('<div class="next"></div>').css({ 'width': width + 'px', 'left': width + 'px', 'float': 'left' }).html(data);

      _slider.css("overflow-x", "hidden")

      transfer.append(next).append(current);

      _slider.html('').append(transfer);

      transfer.animate({ 'margin-left': '0px' }, 300, function () {
          _slider.html(data);
      });

      return this;
    }
  })
})(jQuery)


