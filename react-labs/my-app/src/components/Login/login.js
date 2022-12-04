import "./login.css"
import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from "react-redux"
import { setLoggedIn } from "../../redux/slice"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

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

function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    return(
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={Yup.object({
            email: Yup.string()
                .required('Required field'),
            password: Yup.string()
                .required('Required field')
        })}
        onSubmit={({email, password}) => {
            let user_password = localStorage.getItem(email)
            if(user_password && password === user_password){
                dispatch(setLoggedIn(true))
                navigate("/home")
            } else {
                alert("Something is incorrect, try again")
            }
        }}
        >
            {() => (
                <Form className="log-reg">
                    <h1>Submit the form to sign in</h1>
                    <CustomTextInput placeholder="E-mail.." name="email" type="email"/>
                    <CustomTextInput placeholder="Password.." name="password" type="password"/>
                    <div className="sign-up">
                        Not a member?
                        <Link to="/registration">Sign up</Link>
                    </div>
                    <Button style={{marginTop: 40, width: 500}} type="submit">LOGIN ME</Button>
                </Form>
            )}
        </Formik>
    )
}

export default Login;