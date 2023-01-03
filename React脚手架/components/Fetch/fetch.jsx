import React, { Component } from 'react'

export default class Fetch extends Component {
    getData = ()=>{
        fetch('??????').then(
            // 第一个then只负责返回是否与服务器连接成功了
            response=>{
                console.log('联系服务器成功了')
                return response.json()
            },
            // 这里的错误回调和第二个then的错误回调合并到最后的.catch函数里
            /* error=>{
                console.log('联系服务器失败了', error)
                // 返回一个什么都不执行的Promise对象（这样promise对象的状态永远是pending）
                // Promise调用链后面也就不执行了
                return new Promise(()=>{})
            } */
        ).then(
            // 第二个then才是是否成功获取到数据了
            response=>{
                console.log('获取数据成功了', response)
            },
            /* error=>{
                console.log('获取数据失败了', error)
            } */
        ).catch(
            error=>{console.log(error)}
        )
    }
    getData2 = async ()=>{
        try{
            const response = await fetch('??????')
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log('请求出错', error)
        }
    }
    render() {
        return (
            <div>
            <button onClick={this.getData}>
                点我获取数据
            </button>
            </div>
        )
    }
}
