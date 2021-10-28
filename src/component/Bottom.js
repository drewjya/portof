import React from 'react';
import {SiReact, SiTailwindcss} from 'react-icons/si';

function Bottom() {
    return (
        <div className="bottom">
            <div className="flex flex-row justify-center gap-3">  
                <div>This website was created using React.js </div>
                <SiReact size="20"/>
                <div>and Tailwind Css</div>
                <SiTailwindcss size="20"/>
            </div>
        </div>
    )
}

export default Bottom
