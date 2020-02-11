import React from 'react';
import './ChatSection3.scss';
import photo1 from '../../../../assets/photo1.jpg';
import photo2 from '../../../../assets/photo2.jpg';
import photo3 from '../../../../assets/photo3.jpg';


export default function ChatSection3() {
    return (
        <div className="section3">
            <p className="comments">Comments</p>
            <div className="commentFlex">
                <img src={photo1} alt='profile'></img>
                <p className="commentBox">Having a baby can be a nerve wracking experience for new parents – 
                    not the nine months of pregnancy.</p>
            </div>

            <div className="commentFlex">
                <img src={photo2} alt='profile'></img>
                <p className="commentBox">Having a baby can be a nerve wracking experience for new parents – 
                    not the nine months of pregnancy.</p>
            </div>

            <div className="commentFlex">
                <img src={photo3} alt='profile'></img>
                <p className="commentBox">Having a baby can be a nerve wracking experience for new parents – 
                    not the nine months of pregnancy.</p>
            </div>

            <div className="commentFlex">
                <img src={photo1} alt='profile'></img>
                <p className="commentBox">Having a baby can be a nerve wracking experience for new parents – 
                    not the nine months of pregnancy.</p>
            </div>

            <div className="commentFlex">
                <img src={photo2} alt='profile'></img>
                <p className="commentBox">Having a baby can be a nerve wracking experience for new parents – 
                    not the nine months of pregnancy.</p>
            </div>

            <div className="flex commentFlex commentFlexLast">
                <img src={photo3} alt='profile'></img>
                <div className="commentBox2">
                    <p>Write your comment....</p>
                    <i class="fab fa-telegram"></i>
                </div>
                
                
            </div>



        </div>
    )
}
