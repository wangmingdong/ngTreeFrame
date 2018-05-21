module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        // 开启4个空格缩进规则
        // "indent": [2, 4, { "SwitchCase": 1 }],
        // "indent": [2, 4],//缩进风格
        "semi": [2, "always"],//语句强制分号结尾
        "no-undef": [0],//不能有未定义的变量
        "no-extra-parens": 2,//禁止非必要的括号
        "no-var": 0,//禁用var，用let和const代替
        "curly": [2, "all"],//必须使用 if(){} 中的{}
        "radix": 1,//parseInt必须指定第二个参数
        "valid-jsdoc": 0,//jsdoc规则
        "id-match": 0,//命名检测
        "no-unused-vars": 0,  // 变量是否使用过
        "no-console": 0,
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};