import React, { Component } from 'react';
import Home from './pages/Route/Home';
import About from './pages/Route/About';
import MyNavLink from './components/MyNavLink';

/* import Hello from './components/Hello' */
//import {Link, Route} from 'react-router-dom'
// NavLink组件被点击后会被加上active类
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

// 创建外壳组件
class App extends Component {
    render() {
        // props中的children属性是标签内的内容
        console.log(this.props)
        return (
            // 在APP组件的外层包一层BrowserRouter组件，这样整个页面都共用一个BrowserRouter
            // HashRouter是hash模式的路由器
            <div>
                {/* <Hello /> */}

                {/* React中用路由链接切换组件 */}
                {/* <Link to="/about">About</Link>
                <Link to="/home">Home</Link> */}

                {/* activeClassName的意思是点了之后会加上相应的类名 */}
                {/* 不写activeClassName默认点了加上active类名 */}
                <NavLink activeClassName="yangshi" to="/about">About</NavLink>
                {/* <NavLink to="/home">Home</NavLink>  */}

                {/* MyNavLink封装了以下NavLink */}
                <MyNavLink to="/home">Home</MyNavLink>

                {/* Switch组件的作用是里面包含的注册路由匹配成功后就不继续匹配了 */}
                <Switch>

                    {/* 注册路由，路径对应哪个组件 */}
                    <Route path="/about" component={About}/>

                    {/* 下面这个Route开启精准匹配，也可以直接写exact */}
                    <Route exact={true} path="/home" component={Home}/>

                    {/* path里面声明接收params参数，接收id和title */}
                    {/* 路由组件的props.match.params会接受到这些值 */}
                    <Route path="/home/:id/:title" component={About}/>
                    
                    {/* 默认匹配的路由，路径都没匹配上匹配这个 */}
                    <Redirect to="/home"/>
                </Switch>
            </div>
        );
    }
}

export default App;

/**
 * 路由的模糊匹配：链接给的路径包含路由组件匹配的部分
 * e.g /home匹配A组件   给的路径是/home/a/b     在模糊匹配中是匹配成功的
 * 
 * 路由匹配顺序：注册子路由要写父路由的path值；路由的匹配是按照注册路由的顺序进行的
 */

/**
 * 路由组件传递params参数
 *      注册路由组件的时候在路径后添加 /:id/title表示params参数接收id和title
 *      路由链接传递params参数
 *      <link to={`/home/${id}/${title}`}>About</link>
 *      路由组件的this.props.match.params可以访问传递过来的params参数
 */

/**
 * 路由组件传递search参数
 *      路由链接组件的路径写/?id=${...}&title=${...}
 *      search参数在注册路由的时候无需特殊处理
 *      路由组件获取search参数的途径是this.props.location.search（获得的是一个search参数字符串，urlencoded编码，需要人工提取键值对）
 *          react脚手架里的querystring库含提取search参数的函数
 *          import qs from 'querystring'
 *          qs.stringify(obj) => 将对象转化为urlencoded编码形式的字符串
 *          qs.parse(str) => 将urlencoded编码形式的字符串转换为字符串
 */

/**
 * 路由组件传递state参数（于React组件的state没有任何关系）
 *      路由链接组件写：<Link to={{pathname:"...", state:{id:..., title:...}}}>...</Link>
 *      路由注册：<Route path="正常写" component={Detail}> 正常注册即可
 *      路由组件拿到state参数：this.props.location.state || {}
 *      state传递参数方法在地址栏不显示参数
 *      刷新页面也可以保留住参数，但是清空浏览器缓存或关闭浏览器内容就没有了
 */
