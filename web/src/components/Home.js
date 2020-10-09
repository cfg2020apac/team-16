import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Button, Menu, Breadcrumb } from "antd";
import "./home.css"

export const Home = () => {
    return (
        // <div className="justify-content-center">
        //     <h3>Welcome,</h3>
        //     <h1>Admin</h1>
        //     <h1>Programs</h1>
        //     <Button type="primary" shape="round" size={33} >Events</Button>
        //     <Button type="primary" shape="round" size={33} >Progress Review</Button>
        //     <Button type="primary" shape="round" size={33} >Submissions</Button>
        //     <h1>Volunteers</h1>
        //     <Button type="primary" shape="round" size={33} >Applicants</Button>
        //     <Button type="primary" shape="round" size={33} >Participants</Button>
        //     <h1>Students</h1>
        // </div>

        <div>
            <div class="wrapper">
                <div class="Container">
                    <div class="nav">
                        <div class="logo">
                            Welcome, Admin
            </div>
                        <div class="ngo">
                            JA Hong Kong
                        </div>
                    </div>
                    <div class="header">
                        <h1>Programs</h1>
                        <button type="button">Events</button>
                        <button type="button">Progress Review</button>
                        <button type="button">Submissions</button>
                    </div>
                    <div class="header">
                        <h1>Volunteers</h1>
                        <button type="button">Applicants</button>
                        <button type="button">Participants</button>
                    </div>
                    <div class="header">
                        <h1>Students</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}