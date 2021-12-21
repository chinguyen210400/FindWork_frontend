import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Talent_Modal.css";

function Talent_Modal(props) {
    return (
        <div className="talent_modalBackground">
        <div className="talent_modalContainer"  role='dialog'>
        <div className="talent_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div class="box-cv-wrapper">
        <div class="box-sidebar">
            <div class="avatar">
                <img src="img/avatar.png" alt="" />
            </div>
            <div class="userinfo">
                <div class="username">Chi Nguyen</div>
                <div class="post">Frontend Developer</div>
            </div>
            <div class="contact-info">
                <div class="item">
                    +84.91 111 8683
                </div>
                <div class="item">
                    nguyenyenchi@gmail.com
                </div>
                <div class="item">
                    Ha Noi, Viet Nam
                </div>
            </div>
            <div class="box">
                <div class="main-title">Skills</div>
                <ul class="list">
                    <li>HTML and CSS</li>
                    <li>Scripting language: Javascript, Typescript, Python, Java</li>
                    <li>Framework/Library: Django, React, Next, Bootstrap, TailwindCSS, etc</li>
                    <li>Understanding UI Design; Visual Hierarchy, Design System, etc</li>
                </ul>
            </div>
            <div class="box">
                <div class="main-title">Rating</div>
                <div class="flex-box honor">
                    <div class="text"></div>
                    <div class="date"></div>
                </div>
            </div>
            <div class="box">
                <div class="main-title">Honor & Award</div>
                <div class="flex-box honor">
                    <div class="text">Best Graduated</div>
                    <div class="date">2019</div>
                </div>
                <div class="desc">Included in one of the award recipients of the best graduate students in the IV graduation period of UPN “Veteran”
                Yogyakarta</div>
            </div>
        </div>
        <div class="box-content">

            <div class="box">
                <div class="main-title">Education</div>
                <div class="flex-box -education">
                    <div class="date">2015 - 2019</div>
                    <div class="content">
                        <div class="pos">Informtics, Universitas Pembangunan Nasional ”Veteran” Yogyakarta</div>
                        <div class="name">Bachelor of Computer Science, Artificial Intelligence</div>
                        <div class="main-desc">
                            I graduated in July 2019 with a GPA of 3.63. One of the award recipients for the best graduate of the university at the
                            time. In my thesis, I looked into how Natural Language Processing (NLP) was used in Telegram Bot. For the NLP approach
                            method, I used Neural Network (Deep Learning) and Text Mining.
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-title">Experience</div>
            <div class="box">
                <div class="flex-box -exp">
                    <div class="content">
                        <div class="name-company">Upwork</div>
                        <div class="pos">Frontend Developer | Nov 2019 - present</div>
                        <div class="main-desc">
                            Upwork is an American freelancing platform where enterprises and individuals connect in order to conduct business. I am
                            currently accepting remote or freelance Web Development and UI Design work from this platform.
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="flex-box -exp">
                    <div class="content">
                        <div class="name-company">Currinda Pty. Ltd.</div>
                        <div class="pos">UI Engineer | Oct 2020 - Aug 2021</div>
                        <div class="main-desc">
                            I am a member of the Engineer Team, along with three other people. I am in charge of creating an interface design that
                            is both user-friendly and consistent with the company's brand. I also assist the team with frontend development,
                            particularly in the creation of design systems and UI components with React.
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="flex-box -exp">
                    <div class="content">
                        <div class="name-company">Bubays Pte. Ltd.</div>
                        <div class="pos">Web Developer | May 2019 - Nov 2019</div>
                        <div class="main-desc">
                            I am in charge of the company website's full-stack development and maintenance. The job entails creating and maintaining
                            a website from the ground up. In addition, I am the only Web Developer in this company.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
    );
}

export default Talent_Modal; 