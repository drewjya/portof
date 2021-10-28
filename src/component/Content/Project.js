import React from 'react';
import Sidebar from '../Sidebar';
import Hero from '../Hero';
import Bottom from '../Bottom';

function Project() {
    return (
        <div className="flex">
            <Sidebar name='project'/>
            <div className="isi">
                <div className="content">
                    <div className="title">Project</div>
                    <div className="body">
                        <p className="paragraf-list">This is the list of my project : </p>
                        <ul className="list-outside list-decimal">
                            <li>FoodU</li>
                            <p className="paragraf-list">FoodU is a mobile based application made by my group which consists of me and my other friends. I coded this application using Flutter framework with Firebase as the backend. Here is the source code : <a href="https://github.com/drewjya/foodu">FoodU</a> </p>
                            <li>Portofolio</li>
                            <p className="paragraf-list">I consider this website as one of my little project because this is my first time using React Js with Tailwind Css</p>
                            <li>Chat Room for Client and Server in Python</li>
                            <p className="paragraf-list">This is one of the assignment that is given by the lecturer in this Semester. This project is coded by using Python</p>
                            <li>Flutter Course by Sanber Academy</li>
                            <p className="paragraf-list">This is all of my work when i take a Flutter Course at Sanber Academy. Here is the link : <a href="https://gitlab.com/drewjya/bootcampflutter">Here</a></p>
                            <li>Simple Backend in Python</li>
                            <p className="paragraf-list">This is one of the first backend that I made for the first time. I build it by using Python with flask framework. Here is the link : <a href="https://github.com/drewjya/backend">Here</a></p>
                        </ul>
                    </div>
                </div>
                <Bottom/>
            </div>
        </div>
    );
}

export default Project
