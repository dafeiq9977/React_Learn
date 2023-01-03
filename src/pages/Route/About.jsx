/**
 * 一个路由就是一个映射关系（key:value）
 * key为URL里的路径，value是function或component
 * 
 * 路由的分类：
 *  1. 后端路由：
 *      1）value是function，后端使用这个function处理客户端的请求
 *      2）注册路由：router.get(path, function(req, res))
 *      3）工作过程：node收到一个请求时，根据请求路径找到匹配的路由处理函数，返回响应数据
 *  2. 前端路由：
 *      1）浏览器路由，value时component，用于展示页面内容
 *      2）注册路由：<Route path="/test" component={Test}>
 *      3）工作过程：当浏览器path变为/test时，展示Test组件
 *  react-router-dom的理解（react给web开发提供的路由器，还有native路由器和一个通用路由器）
 *  在react项目中实现SPA页面
 */

/**
 * 这里先学react-router-dom@5版本（最新的是6版本）
 * 点击导航链接，引起路径变化，路径变化被前端路由器监测到，路由器展示相应组件
 */

/**
 * 路由组件收到三个props参数
 *  以下是这三个参数的关键属性
 *  history:
 *      go: f go(n)
 *      goBack: f goBack(n)
 *      goForward: f goForward(n)
 *      push: f push(path, state)
 *      replace: f replace(path, state)
 *  location:
 *      pathname: "/about"
 *      search: ""
 *      state: undefined
 *  match:
 *      params: {}
 *      path: "/about"
 *      url: "/about"
 */
import React, { Component } from 'react';

class About extends Component {
    render() {
        console.log(this.props)
        // 路由组件接收params参数
        const {id, title} = this.props.match.params
        return (
            <div>
                About组件
            </div>
        );
    }
}

export default About;
