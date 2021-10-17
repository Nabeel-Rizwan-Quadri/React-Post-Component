import { useEffect } from "react";
import CustomPost from './component/Post';
import './App.css'
import avatar from "./ava.jpg"
import a from "./a.jpg"
import b from "./b.jpg"
import c from "./c.jpg"
import d from "./d.jpg"
import e from "./e.jpg"
import f from "./f.jpg"
import g from "./g.jpg"

function App() {

  

  const info = {
    createdBy: 'Nabeel Rizwan',
    avatars: avatar,
    description: "These would be excellent wallpaper images.",
    image: [a, b, c, d, e, f, g],
    createdAt: Date(),
    }
  
  return (
    <div className="body">
      <p>
        <CustomPost info={info}/>
      </p>
      
    </div>
  );
}

export default App;
