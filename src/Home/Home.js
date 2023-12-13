import React from 'react'
import './Home.css';
import { Outlet, Link } from 'react-router-dom'
// import JUNGLE from './Jungle.jpg'
import HTMLLOGO from './HTMLLOGO.png'
import CSSLOGO from './CSSLOGO.png'
import JAVASCRIPTLOGO from './JAVASCRIPTLOGO.png'
import REACTLOGO from './react_logo.png'

const Home = () => {
    return (
        <div className='Home_Page'>
            <div>
                <div className='container1'>
                </div>
                {/* <br /> */}
                <div className='container2'>
                    <div className='REACTLOGO'>
                        <img src={REACTLOGO} alt="" />
                    </div>
                    <div className='Info'>
                        <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components.
                            It is maintained by Meta and a community of individual developers and companies.
                            React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
                        </p>
                    </div>
                </div>
                <br />
                <div className='container3'>
                    <div className="card1">
                        <div className="htmlogo"></div>
                        <div className="">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                            It defines the meaning and structure of web content.
                        </div>
                    </div>
                    <div className="card2">
                        <div className="csslogo"></div>
                        <div className="">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                            It defines the meaning and structure of web content.</div>
                    </div>
                    <div className="card3">
                        <div className="javascriptlogo"></div>
                        <div className="">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web,
                            alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries
                        </div>
                    
                    </div>
                    <div className="card4">
                        <div className="javascriptlogo"></div>
                        <div className="">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web,
                            alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home