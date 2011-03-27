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
