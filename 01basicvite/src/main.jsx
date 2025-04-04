import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to redirect to google ",
};


// function MyApp(){
//     return (
//         <div>
//             <h1>Custom React App</h1>
//         </div>
//     )
// }
const AnotherElement = (
    <a href="http://google.com" target="_blank">Visit google</a>
)

const AreactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:"_blank"},
    'click'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
