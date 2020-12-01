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

### 2. 配置vue.config.ts

配置了环境变量,以及alias, 全局css reset文件 less文件
