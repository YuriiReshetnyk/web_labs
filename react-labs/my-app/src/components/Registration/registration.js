import "./registration.css"
import {Link, useNavigate} from "react-router-dom";
import {Form, Formik, useField} from "formik";
import * as Yup from 'yup'
import { Button } from "react-bootstrap";

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <div className='input-area-logging'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input-logging' {...field} {...props}/>
            { meta.touched && meta.error ?
                (<div className='error'>{meta.error}</div>):null
            }
        </div>
    )
}

function Registration(){
    const navigate = useNavigate();
    return(
        <Formik initialValues={{
            username: '',
            email: '',
            password: '',
            retypedPassword: ''
        }}
        validationSchema={Yup.object({
            username: Yup.string()
                .required('Required field')
                .min(3, 'Username is too short, at least 3 characters')
                .max(12, 'Username is too long, maximum 12 characters'),
            password: Yup.string()
                .min(3, 'Password is too short, at least 3 characters')
                .max(15, 'Password is too long, maximum 15 characters')
                .matches('\\d', 'Use at least 1 digit')
                .matches('[a-z]', 'Use at least 1 lowercase letter')
                .matches('[A-Z]', 'Use at least 1 uppercase letter')
                .required('Required field'),
            retypedPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords don\'t match, try again')
                .required('Required field')
        })}
        onSubmit={({email, password}) => {
            localStorage.setItem(email, password)
            navigate("/")
        }}
        >
            {() => (
                <Form className="log-reg">
                    <h1>Register the new account</h1>
                    <CustomTextInput name="username" type="text" placeholder="Username.."/>
                    <CustomTextInput name="email" type="email" placeholder="E-mail.."/>
                    <CustomTextInput name="password" type="password" placeholder="Password.."/>
                    <CustomTextInput name="retypedPassword" type="password" placeholder="Retype password.."/>
                    <div className="sign-up">
                        Already a member?
                        <Link to="/">Sign in</Link>
                    </div>
                    <Button style={{marginTop: 40, width: 500}} type="submit">SIGN ME UP</Button>
                </Form>
            )}
            
        </Formik>
    )
}

export default Registration;