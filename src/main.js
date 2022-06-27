import { createApp } from 'vue'
import App from './9-具名插槽的使用/App.vue'

// import {sum} from './12_异步组件的使用/utils/math';

// console.log(sum(20, 30));


// 异步组件其实就是基于import()来实现的。

// 通过import函数导入的模块, 后续webpack对其进行打包的时候就会进行分包的操作
// import("./12-异步组件/utils/math").then((res) => {
//   console.log(res.sum(20, 30))
// })

createApp(App).mount('#app')
