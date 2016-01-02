(function() {
    //index page
    if (document.querySelector('.bootcamp-body')) {
        document.querySelector('.bootcamp-body .setup .desc h2').innerHTML = '勾搭基友';
        document.querySelector('.bootcamp-body .create-a-repo .desc h2').innerHTML = '开房';
        document.querySelector('.bootcamp-body .fork-a-repo .desc h2').innerHTML = '沐浴更衣';
        document.querySelector('.bootcamp-body .be-social .desc h2').innerHTML = '交流心得';
    }

    //profile page
    if (document.querySelector('.profilecols')) {
        document.querySelectorAll('.profilecols .vcard .vcard-stats .text-muted')[0].innerHTML = '想跟他约的人';
        document.querySelectorAll('.profilecols .vcard .vcard-stats .text-muted')[1].innerHTML = '他关注的房间';
        document.querySelectorAll('.profilecols .vcard .vcard-stats .text-muted')[2].innerHTML = '他想约的人';

        document.querySelectorAll('.flush')[0].querySelector('h3').innerHTML = '个人房间';
        document.querySelectorAll('.flush')[1].querySelector('h3').innerHTML = '他人房间';
        document.querySelectorAll('.flush')[2].querySelector('h3').innerHTML = '约会活动日历';
    }
})();
