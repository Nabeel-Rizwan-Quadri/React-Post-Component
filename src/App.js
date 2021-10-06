import React from "react";
import CustomPost from './component/Post';
import './App.css'
import avatar from "E:/Studies/Git/Post-component/src/f.jpg"
import a from "./a.jpg"
import b from "./b.jpg"
import c from "./c.jpg"
import d from "./d.jpg"
import e from "./e.jpg"

function App() {

  const info = {
    createdBy: 'Nabeel Rizwan',
    avatars: avatar,
    description: "Lorem ipsum dolor siut  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: [a, b, c, d, e],
    createdAt: Date.now(),
    }
  
  return (
    <div className="App">
      <img className="images" src={info.image[0]} alt="avatar"/>
     <CustomPost info={info}/>
    </div>
  );
}

export default App;
