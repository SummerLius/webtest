// 1111111111111111
// define({
//     'key1': 'liu',
//     'key2': 'zhong'
// });

// 2222222222222222
define(function(require, exports, module) {
    console.log('Ref: one');

    exports.name = 'one';
    exports.a = 1;
    exports.b = 2;

    // 注意exports和module.exports不是同一个，关系仅仅是：exports是module.exports的引用
    // module.exports = {xxx: 'direct'};
});
