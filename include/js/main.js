'use strict';

$(document).ready(function () {

    var $container = $('.container-fluid');

    $('#bg').addClass('visible');

    $('.js-toggle').on('click', function () {

        var action = $(this).data('action');
        var frame = $('#frame');
        var video = $('#bg');
        var error = false;

        switch (action) {
            case 'main':
                location.href = '/';
                return;
            case 'report':
                frame.attr('src', 'include/docs/curs.pdf');
                break;
            case 'scene_0':
                frame.attr('src', 'include/webplayer/webplayer.html?load=/include/scenes/first/curs.json&no_social&autorotate&compressed_textures&fallback_image=http://kinoino.com/uploads/thumbs/thumb.jpg');
                break;
            case 'scene_1':
                frame.attr('src', 'include/webplayer/webplayer.html?load=/include/scenes/final/final.json&no_social&autorotate&compressed_textures');
                break;
            case 'screensaver':
                frame.attr('src', 'include/scenes/screensaver/index.html');
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

    var $info = $container.find('.info-wrap');
    var infoWidth = $info.width();
    var infoHeight = $info.height();

    $container.on('click', '.info-wrap-hide', function () {

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


    $('.resources-btn').on('click', function () {

        $('.resources').slideToggle(300);

    });

});