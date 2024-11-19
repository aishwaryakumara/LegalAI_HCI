import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Main from './components/main/Main';

/**
 * main(root) component of the App
 * This application combines the SideBar and Main components and creates a layout.
 */
const App = () => {
  return (
    <>
    <SideBar />
    <Main />
    </>
  );
}

export default App;