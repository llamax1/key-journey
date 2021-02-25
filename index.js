'use strict';
var buffer_contents = ""
var input_enabled = true;
var decimal_mode = false;
var outof;

// Makes the cursor blink.
function blink_cursor() {
    if (input_enabled) {
        $('#cursor').fadeOut(500).fadeIn(500, blink_cursor);
    }
    else {
        $('#cursor').hide()
    }
}

// Sets buffer to text parameter
function set_buffer (text) {
    $('#buffer').html(text + '<span id="cursor">|</span>')
    buffer_contents = text
    blink_cursor()
}

function show_wh() {
    $('#wh').show()
}

$(document).ready(function(){
    $('#wh-btn').click(function(){
        $('#wh-box').show(400)
    })
    blink_cursor()
    // Detects if a key is pressed
    $(document).keydown(function(event){
        if (input_enabled) {
            outof = $('#outof-box').text()
            // Sets cur_char to letter relating to the ASCII code of the key just pressed.
            var cur_char = String.fromCharCode(event.which)
            console.log(event.which)
            console.log(cur_char)
            if (event.which == 65) {
                show_wh()
            }
            
            // isNan returns true if the variable is non-numeric. ! is used to negate. 190 is a full stop, 13 is enter and 8 is backspace.
            if (event.which != 8) {
                buffer_contents = buffer_contents + cur_char
                set_buffer(buffer_contents)
            }
            // Backspace feature
            else if (event.which == 8) {
                event.preventDefault()
                buffer_contents = buffer_contents.slice(0, -1)
                set_buffer(buffer_contents)
            }
        }
    })
})