# 基于vue3.x+Ts+Webpack+Vant的移动端开发脚手架

### 1. 调整eslint 与 prettier的冲突

```JavaScript
    // .eslinrc.js
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        indent: ["warn", 4]
    }
    // editorconfig 团队协作,不同ide下的一致性
    root = true
    [*]
    charset = utf-8
    indent_style = space
    indent_size = 4
    end_of_line = lf
    insert_final_newline = true
    trim_trailing_whitespace = true
    // .vscode>.settings.json, 同步开启vscode插件eslint
    {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    }
```

### 2. 配置vue.config.js以及环境变量

根目录创建 `.env`, `.env.production`, `.env.development`, 不用区分环境的 写在`.env`, 变量以 `VUE_APP`开头 例如`VUE_APP_API`

以及alias, 全局css reset文件 less文件

## 3. 使用vw进行适配

```javascript
yarn add postcss-px-to-viewport

vue.config.js
const autoprefixer = require("autoprefixer");
const px2vw = require("postcss-px-to-viewport");

css: {
    loaderOptions: {
        less: {
            modifyVars: {
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "~@src/assets/css/theme.less";`
            }
        },
        postcss: {
            plugins: [
                autoprefixer(),
                px2vw({
                    viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                    viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                    unitPrecision: 8, // 指定`px`转换为视窗单位值的小数位数
                    viewportUnit: "vw", //指定需要转换成的视窗单位，建议使用vw
                    selectorBlackList: [".ignore", ".hairlines", "van"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                    minPixelValue: 0.5, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                    mediaQuery: false // 允许在媒体查询中转换`px`
                })
            ]
        }
    }
}
```
