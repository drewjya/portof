import React from 'react'
import Sidebar from '../Sidebar'
import Bottom from '../Bottom';
import Link from '../Link';

function Contact() {
    return (
        <div className="flex">
        <Sidebar name='contact'/>
        <div className="isi">
            <div className="content">
                <div className="title">Contact</div>
                <div className="body">
                    <div className="paragraf-list">
                        You can contact me here:
                        <ul>
                            <li className="contact-link"><Link name={"wa"}/></li>
                            <li className="contact-link"><Link name={"github"}/></li>
                            <li className="contact-link"><Link name={"linked"}/></li>
                            <li className="contact-link"><Link name={"ig"}/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Bottom/>
        </div>
    </div>
    );
}

export default Contact

