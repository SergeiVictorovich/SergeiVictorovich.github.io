
'use strict';

$(document).ready(function(){

    $('#bg').addClass('visible');

    $('.js-toggle').on('click', function(){

        var action = $(this).data('action');
        var frame = $('#frame');
        var video = $('#bg');
        var error = false;

        switch(action) {
            case 'main':
                location.href = '/curs-3d/';
                return;
            case 'report':
                frame.attr('src', '/curs-3d/_include/_docs/work.pdf');
                break;
            case 'scene_0':
                frame.attr('src', '/curs-3d/_include/_webplayer/webplayer.html?load=/curs-3d/_include/_scenes/_first/curs.json&no_social&autorotate');
                break;
            case 'scene_1':
                frame.attr('src', '/curs-3d/_include/_webplayer/webplayer.html?load=/curs-3d/_include/_scenes/_final/final.json&no_social&autorotate');
                break;
            default:
                error = true;
        }

        if (!error) {
            video.remove();
        } else {
            alert('Документ не найден!');
        }

    });

    var $info = $('.info-wrap');
    var infoWidth = $info.width();
    var infoHeight = $info.height();

    $('.info-wrap-hide').on('click', function(){

        var $self = $(this);

        if ($self.hasClass('active')) {
            $info
                .width(infoWidth)
                .height(infoHeight);
        } else {
            $info
                .width(10)
                .height(10);
        }

        $info.toggleClass('_hidden');
        $self.toggleClass('active');


    });

});