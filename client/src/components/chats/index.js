import React from 'react';
import '../../css/chats.css'
import chats from '../../data'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SideNav, Textarea, Modal, Switch, Chip, CollectionItem, Icon, Collection, TextInput, NavItem, Navbar, Col, SideNavItem, Button, Row } from 'react-materialize'

export default class ChatContainer extends React.Component {
    render() {
        return (
            <div className="container" style={{backgroundColor: 'white', marginTop:'20px'}}>
                <Row>
                    <Col m={1} style={{ marginTop: '1.2em' }}>
                        <SideNav trigger={<Button icon='menu' />} options={{ closeOnClick: true }}>
                            <SideNavItem userView user={{
                                background: 'https://placeimg.com/640/480/tech',
                                image: 'https://materializecss.com/images/yuna.jpg',
                                name: 'John Doe',
                                email: 'example@gmail.com'
                            }} />
                            <SideNavItem href="#!icon" >
                                <Switch offLabel="Light theme" onLabel="Dark theme" />
                            </SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>
                                Change password
                            </SideNavItem>
                            <SideNavItem waves href="#!third">
                                <TextInput password label="Old password" />
                            </SideNavItem><br />
                            <SideNavItem waves href="#!third">
                                <TextInput password label="New password" />
                            </SideNavItem><br />
                            <SideNavItem waves href="#!third">
                                <TextInput password label="Repeat new password" />
                            </SideNavItem><br />
                            <SideNavItem waves href="#!third">
                                <Button className="teal">Submit</Button>
                            </SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>
                                Change name
                            </SideNavItem>
                            <SideNavItem waves href="#!third">
                                <TextInput password label="New name" />
                            </SideNavItem><br />
                            <SideNavItem waves href="#!third">
                                <Button className="teal">Submit</Button>
                            </SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>
                                Change profile picture
                            </SideNavItem>
                            <SideNavItem waves href="#!third">
                                <Button icon='cloud_upload'></Button>
                            </SideNavItem><br />
                            
                        </SideNav>
                    </Col>
                    <Col m={2} style={{height: '70px', borderRight: 'black solid 1px'}}>
                        <TextInput style={{  marginTop: '0.5em', marginLeft:'-40px', width:'200px' }} placeholder="Search..." m="12"/>
                    </Col>
                    <Col m={1} style={{ borderBottom: 'black solid 1px'}}>
                        <img src="https://www.countryflags.io/be/shiny/64.png" />
                    </Col>
                    <Col m={2} style={{borderBottom: 'black solid 1px'}}>
                        <p className="main-text">Julia</p>
                        <p className="gray-text">last seen yesterday at 15:43</p>
                    </Col>
                    <Col m={6} style={{ textAlign: 'right', borderBottom: 'black solid 1px',}}>
                        <Modal header="Modal Header" fixedFooter trigger={
                            <Button waves="light" className='teal' style={{marginTop:'13px', marginBottom:'20px', marginRight:'10px'}}>
                                FIND NEW FRIEND
                            </Button>
                        }>
                            
                        </Modal>
                        <Button waves="light" className='red darken-1' style={{marginTop:'13px', marginBottom:'20px'}}>
                            BLOCK
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col m={3} style={{height: '100%'}}>
                        <div className="сhats-container">
                            <Collection>
                                <CollectionItem className="avatar">
                                    <img src="https://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                                    <span className="title main-text">
                                        Anna
                                    </span>
                                    <p>
                                        
                                        <br />
                                        <span className="new-msg-text">So what do you thi...</span>
                                    </p>
                                    <p className="secondary-content" style={{ marginTop: '-0.7em'}}>
                                        <span className="gray-text" style={{marginRight: '-9px'}}>14:43</span>
                                    </p>
                                    <p className="secondary-content">
                                        <Chip className="teal msg-props">
                                            <span className="msg-count">4</span>
                                        </Chip>
                                    </p>
                                    
                                </CollectionItem>

                                <CollectionItem className="avatar">
                                    <img src="https://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                                    <span className="title main-text">
                                        Julia
                                    </span>
                                    <p>
                                        <br />
                                        <span className="new-msg-text">You: </span><span className="def-msg-text">What's up?</span>
                                    </p>

                                    <p className="secondary-content" style={{ marginTop: '-0.7em'}}>
                                        <span className="gray-text" style={{marginRight: '-9px'}}>14:43</span>
                                    </p>
                                    <p className="secondary-content">
                                        <Icon className="msg-props">
                                            done_all
                                        </Icon>
                                    </p>
                                </CollectionItem>

                                <CollectionItem className="avatar teal">
                                    <img src="https://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                                    <span className="title main-text" style={{color:'white'}}>
                                        Elizabeth
                                    </span>
                                    <p >
                                        <br />
                                        <span className="new-msg-text" style={{color:'white'}}>You: </span><span  className="def-msg-text" style={{color:'white'}}>What's up?</span>
                                    </p>

                                    <p className="secondary-content" style={{marginTop: '-0.7em'}}>
                                        <span className="gray-text" style={{marginRight: '-9px', color: 'white'}}>14:43</span>
                                    </p>
                                    <p className="secondary-content" style={{color:'white'}}>
                                        <Icon className="msg-props" >
                                            done
                                        </Icon>
                                    </p>
                                </CollectionItem>
                            </Collection>
                        </div>
                    </Col>
                    <Col m={9} >
                        <div className='messages-container'>
                            <div className='message-box'>
                                <div className='msg-date'>
                                    <Chip>May 24</Chip>
                                </div>
                                <div class="mine messages">
                                    <div class="message last">
                                        <span style={{marginRight: '40px'}}>Dude</span>
                                        <span className="msg-time mine">12:21</span>
                                    </div>
                                </div>
                                <div class="yours messages">
                                    <div class="message">
                                        <span style={{marginRight: '40px'}}>Hey!</span>
                                        <span className="msg-time yours">12:21</span>
                                    </div>
                                    <div class="message">
                                        <span style={{marginRight: '40px'}}>You there?</span>
                                        <span className="msg-time yours">12:21</span>
                                    </div>
                                    <div class="message last">
                                        <span style={{marginRight: '40px'}}>Hello, how's it going?</span>
                                        <span className="msg-time yours">12:21</span>
                                    </div>
                                </div>
                                <div class="mine messages">
                                    <div class="message">
                                        <span style={{marginRight: '40px'}}>Great thanks!</span>
                                        <span className="msg-time mine">12:21</span>
                                    </div> 
                                    <div class="message last">
                                        <span style={{marginRight: '40px'}}>How about you?</span>
                                        <span className="msg-time mine">12:21</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col m={8} offset="m3">
                        <Textarea style={{width:'800px'}}
                            icon={
                                <Button flat waves="light">
                                    <Icon>
                                        attach_file
                                    </Icon>
                                </Button>
                            }
                            placeholder="Write a message..." 
                            m={12} 
                        />
                    </Col>
                    <Col m={1} style={{textAlign:'right', marginTop:'10px'}}>
                        <Button flat style={{color: 'teal'}} waves="light">
                            <Icon>
                                send
                            </Icon>
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}