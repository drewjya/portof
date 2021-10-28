import React from 'react';
import {BsInstagram, BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs';

function Link(props) {
    if(props.name==='wa'){
        return (<a target="_blank" className="text-green-500" href="https://wa.me/628516944890"><ContactIcon icon={<BsWhatsapp size="68"/>}/></a>);
    } else if(props.name==='github'){
        return (<a target="_blank" className="text-gray-700" href="https://github.com/drewjya"><ContactIcon icon={<BsGithub size="68"/>}/></a>);
    }else if(props.name==='linked'){
        return (<a target="_blank" className="text-blue-800" href="https://id.linkedin.com/in/andre-wijaya-a22a5620b?trk=people-guest_people_search-card"><ContactIcon icon={<BsLinkedin size="68"/>}/></a>);
    }else if(props.name==='ig'){
        return (
        <a className="text-white" target="_blank" href="https://www.instagram.com/drewjya/">
            <BsInstagram className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl"  size="68"/>
        </a>);
    }
}

function ContactIcon({icon}) {
    return(
        <div class="icon">{icon}</div>
    );
}

export default Link
