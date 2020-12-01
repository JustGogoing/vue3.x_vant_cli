const path = require("path");

module.exports = {
    publicPath: "/",
    outputDir: "dist",
    parallel: false, // 打包时是否为ts和babel用多线程
    productionSourceMap: false, // 关闭生产环境的sourceMap
    // 配置代理
    devServer: {
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: "http://api.gcourt.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/api_ms1": {
                target: "http://api.gcourt.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@com", resolve("src/components"))
            .set("@view", resolve("src/views"))
            .set("@static", resolve("./static"))
            .set("@src", resolve("./src"));
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "~$src/assets/css/theme.less";`
                }
            }
        }
    }
};

// 路径映射
function resolve(dir: string): string {
    return path.join(__dirname, dir);
}
