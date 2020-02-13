import React from 'react';
import './Chatbody.scss';
import twitter from '../../assets/social-icon.svg';
import whatsapp from '../../assets/whatsapp.svg';
import apple from '../../assets/apple.svg';
import attachment from '../../assets/attachment.svg'

import ChatSection2 from './chatSections/chatSection2/chatSection2';



export default function Chatbody() {
    return ( 
        <div className="section">
       
            <h2>Conversation</h2>
            <div className="sectionFlex">
                <section className="section1">
                    <div className="borderLine">
                        <ul>
                            <li>Open</li>
                            <li>Archived</li>
                            <li>Snooze</li>
                            <li>Trash</li>
                        </ul> 
                    </div>

                    <div className="borderLine borderDent">
                        <div className="chatFlex">
                            <img src={twitter} alt="twitter"/>
                            <h4>Zarela Reed</h4>
                            <p>19hrs</p>
                        </div>
                        <div className="chatContent">
                            <div>
                               <h5>Used Electronic Test Equipment Not Wor…</h5> 
                               <span>2</span>
                            </div>
                            <p>Hello guys, I have been unable to make use of</p>
                        </div>
                    </div>
                    <div className="borderLine borderDent">
                        <div className="chatFlex">
                            <i class="fab fa-facebook-messenger"></i>
                            <h4>Ava Gregoraci</h4>
                            <p>23hrs</p>
                        </div>
                        <div className="chatContent">
                            <div>
                               <h5>Used Electronic Test Equipment Not Wor…</h5> 
                               <img src={attachment} alt="twitter"/>
                            </div>
                            <p>Hello guys, I have been unable to make use of</p>
                        </div>
                    </div><div className="borderLine borderDent">
                        <div className="chatFlex">
                            <i class="fab fa-telegram"></i>
                            <h4>Iruka Akuchi</h4>
                            <p>Jan 1</p>
                        </div>
                        <div className="chatContent">
                            <div>
                               <h5>Used Electronic Test Equipment Not Wor…</h5> 
                               <img src={attachment} alt="twitter"/>
                            </div>
                            <p>Hello guys, I have been unable to make use of</p>
                        </div>
                    </div><div className="borderLine borderDent">
                        <div className="chatFlex">
                            <img src={whatsapp} alt="twitter"/>  
                            <h4>Charles Davies</h4>
                            <p>Jan 1</p>
                        </div>
                        <div className="chatContent">
                            <h5>Used Electronic Test Equipment Not Wor…</h5>
                            <p>Hello guys, I have been unable to make use of</p>
                        </div>
                    </div><div className="borderLine borderDent pad">
                        <div className="chatFlex">
                            <img src={apple} alt="twitter"/>  
                            <h4>Kari Granleese</h4>
                            <p>Jan 1</p>
                        </div>
                        <div className="chatContent">
                            <h5>Used Electronic Test Equipment Not Wor…</h5> 
                            <p>Hello guys, I have been unable to make use of</p>
                        </div>
                    </div>
                   
                </section>


                    
                    <ChatSection2/>
            
            </div>
          
        </div>
    )
}

