import React from 'react';
import './chatSection2.scss';
import time from '../../../../assets/time.svg';
import delet from '../../../../assets/delete.svg';
import edit from '../../../../assets/edit.svg';
import more from '../../../../assets/more.svg';
import reply from '../../../../assets/reply.svg';
import attachment from '../../../../assets/attachment.svg';
import ChatSection3 from '../chatSection3/ChatSection3';
import photo1 from '../../../../assets/photo1.jpg';
import photo2 from '../../../../assets/photo2.jpg';
import photo3 from '../../../../assets/photo3.jpg';




export default function chatSection2() {
    return (
        <div className="section2">
            <div className="borderLine flex flexSpace">
                <ul className="borUl">
                    <li><img src={time} alt="time"/></li>
                    <li><img src={delet} alt="delete"/></li>
                    <li><img src={edit} alt="edit"/></li>
                    <li><img src={more} alt="more"/></li>
                </ul> 
                <div className="userCircle flex">
                    <h5>
                        <img src={photo1} alt="time"/>
                        <img src={photo2} alt="time"/>
                        <img src={photo3} alt="time"/>
                    </h5>
                    <p>Assign</p>
                    <i class="fas fa-user-circle"></i>
                </div>
            </div>
            

            <div className="flextry2">
                <div className="borRight">
                    <p className="par parbold">WhatsApp for Business: Don't forget to start your free trial</p>
                    <div className="section2Flex">
                        <h6>Zarela Reed</h6>
                        <div className="replyFlex">
                            <img src={reply} alt="more"/>
                            <h6>Reply this conversation</h6>
                        </div>
                    </div>
                    <div className="box">
                        <p className="par">Having a baby can be a nerve wracking experience for new parents – not the nine 
                            months of pregnancy, I’m talking about after the infant is brought home from the hospital. 
                            It’s always the same thing, by the time they have their third child they have it all 
                            figured out, but with number one it’s a learning thing.
                        </p>
                    </div>
                    <span className="flex timeCheck">
                        <h6>12:59 PM</h6>
                    </span>

                    <div className="section2Flex">
                        <h6>Collins Iheagwara</h6>
                        <div className="replyFlex">
                        </div>
                    </div>
                    <div className="box">
                        <p className="purpleBox par">Having a baby can be a nerve wracking experience for new parents – not the nine 
                            months of pregnancy, I’m talking about after the infant is brought home from the hospital. 
                            It’s always the same thing, by the time they have their third child they have it all 
                            figured out, but with number one it’s a learning thing.
                        </p>
                    </div>
                    <span className="flex timeCheck">
                        <h6>12:59 PM</h6>
                        <i class="fa fa-check-double"></i>
                    </span>

                    <div className="section2Flex">
                        <h6>Collins Iheagwara</h6>
                        <div className="replyFlex">
                        </div>
                    </div>
                    <div className="box">
                        <p className="purpleBox par">Having a baby can be a nerve wracking experience for new parents – not the nine 
                            months of pregnancy, I’m talking about after the infant is brought home from the hospital. 
                            It’s always the same thing, by the time they have their third child they have it all 
                            figured out, but with number one it’s a learning thing.
                        </p>
                    </div>
                    <span className="flex timeCheck">
                        <h6>02:00 PM</h6>
                        <i class="fa fa-check-double"></i>
                    </span>

                    {/* texbox  */}
                    <div className="textbox">
                        <h5>Type a message...</h5>
                        <img src={attachment} alt="more"/>

                    </div>
                </div>
                <div>
                    <ChatSection3/> 
                </div>
            </div>
        </div>
    )
}
