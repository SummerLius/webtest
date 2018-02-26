define(function(require, exports, module) {
    require('director');

    var router = new Router();

    router.on('/index', function() {
        console.log('/index');
    });


    router.configure({
        notfound: function() {
            // router.setRoute('/index');
            location.replace('//www.baidu.com');
        },
        // on: function() {
        //     console.log('every: on');
        // },
        // before: function() {
        //     console.log('every: before');
        // },
        // after: function() {
        //     console.log('every: after');
        // }
    });

    console.log(router); //------------------

    router.init('/index');
});