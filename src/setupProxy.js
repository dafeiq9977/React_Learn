// 注意这里改成createProxyMiddleware才可以打开页面
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        // 遇见/api1前缀的请求触发这个代理配置
        createProxyMiddleware('/api1', {
            // 请求转发给谁
            target: 'http://localhost:5000',
            // 控制服务器收到的请求头中host字段的值，host改成服务器自家的地址
            changeOrigin: true,
            // 转发请求的时候，代理服务器修改请求路径
            pathRewrite: {
                '^api1': ''
            }
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {
                '^api2': ''
            }
        }),
    )
}