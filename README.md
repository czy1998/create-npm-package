# package.json

> 只有在 files 数组中的文件才会被 publish 到 npm 上

```js
    // 会在项目、发布，还有本地 npm install 之前执行
    "prepare": "npm run build",
    // 会在 prepare 脚本之前以及 npm publish运行过程中执行
    "prepublishOnly": "npm test && npm run lint",
    // 会在发布新的包版本之前执行
    "preversion": "npm run lint",
    // 会在新版本被发布之后执行
    "version" : "npm run format && git add -A src",
    // 会在 git 的 commit 创建之后执行
    "postversion" : "git push && git push --tags"
```

-   添加类型声明与入口

```json
    "main": "lib/index.js",
    "types": "lib/index.d.ts",
```

# 项目记录

1. 初始化项目

    ```node
    yarn init -y
    // 或
    npm init -y
    ```

2. 安装 ts 依赖

    ```node
    yarn add typescript -D
    // 或
    npm install typescript -D
    ```

3. 创建 `tsconfig.json`

    ```node
    // 终端命令生成或手动创建都行
    yarn run tsc --init (yarn tsc --init)
    // 或
    npx tsc --init
    ```

    ```json
    {
        "compilerOptions": {
            "target": "es2016",
            "module": "commonjs",
            "declaration": true,
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "skipLibCheck": true
        },
        "include": ["src"],
        "exclude": ["**/__tests__/*"]
    }
    ```

    > (中文网很久没更新了,推荐去英文官网查阅)
    > [tsconfig.json 的基本配置](https://www.tslang.cn/docs/handbook/tsconfig-json.html)  
    > [中文手册](https://typescript.bootcss.com/tsconfig-json.html)  
    > [英文文档](https://www.typescriptlang.org/zh/docs/handbook/tsconfig-json.html)

4. 代码美观-安装 `prettier`

    ```node
    yarn add prettier -D
    // 或
    npm install prettier -D
    ```

5. 添加 `prettierrc` 配置文件

    ```js
    singleQuote: true, // 使用单引号而不是双引号。默认 false
    semi: false, // 句尾添加分号。默认 true
    tabWidth: 4, // 指定每个缩进级别的空格数。默认 2
    useTabs: false, // 使用制表符而不是空格缩进。 默认 false
    ```

6. 安装 `jest` ，用于单元测试

    ```node
    yarn add jest ts-jest @types/jest -D
    // 或
    npm install jest ts-jest @types/jest -D
    ```

7. 创建 `jestconfig.json`

    ```json
    {
        "transform": {
            "^.+\\.(t|j)sx?$": "ts-jest"
        },
        "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
        "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
    }
    ```

8. 发布

    ```node
    yarn publish
    ```

# 参考资料

+ [创建一个 TypeScript/TS 的 NPM/npm 包](https://blog.csdn.net/YopenLang/article/details/125729150)
