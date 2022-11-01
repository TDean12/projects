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
          {/* jijig group */}
          <div className="small"></div>
          {/* jijig group */}
          <div className="notf"></div>
          <div className="date"></div>
          <div className="big"></div>
        </div>
      </div>
      <div className="background3">
        <div className="group7">
          <div className="big2"></div>
          <div className="small2"></div>
          <div className="small3"></div>
        </div> 
        <div className="group8">
          <div className="text17"></div>
          <div className="text18"></div>
          <div className="link2">Learn more</div>
        </div>
      </div>
      <div className="group9">
        <div className="group10">
          <div className="text19"></div>
          <div className="text20"></div>
          <div className="link3">Learn more</div>
        </div>
        <div className="group11">
          <div className="big3"></div>
          <div className="small4"></div>
        </div>
      </div>
      <div className="group12">
        <div className="text21">What people say about us</div>
        <div className="group13">
          <div className="scroll1"></div>
          <div className="scroll2"></div>
          <div className="scroll3"></div>
          <div className="scroll4"></div>
        </div>
        <div className="buttongroup">
          <div className="button3"></div>
          <div className="button4"></div>
        </div>
      </div>
      <div className="group14"></div>
    </div>
  );
}

export default App;
