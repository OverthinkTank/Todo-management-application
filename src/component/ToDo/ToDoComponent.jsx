import React, { Component } from 'react';
import { Formik, Form ,Field, ErrorMessage} from 'formik';
import moment from 'moment';
import TodoService from '../../api/todo/ToDoService.js';
import AuthenticationService from './AuthenticationService.js';

class TodoComponent extends Component{
    constructor(props){
    super(props);

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit(values){
        console.log(values);
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUserName();
        TodoService.retrieveTodo(username,this.state.id)
        .then(
            response => { 
                // console.log(username, " ToDoComponent+ " ,this.state.id)
                this.setState({
                    description: response.data.description,
                    targetDate:  moment(response.data.targetDate).format('YYYY-MM-DD')
                })
            }
        )
    }

    validate(values){
        // let errors = {description: 'Description should have atleast five characters'}
        // console.log(values);
        let errors = {}
        if(!values.description){
            errors.description= "Enter some Description";
        } else if(values.description.length < 5){
            errors.description = "Atleast 5 characters required for description";
        }

        if(!moment(values.targetDate).isValid()){
            errors.description = "Enter valid Target Date";
        }
        return errors;
    }
    
    render(){
        
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
        //from above to below format
        let {description,targetDate} = this.state;
        
        return(
        
        <div>
            <h1>To-Do</h1>
            <div className="container"> 
                <Formik
                    initialValues = {{description,targetDate }}
                        //^ description: description,
                        //^ targetDate : targetDate
                    onSubmit = {this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                   >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name = "description" component="div" className="alert alert-danger" />
                                <ErrorMessage name = "targetDate" component="div" className="alert alert-danger" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className = "form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className = "form-control" type = "Date" name = "targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit" name="Save">save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        
        
        
        );
    }
}

export default TodoComponent;