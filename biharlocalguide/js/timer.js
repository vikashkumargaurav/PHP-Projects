$.fn.timer = function( callback ) {
    callback = callback || function() {};
    return this.each(function() {
        var $timer = $( this ),
            $minutesEl = $timer.find( '.minutes' ),
            $secondsEl = $timer.find( '.seconds' ),
            interval = 1000,
            timer = null,
            start = 60,
            minutesText = $minutesEl.text(),
            minutes = ( minutesText[0] == '0' ) ? minutesText[1] : minutesText[0],
            m = Number( minutes );

        timer = setInterval(function() {
            start--;
            if( start == 0 ) {
                start = 60;

                $secondsEl.text( '00' );

                m--;

                if( m == 0 ) {
                    clearInterval( timer );
                    $minutesEl.text( '00' );
                    callback();

                }
            } else {

                if( start >= 10 ) {

                    $secondsEl.text( start.toString() );

                } else {

                    $secondsEl.text( '0' + start.toString() );


                }
                if( minutes.length == 2 ) {
                    $minutesEl.text( m.toString() );
                } else {
                    if( m == 1 ) {
                        $minutesEl.text( '00' );
                    } else {
                        $minutesEl.text( '0' + m.toString() );
                    }
                }

            }

        }, interval);

    });

};

$(function() {
    $( '.timer' ).timer(function() {
        // $('#timerDiv').hide();
        // $('#resentCodeBtn').show();
    });

});
