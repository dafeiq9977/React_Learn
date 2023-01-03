// 文件名取名叫index.jsx，这样其他文件import的时候路径写到文件夹的名称就行

import React, {Component} from 'react'
// 引入Hello组件的样式文件
import hello from './Hello.module.css'

export default class Hello extends Component{
    render(){
        return (
            <h2 className={hello.title}>Hello React</h2>
        )
    }
}