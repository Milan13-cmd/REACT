import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElemnt = {
//   type: 'a',
//   props: {
//       href: 'https://youtube.com',
//       target: '_blank'
//   },
//   Child: 'click me to visit youtube'
// }

const anotherElement = (
  <a href="https://youtube.com" target='_blank'>youtube</a>
)

const reactElement = React.createElement(
  'a',
  {href:"https://www.google.com",target:"_blank"},
  "click me"
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
)
