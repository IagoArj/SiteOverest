import React, { Component } from 'react';
import './projects.css';
import ProjectBox from './projectBox/ProjectBox';
export default class Projects extends Component {
    render() {
        return (
            <div>
                <h2 className='project-text'>Projetos</h2>
                <div className='vertical-flex project'>
                    <div className="horizontal-flex justify-center">
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                    </div>
                    <div className="horizontal-flex justify-center">
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                        <ProjectBox></ProjectBox>
                    </div>
                </div>
            </div>
        )
    }
}
