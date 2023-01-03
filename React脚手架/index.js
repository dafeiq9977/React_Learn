import React from 'react'
import ReactDOM from 'react-dom/client'

// 引入BrowserRouter
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // 最外层包一层BrowserRouter
    <BrowserRouter>
        <App>hello app</App>
    </BrowserRouter>
)