import "./App.css";
import { Text1 } from "./svg/text1";
import { Text2} from "./svg/text2";

function App() {
  return (
    <div className="container">
      <div className="background" >
        <div className="group1">
          {/* text iconuud */}
          <div>
          <Text1 className='text1'/>
          </div>
          <div className="group2">
            <Text2 className="text2"/>
            <div className="text3">Services</div>
            <div className="text4">Contact</div>
            <div className="text5">log in</div>
            <button className="button1">Get Access</button>
          </div>
        </div>
        <div className="group3">
          <div className="grp1">
            <div className="text6">Instant collaborations</div>
            <div className="text7">for remote teams</div>
          </div>
          <div className="grp2">
            <div className="text8">All in one for you remote team chats,</div>
            <div className="text9">collaboration and track project</div>
          </div>
        </div>
        <div className="group4">
          <input className="input" placeholder="Email"></input>
          <button className="button2">Get early access</button>
        </div>
      </div>
      <div className="background2">
        <div className="group5">
          <div className="grp3">
            <div className="text10">Your hub for</div>
            <div className="text11">teamwork</div>
          </div>
          <div className="grp4">
            <div className="text12">Give everyone you work with-inside and outside your</div>
            <div className="text13">company--a more productive way to stay in sync.</div>
            <div className="text14">Respond faster with emoji, keep conversations focused</div>
            <div className="text15">in channels, and simplify all your communication into </div>
            <div className="text16">one place.</div>
          </div>
          <div className="link1">Learn more</div>
        </div>
        <div className="group6">
          <div className="small"></div>
          <div className="big"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
