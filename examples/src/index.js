import React, { PureComponent } from 'react'
import ReactDom, { render } from 'react-dom';
import ZcButton from './button'
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom'
import img from './zhichi-logo.png'
import './index.css'
const Header = () => (
  <div>
    <img src={img} />
    <ul>
      <li>智齿UI-在线示例</li>
      <li><a href="https://www.sobot.com" target="_blank">智齿官网</a></li>
    </ul>

  </div>
)
const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        Button 按钮
      </li>
    </ul>
  </div>
)
const Main = () => (
  <div className="main">
    <ZcButton />
  </div>
)

const App = () => (
  <div className='example-wrap'>
    <div className="header">
      <Header />
    </div>
    <div className="content">
      <Menu />
      <Main />
    </div>
  </div>
)

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)




// const wahahaList = [
//   { id: 1, name: 'denzel' },
//   { id: 2, name: '小丁哥' },
// ]
// const Profile = (props) => (
//   <div>
//     {
//       console.log(props)
//     }
//     proflie ----
//     <Link to="/user" >back</Link>
//     </div>
// )
// const Home = () => (<div>这是首页</div>)
// const About = () => (<div>这是关于页面</div>)
// const Wahaha = () => (
//   <div>
//     <ul>
//       {
//         wahahaList.map(item => (
//           <li key={item.id}>
//             <Link to={`/user/${item.id}`}>{item.name}</Link>
//           </li>
//         ))
//       }
//     </ul>
//   </div >
// )
// const User = () => (
//   <div>
//     <span>这是用户页面</span>
//     <Switch>
//       <Route exact path="/user" component={Wahaha} />
//       <Route exact path="/user/:number" component={Profile} />
//     </Switch>
//   </div>
// )


// const Header = () => (
//   <div>
//     <Link to="/" >首页</Link>
//     <Link to="/about">关于</Link>
//     <Link to="/user" >用户</Link>
//   </div>
// )
// const Main = () => (
//   <div>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/user" component={User} />
//     </Switch>
//   </div>
// )
// const App = () => (
//   <>
//     <Header />
//     <Main />
//   </>
// )

// render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById('root')
// )

// class App extends PureComponent {
//   render() {
//     return (
//       <div>
//         {/* <ZcButton /> */}
//         <ul>
//           <li><Link to="/about">about</Link></li>
//           <li><Link to="/user">user</Link></li>
//         </ul>
//         {this.props.children}
//       </div>

//     )
//   }
// }

// render(
//   <BrowserRouter>
//     <Switch >
//       <Route exact path="/" component={App} />
//       <Route path="/about" component={About} />
//       <Route path="/user" component={User} />
//     </Switch>
//   </BrowserRouter>
//   , document.getElementById('root'));