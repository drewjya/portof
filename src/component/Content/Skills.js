import React from 'react';
import Sidebar from '../Sidebar';
import Bottom from '../Bottom';
import {SiFlutter, SiReact, SiTailwindcss, SiCss3, SiHtml5, SiJavascript, SiDart, SiPython} from 'react-icons/si'

function Skills() {
    return (
        <div className="flex">
        <Sidebar name='skills'/>
        <div className="isi">
            <div className="content">
                <div className="title">Skills</div>
                <div className="body">                    
                    <div className="paragraf">I have sufficient abilities in Web Development and Multi-platform Development. This is some of the framework and languages that i can use for coding:</div>
                    <table className="table-fixed border-collapse mx-auto my-10">
                        <thead>
                            <tr>
                                <th className="w-56">Name</th>
                                <th className=" w-32">Logo</th>
                                <th className="w-32">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">Flutter</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiFlutter className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3.5/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">React Js</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiReact className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">4/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">Tailwind Css</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiTailwindcss className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">Python</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiPython className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">HTML</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiHtml5 className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3.5/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">CSS</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiCss3 className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3.5/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">JavaScript</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiJavascript className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3/5</td>
                            </tr>
                            <tr>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">Dart</td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center"><SiDart className="mx-auto" size="20"/></td>
                                <td className="border-2 dark:border-gray-200 border-gray-900 text-center">3.5/5</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <Bottom/>
        </div>
    </div>
    );
}

export default Skills
