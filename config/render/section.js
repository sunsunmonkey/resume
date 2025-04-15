/*
 * @Author: Lin
 * @Date: 2019-11-13 22:42:18
 * @LastEditTime: 2019-12-07 11:34:49
 * @Description: 修改原简历内容
 * @FilePath: \resume\config\render\section.js
 */
/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right }
}
/**
 * header
 * 默认将内容转为h4
 */
const h = (left = '', right = '') => {
  return { left: `#### ${left}`, right: `#### ${right}` }
}

/**
 * 正文部分
 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏
 * 请自己判断并适应页面尺寸
 */
export default [
  /**
   * 每一个小模块，都有以下几个配置项：
   * title： 顶部名称栏
   * content: 里面的内容，需要注意的是每一条内容都会换行
   */
  {
    title: '实践经历',
    content: [
      /**
       * 文章正文部分
       * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
       */
      p(`**抖音 · 直播 · 平台前端部门**`, `2024.11.18 - 至今`),
      p(`<h4>直播服务平台机构版<h4>`),
      p(
        `*需求介绍：* 增加 <strong>拖拽</strong> 操作组织节点的能力，旨在让用户方便修改团队卡片的位置，调整组织结构，便于工会管理`
      ),
      p(
        `*需求收益：* 需求上线后，该页面uv增长<strong>20.09%</strong>， <strong>26%</strong> 头部工会使用该功能调整工会组织节点`
      ),

      p(`<h4>团播闪耀星挑战<h4>`),
      p(
        `*需求介绍：* 通过榜单以及相关奖励的形式，鼓励团播账号在直播间外的经营活动，通过短视频二创，建立粉丝讨论阵地`
      ),
      p(
        `- 使用多种端能力，调用端内多种能力比如相机，分享，使用<strong>schema</strong> 拉起个人页，话题页，直播间`
      ),
      p(
        `- 基于事件通讯方式和滑动窗口，解决在直播间场景下页面 <strong>套娃</strong> 的问题`
      ),
      p(
        `*需求收益：* 活动期间平均每天参与用户达 <strong>1w+</strong>，相关话题参与用户累计达 <strong>1.3w</strong>`
      ),

      p(`**美团 · 到店 · 基础架构部门**`, `2024.5.14 - 2024.9.6`),
      p(`<h4>webIDE 插件<h4>`),
      p(
        `*需求介绍：* 面向低代码纯前端 <strong>webIDE</strong> 场景的基于eslint的插件，使用 <strong>webcontainer</strong> 技术让浏览器中运行 nodejs`
      ),
      p(
        `- 借助分片存取 <strong>indexedDB</strong>，缓存 node_modules，非首次启动时间优化约 <strong>46%</strong>`
      ),
      p(`<h4>vscode 插件<h4>`),
      p(
        `*需求介绍：* 基于 <strong>ai</strong> 对圈复杂度高的代码进行重构，同时将生成结果回传到代码内部webview`
      ),
      p(
        `- 基于 <strong>vscode codelens</strong> api 在代码内部唤醒 webview，流式输出结果 ，解析 md 输入`
      ),
      p(
        `**重庆邮电大学 · 红岩网校工作站**   [Link](https://redrock.team)`,
        `2023.9.1 - 2024.5.14`
      ),
      p(
        `隶属校团委的学生互联网组织，成立于2000年，共有成员70余人，拥有 PRD-UI-前后端开发-运营-迭代 的完整开发流程。`
      ),
      p(`*红岩网校工作站 · 前端研发部部长* `),
      p(
        `- 积极推动部门提效，自主研发脚手架，基于 *vite* 建立了多种更上层的封装模板 [rrfe](https://github.com/RedrockTeam/rrfe)（redrockFE）。`
      ),
    ],
  },
  {
    title: '个人能力',
    content: [
      p(
        `- *熟练掌握基本技能。* 熟悉 HTML5、CSS3、ES6+、React 等，了解并实践过前端工程化，会基本的数据结构与算法。
        `
      ),
      p(
        '- *了解 rust。* 对rust有一定的了解，写过简单项目，期待 rust 在前端的未来'
      ),
    ],
  },
  {
    title: '项目经历',
    content: [
      p(`**红岩网校官网**`),
      p(`*项目线上地址：* [https://redrock.team](https://redrock.team)`),
      p(
        `*项目介绍：* 红岩官网的重新制作，旨在提升红岩网校形象，吸引更多人的加入。`
      ),
      p(`*技术栈：* React + less + gsap + React-Router`),
      p(
        `- 使用动画库 <strong>gsap</strong> 进行时间轴控制，实现全页切换，滚动触发动画。`
      ),
      p(
        `- 使用自研的全屏切换效果，实现只加载当前可视页面，进而提升性能，将LCP从原来的 <strong>3s</strong> 提升到 <strong>1s</strong> 以内（lighthouse测速）。提升达 <strong>75%</strong>`
      ),
      p(`- 路由使用 *Suspense* 和 *React.lazy*，实现路由层面的懒加载。`),
      p(`**rrfe（团队提效命令行工具）**`),
      p(
        `*项目地址：* [https://github.com/RedrockTeam/rrfe](https://github.com/RedrockTeam/rrfe)`
      ),
      p(
        `*项目介绍：* 旨在提升效率，规范代码，减少重复化的工作，提高成员的产出效率。`
      ),
      p(`*功能介绍：*`),

      p(`- 创建模板：提供多种项目模板, 以及团队自己的 *CI* 文件, 开箱即用。`),
      p(
        `- 图片压缩：由于从figma拉取的图片大多资源占用较大，需要进行一定压缩，于是基于  <strong>tinypng</strong> api 实现对批量图片的压缩`
      ),
      p(
        `- 自动生成 api 和 ts 代码：基于一定的接口文档格式, 先将md转化为 <strong>json</strong> 的形式，再生成相应的 *ts* 和 *api* 请求的代码, 同时自带有 <strong>apifox</strong> 的  <strong>loader</strong> 可以轻松将从 apifox 导出的文档转化为代码。`
      ),
    ],
  },
  {
    title: '个人作品',
    content: [
      p(`**sun-react**`),
      p(`从零开始的 React18 实现, 能够跑通官方的部分用例`),
      p(
        `*项目地址：* [https://github.com/sunsunmonkey/sun-react](https://github.com/sunsunmonkey/sun-react)`
      ),
      p(`- 实现了主要的 <strong>render</strong> 以及 <strong>commit</strong> 阶段, 支持函数式组件。`),
      p(
        `- 实现了hook的基本架构, 同时实现的hook有: useState,useEffect,useRef,useContext,useTransiton。`
      ),
      p(
        `- 接入了 <strong>lane</strong> 和 <strong>scheduler</strong> , 从而实现了不同的优先级, 并发更新的流程。`
      ),
      p(`**sun-vite**`),
      p(
        `*项目地址：* [https://github.com/sunsunmonkey/sun-vite](https://github.com/sunsunmonkey/sun-vite)`
      ),
      p(
        `结合对于 vite 的使用及兴趣，简易实现了 vite 的<strong>插件机制</strong>， <strong>CLI搭建</strong>，<strong>HMR</strong> 以及预构建等功能。
        `
      ),
    ],
  },
]
