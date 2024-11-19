import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context'; 
import './sidebar.css';
import { assets } from '../../assets/assets';

const SideBar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="menu_icon" />
                <div onClick={() => newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt="plus_icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item) } className='recent-entry'>
                                    <img src={assets.message_icon} alt="message_icon" />
                                    <p> {item.slice(0,20)} ... </p>
                                </div>
                            )
                        })}

                    </div>
                    : null}
            </div>
            <div className="sidebar-bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="history_icon" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting_icon" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default SideBar;