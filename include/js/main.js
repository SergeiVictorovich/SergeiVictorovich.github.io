;(function () {

    'use strict';

    var container = document.getElementsByClassName('container-fluid')[0],
        bg = document.getElementById('bg'),
        frame = document.getElementById('frame');

    bg.className += ' visible';

    [].forEach.call(document.getElementsByClassName('js-toggle'), function (elem) {

        elem.addEventListener('click', function () {

            var action = this.dataset.action;

            switch (action) {
                case 'main':
                    location.href = '/';
                    return;
                case 'report':
                    frame.src = 'include/docs/curs.pdf';
                    break;
                case 'scene_0':
                    frame.src = 'include/webplayer/webplayer.html?load=/cp/include/scenes/first/curs.json&no_social&autorotate';
                    break;
                case 'scene_1':
                    frame.src = 'include/webplayer/webplayer.html?load=/cp/include/scenes/final/final.json&no_social&autorotate';
                    break;
                case 'awesome_0':
                    frame.src = 'https://www.blend4web.com/apps/webplayer/webplayer.html?load=../../assets/capri/props/watch_scene/watch_scene.json&autorotate&no_social&compressed_textures&compressed_textures_pvr';
                    break;
                case 'awesome_1':
                    frame.src = 'https://www.blend4web.com/apps/webplayer/webplayer.html?load=../../assets/capri/buildings/fountain_elephants/fountain_elephants.json&autorotate&compressed_textures&compressed_textures_pvr&no_social';
                    break;
                case 'awesome_1.5':
                    frame.src = 'https://www.blend4web.com/apps/webplayer/webplayer.html?load=../../assets/interactivity/solar_system/solar_system_ru.json&compressed_textures&compressed_textures_pvr&no_social';
                    break;
                case 'awesome_2':
                    frame.src = 'include/scenes/awesome/2/index.html';
                    break;
                case 'awesome_3':
                    frame.src = 'include/scenes/awesome/3/index.html';
                    break;
                case 'awesome_4':
                    frame.src = 'include/scenes/awesome/4/index.html';
                    bg.style.display = '';
                    return;
                default:
                    alert('Документ не найден!');
                    return;
            }

            bg.style.display = 'none';

        });

    });

    var info = document.getElementsByClassName('info-wrap')[0],
        width = null,
        height = null;
    
    document.getElementsByClassName('info-wrap-hide')[0].addEventListener('click', function () {

        info.style.width = info.clientWidth + 'px';
        info.style.height = info.clientHeight + 'px';

        if (!info.classList.contains('_hidden')) {
            width = info.clientWidth;
            height = info.clientHeight;
        } else {
            info.style.width = width + 'px';
            info.style.height = height + 'px';
        }

        toggleClass(info, '_hidden');
        toggleClass(this, 'active');

    });

    [].forEach.call(document.getElementsByClassName('js-slide'), function (elem) {

        var slideBlock = elem.nextElementSibling;
        if (slideBlock.nodeType != 1) {
            slideBlock = slideBlock.nextElementSibling;
        }

        elem.addEventListener('click', function () {

            info.style.height = 'auto';

            toggleClass(slideBlock, 'visible');

        });

    });

    function toggleClass(el, className) {
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push(className);

            el.className = classes.join(' ');
        }
    }

})();