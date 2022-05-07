import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions} from 'react-redux-form';
import { postFeedback } from '../Redux/actionCreators'
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Invite extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    
    handleSubmit(values){
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Invite</BreadcrumbItem>
                        </Breadcrumb>
                    
                   
                        <div className="btn-group mr-" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12">
                        <h3>Create your invite</h3>
                    </div>
                    <div className="col-12 col-md9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="invitetitle" md={2}>Invite Title</Label>
                                <Col md={10}>
                                    <Control.text model=".invitetitle" type="text" id="invitetitle" name="invitetitle"
                                        placeholder="Invite Title"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                       />
                                    <Errors 
                                        className="text-danger"
                                        model=".invitetitle"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 hcaracters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="eventdate" md={1}>Event Date</Label>
                                <Col md={5}>
                                    <Control.text model=".eventdate" type="date" id="lasttname" name="eventdate"
                                        placeholder="Event Date"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                         <Errors 
                                        className="text-danger"
                                        model=".eventdate"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 hcaracters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            
                          
                                <Label htmlFor="eventdate" md={1}>Event Date</Label>
                                <Col md={5}>
                                    <Control.text model=".eventdate" type="time" id="lasttname" name="eventdate"
                                        placeholder="Event Date"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                         <Errors 
                                        className="text-danger"
                                        model=".eventdate"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 hcaracters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                                </Row>
                           
                            <Row className="form-group">
                                <Label htmlFor="expiredate" md={2}>Expire Date.</Label>
                                <Col md={10}>
                                    <Control.text model=".expiredate" type="date" id="expiredate" name="expiredate"
                                        placeholder="Expire Date"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                        />
                                        <Errors 
                                        className="text-danger"
                                        model=".expiredate"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                            isNumber: 'Must be a number'
                                        }}
                                        />
                                        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" type="email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                        <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                     <strong>Invitation Type?</strong>
                                    
                                    </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select  model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                    </Control.select>
                                        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Special Message</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="4"
                                        className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Create
                                    </Button>
                                    </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Invite;