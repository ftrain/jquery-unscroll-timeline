/*!
 * jQuery Unscroll Timeline Plugin 0.01pre
 * SITE: https://github.com/ftrain/jquery-unscroll-timeline
 * BUGS: https://github.com/ftrain/jquery-unscroll-timeline/issues
 * Requires jQuery 1.XTK.XTK
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */


/* 
   ############################## 
   CURRENTLY ALL STUBS
   ############################## 
*/

(function( $ ){
   
    $.fn.place = function( elements ) {

/*
  This function places arbitrary shapes on a
  grid with the intent of cramming as many
  arbitrary shapes on that grid as can fit and
  make sense.
  
  - Take an element
  - Measure its pixel dimensions X and Y
  - Divide the width X by the width a single block
  - Divide the height Y by the height of a single block
  
  - Either:
  
  - Determine an X_offset based on date/time
  
  - Ignore the X_offset and just find some room on the grid
  
  - Then scan across, starting at the [X_offset,0] coordinate.
  
  
  STARTING STATE
  +-----------------+
  |1|2|3|4|5|6|7|8|9|
  +------------------
  | | | | | | | | | |
  |-----------------|
  | | | | | | | | | |
  |-----------------|
  | | | | | | | | | |
  |-----------------|
  | | | | | | | | | |
  +------------------
  
  REQUEST: place a 1x2 element A aligned to position X4
  +-----------------+
  |1|2|3|4|5|6|7|8|9|
  +------------------
  | | | |A|A| | | | |
  |-----------------|
  | | | | | | | | | |
  |-----------------|
  | | | | | | | | | |
  |-----------------|
  | | | | | | | | | |
  +------------------
  
  REQUEST: place a 2x2 element B aligned to position X5
  +-----------------+
  |1|2|3|4|5|6|7|8|9|
  +------------------
  | | | |A|A| | | | |
  |-----------------|
  | | | | |B|B| | | |
  |-----------------|
  | | | | |B|B| | | |
  |-----------------|
  | | | | | | | | | |
  +------------------
  
  REQUEST: place a 1x2 element C aligned to position X1
  +-----------------+
  |1|2|3|4|5|6|7|8|9|
  +------------------
  |C|C| |A|A| | | | |
  |-----------------|
  | | | | |B|B| | | |
  |-----------------|
  | | | | |B|B| | | |
  |-----------------|
  | | | | | | | | | |
  +------------------
  
  REQUEST: place a 3x3 element D aligned to position X2
  +-----------------+
  |1|2|3|4|5|6|7|8|9|
  +------------------
  |C|C| |A|A| | | | |
  |-----------------|
  | |D|D|D|B|B| | | |
  |-----------------|
  | |D|D|D|B|B| | | |
  |-----------------|
  | |D|D|D| | | | | |
  +------------------
  
  
  REQUEST: place a 5x1 element E aligned to position X5
  +-----------------+
  |1|2|3|4|5|6|7|8|9|
  +------------------
  |C|C| |A|A| | | | |
  |-----------------|
  | |D|D|D|B|B| | | |
  |-----------------|
  | |D|D|D|B|B| | | |
  |-----------------|
  | |D|D|D|E|E|E|E|E|
  +------------------
  
  If an element can't be placed for lack of
  room, it does not appear on the
  timeline. This is a problem to be solved.
  
*/

    };
    
    $.fn.timeline = function( elements ) {
        return

    // Functions here

    bitmap = [];

	jQuery.fn.extend({
        // Render an object
        render: function(){

        },

        // Place an element on a grid
        place: function(){

        },

        // Display a rightward-extending duration from behind an object
        duration: function(){
        
        },
        
        sortByTimeStamp: function(a,b) {
            var x = a.date;
            var y = b.date;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        },
        
        
    });

	jQuery.extend({
        // Jut stubs/scratchpad
        arrange: function(elements, config) {
            config = {
                date: function(el) {return Date(el.date) },
                alignment: function(el) {return el.alignment },
                template: '', // Template
                min_height: '40',
                max_height: '100',
                max_width: '1000'
            }
        }
    });


    };
)( jQuery );
