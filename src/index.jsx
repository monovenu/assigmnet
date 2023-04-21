import React from "react";
import ReactDOM from "react-dom";
import Layout from '@/components/Layout'
import './common.css'
// import 'antd/dist/antd.css'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Layout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));