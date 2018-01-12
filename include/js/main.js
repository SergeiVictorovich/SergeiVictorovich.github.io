; (function () {

    var bg = document.getElementsByClassName('bg')[0];

    bg.classList.add('visible');

    [].forEach.call(document.getElementsByClassName('js-toggle'), function (elem) {

        elem.addEventListener('click', function () {

            document.getElementsByTagName('iframe')[0].src = this.dataset.action;

            bg.style.display = 'none';

        });

    });

    var info = document.getElementsByClassName('info-wrap')[0];
    var width;
    var height;

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

        info.classList.toggle('_hidden');
        this.classList.toggle('active');

    });

    [].forEach.call(document.getElementsByClassName('js-slide'), function (elem) {

        var slideBlock = elem.nextElementSibling;

        if (slideBlock.nodeType != 1) {
            slideBlock = slideBlock.nextElementSibling;
        }

        elem.addEventListener('click', function () {

            info.style.height = 'auto';

            slideBlock.classList.toggle('visible');

        });

    });

})();