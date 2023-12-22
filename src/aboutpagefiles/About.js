import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Aboutpage.css';
import AboutCard from './AboutCard';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomDropdown from "./Dropdown"; // Add this line



function About() {
    const customColorStyle = { color: 'rgba(163, 96, 134, 1)', whiteSpace: 'nowrap' };
    return (
        <Container fluid className="about-container">
            <Row className="about-row">
                <Col xs={12} className="text-left about-heading about-heading-custom">
                    <h1>About</h1>
                </Col>
                <Row className="about-image-row">
                    <Col xs={12} className="text-center about-image-container">
                        <img src={process.env.PUBLIC_URL + '/teams1.png'} alt="Team" className="about-image" />
                    </Col>
                </Row>
                <Row className="about-text-row">
                    <Col xs={12} className="text-center">
                        <p className="about-text">
                            Forge is a diverse, user-centric development community that teaches product development and entrepreneurial skills to students interested in tech.
                        </p>
                    </Col>
                </Row>
                <Row className="about-subheading-row">
                    <Col xs={12} className="text-left about-subheading">
                        <p>We strive to be...</p>
                    </Col>
                </Row>
                <Row className="justify-content-center about-card-row">
                    <Col xs={12} className="about-card-container">
                        <AboutCard imageUrl={process.env.PUBLIC_URL + '/diverse.png'} />
                        <AboutCard imageUrl={process.env.PUBLIC_URL + '/collaborate.png'} />
                        <AboutCard imageUrl={process.env.PUBLIC_URL + '/passion.png'} />
                    </Col>
                </Row>
                <Row className="about-text-row">
                    <Col xs={12} className="text-center">
                        <p className="about-text">
                            Forge is a community open to anyone interested in learning product development & entrepreneurial skills in tech, regardless of prior experience.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center dropdown-container-wrapper">
                        {/* Use your CustomDropdown component instead of Bootstrap's Dropdown */}
                        <CustomDropdown
                            labelText="Why?"
                            expandedContent={
                                <>
                                    <p>
                                        As engineers and entrepreneurs, we must recognize that we are in fields that are not traditionally diverse, equitable, and inclusive. In order to successfully provide entrepreneurial education to students, we must identify roadblocks and actively work to overcome them. These include, but are not limited to:
                                    </p>
                                    <p> </p>
                                    <ul>
                                        <li>Lack of representation within organizations, leadership, and in programming</li>
                                        <li>No effort made to ensure recruitment reaches various communities</li>
                                        <li>Lack of support & available resources for members within the organization</li>
                                        <li>No effort made to collect feedback from members of an organization</li>
                                    </ul>
                                </>
                            }
                        />
                    </Col>
                </Row>
                {/*<div style = {{"height": "180px", "width": "100%"}}></div>*/}
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center dropdown-container-wrapper">
                        {/* Use your CustomDropdown component instead of Bootstrap's Dropdown */}
                        <CustomDropdown
                            labelText="What?"
                            expandedContent={
                                <>
                                    <p>
                                        By defining what DE&I in an organization truly means and facing the challenges needed to be overcome, we are better educated and equipped to develop an increasingly open, welcoming, and equal community. We aim to:
                                    </p>
                                    <p> </p>
                                    <ul>
                                        <li><span style={{ color: 'rgba(163, 96, 134, 1)' }}>Build</span> a welcoming community that embraces and respects our differences</li>
                                        <li><span style={{ color: 'rgba(163, 96, 134, 1)' }}>Foster</span> an environment where every individual or group feels welcomed, respected, supported, and valued to fully participate and succeed</li>
                                        <li><span style={{ color: 'rgba(163, 96, 134, 1)' }}>Recognize</span> that everyone starts at different levels, and commit to being a place where learning & leadership development opportunities are open to all</li>
                                        <li><span style={{ color: 'rgba(163, 96, 134, 1)' }}>Identify</span> barriers & provide necessary opportunities for equal opportunity in our organization</li>
                                        <li><span style={{ color: 'rgba(163, 96, 134, 1)' }}>Work</span> to address, understand, and mitigate our unconscious biases</li>
                                    </ul>
                                </>
                            }

                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center dropdown-container-wrapper">
                        {/* Use your CustomDropdown component instead of Bootstrap's Dropdown */}
                        <CustomDropdown
                            labelText="How?"
                            expandedContent={
                                <>
                                    <p>
                                        To achieve our aims, Forge will:
                                    </p>
                                    <p> </p>
                                    <ol>
                                        <li>Allow anyone to apply to our roles, enacting no major restrictions in our applications</li>
                                        <li>Actively recruit in all spaces across Northeastern</li>
                                        <li>Not require previous experience for any management, support, or product lab roles</li>
                                        <li>Provide equal opportunities for learning & growth for all applicants, members, & leaders</li>
                                        <li>Implement an effective system for anonymous feedback and problem-solving</li>
                                        <li>Encourage and build participation in the Sherman Center and its events</li>
                                        <li>Highlight this vision to all Forge members and be adaptive in our vision as we continue to educate ourselves and improve</li>
                                    </ol>
                                </>
                            }

                        />
                    </Col>
                </Row>
                <Row className="about-subheading2-row">
                    <Col xs={12} className="text-left about-subheading2" style={{ margin: '2% 0 2% 160px' }}>
                        <p>Our Pledge</p>
                    </Col>
                </Row>
                <Row className="about-text-row">
                    <Col xs={12} lg = {12} className="text-left">
                        <p className="more-text">
                            <div>
                                <span style={customColorStyle}>We value&nbsp;</span>every individual and the visible and invisible qualities that make them who they are.
                            </div>
                        </p>
                        <p className="more-text">
                            <div>
                                <span style={customColorStyle}>We believe&nbsp;</span>that every member deserves equal access to resources and opportunities.
                            </div>
                        </p>
                        <p className="more-text" >
                            <div>
                                <span style={customColorStyle}>We strive&nbsp;</span>to link people together and help them feel that they can not only understand each other, but rejoice in one another.
                            </div>
                        </p>
                        <p className="more-text">
                            <div>
                                <span style={customColorStyle}>We commit&nbsp;</span>to cultivating and advancing a culture of diversity, equity, and inclusion in our daily lives, for every person in every community.
                            </div>

                        </p>
                        <p className="more-text">
                            <div>
                                <span style={customColorStyle}>We understand&nbsp;</span>
                                that there is always room for improvement, and pledge to actively assess and build upon our community & culture.
                            </div>
                        </p>

                    </Col>

                </Row>
            </Row>
        </Container>
    );
}

export default About;