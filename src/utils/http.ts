import service from "./request";

/**
 * get请求
 */
export function GET(
    url: string,
    params: object = {},
    options: object
): Promise<any> {
    const config = setConfig(options);
    return new Promise((resolve, reject) => {
        service({
            url,
            params,
            ...config,
            method: "GET"
        })
            .then(res => {
                errCodeHandler(res, resolve, reject);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 对于一些请求需要单独处理
 * @param {Object} options
 * @param {Number} options.type  header的几种类型, 如下
 * @param {String} options.responseType 返回的数据类型
 * @param {Function} options.upcb 上传函数进度的回调函数
 * @param {Function} options.downcb 下载函数进度的回调函数
 * xxx  对于请求过期时间可能还要单独处理以适应上传等
 */
function setConfig(options) {
    const { type = 0, responseType = "json", upcb, downcb } = options;
    const Header = setHeader(type);

    const header = {
        headers: Header,
        responseType
    };
    if (upcb) {
        header.onUploadProgress = upcb;
    }
    if (downcb) {
        header.onDownloadProgress = downcb;
    }
    return header;
}

/**
 * 对于部分请求是需要修改header的配置的
 * @param {*} type
 */
function setHeader(type) {
    let typeStr;
    switch (type) {
        case 1:
            // HTTP会将请求参数用key1=val1&key2=val2的方式进行组织，并放到请求实体里面
            // 注意如果是中文或特殊字符如"/"、","、“:" 等会自动进行URL转码
            // 不支持文件，一般用于表单提交  这个必须用qs
            // 参考资料：https://blog.csdn.net/liangcha007/article/details/88293121
            typeStr = "application/x-www-form-urlencoded";
            break;
        case 2:
            // 数据以纯文本形式(text/json/xml/html)进行编码，其中不含任何控件或格式字符。postman软件里标的是RAW
            typeStr = "text/plain;charset=UTF-8";
            break;
        case 3:
            // 上传文件
            typeStr = "multipart/form-data";
            break;
        case 4:
            // svg图片，如果是cookie本地验证，必须：axios.defaults.withCredentials = true
            typeStr = "image/svg+xml";
            break;
        default:
            // 用来告诉服务端消息主体是序列化后的 JSON 字符串
            typeStr = "application/json;charset=UTF-8";
            break;
    }
    return { "Content-Type": typeStr };
}

/**
 * 对错误代码的处理
 */
function errCodeHandler(res, resolve, reject) {
    const { errno, message } = res;
    switch (errno) {
        case 0:
            resolve(res);
            break;
        default:
            console.log(message);
            reject(res);
            break;
    }
}
