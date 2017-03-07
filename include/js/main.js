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
                frame.attr('src', 'cp/docs/curs.pdf');
                break;
            case 'scene_0':
                frame.attr('src', 'cp/webplayer/webplayer.html?load=/cp/scenes/first/curs.json&no_social&autorotate');
                break;
            case 'scene_1':
                frame.attr('src', 'cp/webplayer/webplayer.html?load=/cp/scenes/final/final.json&no_social&autorotate');
                break;
            case 'screensaver':
                frame.attr('src', 'cp/scenes/screensaver/index.html');
                break;
            case 'awesome_0':
                frame.attr('src', 'https://www.blend4web.com/apps/webplayer/webplayer.html?load=../../assets/capri/props/watch_scene/watch_scene.json&autorotate&no_social&compressed_textures&compressed_textures_pvr');
                break;
            case 'awesome_1':
                frame.attr('src', 'https://www.blend4web.com/apps/webplayer/webplayer.html?load=../../assets/capri/buildings/fountain_elephants/fountain_elephants.json&autorotate&compressed_textures&compressed_textures_pvr&no_social');
                break;
            case 'awesome_1.5':
                frame.attr('src', 'https://www.blend4web.com/apps/webplayer/webplayer.html?load=../../assets/interactivity/solar_system/solar_system_ru.json&compressed_textures&compressed_textures_pvr&no_social');
                break;
            case 'awesome_2':
                frame.attr('src', 'cp/scenes/awesome/2/index.html');
                break;
            case 'awesome_3':
                frame.attr('src', 'cp/scenes/awesome/3/index.html');
                break;
            case 'awesome_4':
                frame.attr('src', 'cp/scenes/awesome/4/index.html');
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

        if (!$info.hasClass('_hidden')) {

            setTimeout(function () {
                $info.css('height', 'auto');
            }, 300);

        }

    }).on('click', '.js-awesome, .resources-btn', function () {

        $(this).next().slideToggle(300);

    });

});