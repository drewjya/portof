import React from 'react'
import Sidebar from '../Sidebar'

function Project() {
    return (
        <div className="flex">
            <Sidebar name='project'/>
            <div className="content">
                <div className="isi">
                    <div className="title">Project</div>
                </div>
            </div>
        </div>
    );
}

export default Project
