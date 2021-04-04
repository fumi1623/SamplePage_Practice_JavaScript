'use strict'
{
  document.getElementById('box1').onclick = function() {
    $('#box1-text').fadeIn('slow');
  }

  document.getElementById('X-btn').onclick = function() {
    $('#box1-text').fadeOut('slow');
  }

  document.getElementById('box2').onclick = function() {
    $('#box2-text').fadeIn('slow');
  }

  document.getElementById('X-btn-2').onclick = function() {
    $('#box2-text').fadeOut('slow');
  }

  document.getElementById('box3').onclick = function() {
    $('#box3-text').fadeIn('slow');
  }

  document.getElementById('X-btn-3').onclick = function() {
    $('#box3-text').fadeOut('slow');
  }


}

