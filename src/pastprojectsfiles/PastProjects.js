import React, { useState, useEffect } from 'react';
// import './pastprojects.css';
// import aq from './aquasense_image.png'
// import yg from './yogaroller_image.png'
// import sh from './shoefreshner.png'
// import mg from './MouthPiece.png'
// import xy from './recordercoach.png'
// import pb from './Piano Buddy.png'


const PastProjects = () => {
    // const [activeProject] = useState('project1');

    // useEffect(() => {
    //     showProject(activeProject); // Display Project 1 content initially
    // }, [activeProject]);

    // const showProject = (projectId) => {
    //     document.querySelectorAll('.project-content').forEach((content) => {
    //         content.style.display = 'none';
    //     });
    //
    //     if (
    //         projectId.startsWith('project') &&
    //         !projectId.startsWith('project5') &&
    //         !projectId.startsWith('project6') &&
    //         !projectId.startsWith('project7')
    //     ) {
    //         document.getElementById('projectContent').style.display = 'block';
    //         document.getElementById('projectContent2').style.display = 'none';
    //     } else if (projectId.startsWith('project5')) {
    //         document.getElementById('projectContent').style.display = 'none';
    //         document.getElementById('projectContent2').style.display = 'block';
    //     } else if (projectId.startsWith('project6')) {
    //         document.getElementById('projectContent').style.display = 'none';
    //         document.getElementById('projectContent2').style.display = 'block';
    //     } else if (projectId.startsWith('project7')) {
    //         document.getElementById('projectContent').style.display = 'none';
    //         document.getElementById('projectContent2').style.display = 'block';
    //     } else if (projectId.startsWith('project8')) {
    //         document.getElementById('projectContent').style.display = 'none';
    //         document.getElementById('projectContent2').style.display = 'block';
    //     }
    //
    //     switch (projectId) {
    //         case 'project1':
    //             document.getElementById('projectTitle').innerText = 'Aqua Sense';
    //             document.getElementById('projectDescription').innerText =
    //                 'We created a Nalgene water bottle cap that tracks water intake and outputs to a webpage which allows the user to view past water intake habits; the goals of the project were to make a cheaper and more user-friendly water tracker with remote monitoring support.  The main technical focus of the project was integrating sensor readings into a local webpage via a Bluetooth server.';
    //             document.getElementById('projectImage').src = aq;
    //             break;
    //         case 'project2':
    //             document.getElementById('projectTitle').innerText = 'Yoga Mat Roller & Cleaner';
    //             document.getElementById('projectDescription').innerText =
    //                 'A device that automatically rolls a yoga mat & simultaneously uses UV light to clean the yoga mat.';
    //             document.getElementById('projectImage').src = yg;
    //             break;
    //         case 'project3':
    //             document.getElementById('projectTitle').innerText = 'Shoe and Clothing Deodorizer';
    //             document.getElementById('projectDescription').innerText = 'Quick and easy deodorizer';
    //             document.getElementById('projectImage').src = sh;
    //             break;
    //         case 'project5':
    //             document.getElementById('projectTitle2').innerText = 'Mouthpiece Mate';
    //             document.getElementById('projectDescription2').innerText =
    //                 'Using UV light to kill bacteria and creating an easy to use mechanism that sanitizes a mouthpiece with only the click of a button';
    //             document.getElementById('projectImage2').src = mg;
    //             break;
    //         case 'project6':
    //             document.getElementById('projectTitle2').innerText = 'Recorder Coach';
    //             document.getElementById('projectDescription2').innerText =
    //                 'An attachment to an instrument that will glow to indicate when and where to place your finger on your instrument';
    //             document.getElementById('projectImage2').src = xy;
    //             break;
    //         case 'project7':
    //             document.getElementById('projectTitle2').innerText = 'Piano Buddy';
    //             document.getElementById('projectDescription2').innerText = 'Self-sufficient piano tutor embedded into a piano';
    //             document.getElementById('projectImage2').src = pb;
    //             break;
    //         default:
    //             break;
    //     }
    // };

    return (
        <div>
            <h1 style={{ color: '#BF5813' }}>Past Projects</h1>

            {/* Spring 2023 Section */}
            <h2>Spring 2023</h2>
            <div id="projectButtons">
                {/*<button className="project-button" onClick={() => showProject('project1')}>*/}
                {/*    Project 1*/}
                {/*</button>*/}
                {/*<button className="project-button" onClick={() => showProject('project2')}>*/}
                {/*    Project 2*/}
                {/*</button>*/}
                {/*<button className="project-button" onClick={() => showProject('project3')}>*/}
                {/*    Project 3*/}
                {/*</button>*/}
            </div>

            <section id="projectContent" className="project-content">
                <h3 id="projectTitle">Project 1 Title</h3>
                <p id="projectDescription">Project 1 Description...</p>
                <div id="projectImageContainer">
                    <img id="projectImage" src={"project1_image.jpg"} alt="Project 1 Image" />
                </div>
            </section>

            {/*/!* Fall 2022 Section*!/*/}
            {/*<h2>Fall 2022</h2>*/}
            {/*<div id="projectButtons2">*/}
            {/*    <button className="project-button" onClick={() => showProject('project5')}>*/}
            {/*        Project 5*/}
            {/*    </button>*/}
            {/*    <button className="project-button" onClick={() => showProject('project6')}>*/}
            {/*        Project 6*/}
            {/*    </button>*/}
            {/*    <button className="project-button" onClick={() => showProject('project7')}>*/}
            {/*        Project 7*/}
            {/*    </button>*/}
            {/*</div>*/}

            <section id="projectContent2" className="project-content">
                <h3 id="projectTitle2">Project 5 Title</h3>
                <p id="projectDescription2">Project 5 Description...</p>
                <div id="projectImageContainer2">
                    <img id="projectImage2" src="project5_image.jpg" alt="Project 5 Image" />
                </div>
            </section>
        </div>
    );
};

export default PastProjects;