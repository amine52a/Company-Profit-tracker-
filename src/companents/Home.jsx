import Sidebar from "./Sidebar"
import './Home.css'
import Navbar from "./Navbar"
import Contain from './Contain/Contain'
import Middle from "./Contain/Middle"
export default function Home() {
  return (
    <>
    <div className="home">
    <Sidebar/>
    <div className="Body">     
      <Navbar/>
         <div className="contenu">
<Contain type="user" />
<Contain type="order"/>
<Contain type="earning"/>
<Contain type="balance"/>


         </div>
         <div className="mp">
         <Middle/>
         </div>
    </div>
    </div>
    </>
  )
}
