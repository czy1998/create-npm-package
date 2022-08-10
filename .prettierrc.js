// .prettierrc.js
// 用.prettierrc.js而不用.prettierrc,就是可以写注释

module.exports = {
    singleQuote: true, // 使用单引号而不是双引号。默认 false
    semi: false, // 句尾添加分号。默认 true
    tabWidth: 4, // 指定每个缩进级别的空格数。默认 2
    useTabs: false, // 使用制表符而不是空格缩进。 默认 false
    printWidth: 120, // 超过多少换行， 默认 80

    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"。 默认 true
    /*
        将 > 多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）
        1.true- 例子：
        <button
            className="prettier-class"
            id="prettier-id"
            onClick={this.handleClick}>
            Click Here
        </button>
        2.false-例子
            <button
                className="prettier-class"
                id="prettier-id"
                onClick={this.handleClick}
                >
                Click Here
            </button>
    **/
    bracketSameLine: false, // 默认false
    /*
        "always"- 始终包括括号。例子：(x) => x
        "avoid"- 尽可能省略括号。例子：x => x
    */
    arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。默认：“always”
}
