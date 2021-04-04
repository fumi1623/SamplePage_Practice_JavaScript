'use strict'
{
  document.getElementById('box1').onclick = function() {
    $('#box1-text').fadeIn('slow');
  }

  document.getElementById('X-btn').onclick = function() {
    $('#box1-text').fadeOut('slow');
  }

}