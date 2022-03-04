import React from "react";
import Charts from "./Components/charts";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import Crud from "./Components/Crud/crud";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Busines Cube 7</h2>
        </header>
        <main>
          <div className="App-main">
            <Tabs>
              <TabList>
                <Tab>Gracifi</Tab>
                <Tab>CRUD</Tab>
                <Tab>LINKS</Tab>
              </TabList>
              <TabPanel>
                <Charts />
              </TabPanel>
              <TabPanel>
                <Crud />
              </TabPanel>
              <TabPanel>
                <Link to="/home">HOME</Link>
                <Link to="/about">ABOUT</Link>
              </TabPanel>
            </Tabs>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
