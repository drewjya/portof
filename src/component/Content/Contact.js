import React from 'react'
import Sidebar from '../Sidebar'
import Hero from '../Hero'
import Bottom from '../Bottom';

function Contact() {
    return (
        <div className="flex">
        <Sidebar name='contact'/>
        <div className="isi">
            <div className="content">
                <div className="title">Contact</div>
                <div className="body">
                    <Hero/>
                    <div className="data-t">Hello I'm</div>
                    <div className="data-b">Andre Wijaya</div>
                    <div className="paragraf">I'm currently a student at Binus University
                    and currently majoring as a Cyber Security Student. <br /> I am interested in a lot of things such as Web Development, Mobile Development, Multi-Platform App Development, Cyber Security, etc.</div>
                </div>
            </div>
            <Bottom/>
        </div>
    </div>
    );
}

export default Contact

