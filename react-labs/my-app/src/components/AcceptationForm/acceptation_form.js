import './acceptation_form.css'
import {Formik, useField, Form} from 'formik'
import * as Yup from 'yup'
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <div className='input-area'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props}/>
            { meta.touched && meta.error ?
                (<div className='error'>{meta.error}</div>):null
            }
        </div>
    )
}

const CustomCheckbox = ({children, ...props}) => {
    const [field, meta] = useField(props, 'checkbox');
    return(
        <div>
            <label className='checkbox'>
            <input type='checkbox' {...field} {...props}/>
            {children}
            </label>
            { meta.touched && meta.error ?
                (<div className='error'>{meta.error}</div>):null
            }
        </div>
    )
}

function AcceptationForm(){
    let navigate = useNavigate();
    return(
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    email: '',
                    mobile_phone: '',
                    acceptedTerms: false,
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, 'Name is too short, at least 3 characters')
                        .max(20, 'Name is too long, maximum 20 characters')
                        .matches(/A+/, 'Name must start with A')
                        .required('Required field'),
                    surname: Yup.string()
                        .min(3, 'Surname is too short, at least 3 characters')
                        .max(20, 'Surname is too long, maximum 20 characters')
                        .required('Required field'),
                    email: Yup.string()
                        .email('Not valid email')
                        .required('Required field'),
                    mobile_phone: Yup.string()
                        .notRequired(),
                    acceptedTerms: Yup.boolean()
                        .oneOf([true], 'Please accept the terms and conditions')
                        .required('Required'),
                })}
                onSubmit={({resetForm}) => {
                    setTimeout(() => {
                        navigate("/success")
                        resetForm()
                    }, 500)
                }}
            >
                {props =>
                (<Form className='form'>
                    <h1>Checkout</h1>
                    <div className='horizontal-inputs'>
                        <CustomTextInput label="Name" name="name" type="text" placeholder="Andrew"/>
                        <CustomTextInput label="Surname" name="surname" type="text" placeholder="Brown"/>
                    </div>
                    <div className='horizontal-inputs'>
                        <CustomTextInput label="Mobile phone" name="mobile_phone" type="text" placeholder="+38 000 000 00 00"/>
                        <CustomTextInput label="Email" name="email" type="email" placeholder="your@email.com"/>
                    </div>
                    <CustomCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </CustomCheckbox>
                    <div className='acceptation_form_buttons'>
                        <Button as={Link} to="/catalog" variant="light">Back to catalog</Button>
                        <Button type='submit' variant="dark">Continue</Button>
                    </div>
                </Form>)}
            </Formik>
    )
}

export default AcceptationForm;