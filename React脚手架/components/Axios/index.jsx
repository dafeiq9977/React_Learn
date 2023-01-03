import axios from 'axios'
import React, { Component } from 'react'

export default class Axios extends Component {
    getStudentData = ()=>{
        // axios发送目的地址可能会造成跨域问题，可以设置代理服务器
        // 代理服务器设置方法：package.json添加"proxy"字段，值是目的服务器地址（只能配置一个代理）
        // 这种配置方法表示客户端先请求代理服务器，代理服务器有所需资源，直接返回，没有，才会转发目的服务器

        // 代理服务器设置方法2：src文件夹下添加setupProxy.js文件
        
        axios.get('?????').then(
            response=>{
                console.log('成功了', response.data)
            },
            error=>{
                console.log("失败了", error)
            }
        )
    }

    render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
}
