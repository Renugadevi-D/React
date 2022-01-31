import { useState,useEffect} from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
import './App.css';
import eye from './eye.png';

function App() {
 
  const initialValues={username:" ",email:" ",password:" ",number:" ",maritalStatus:" ",Gender:" "};
  const [formValues, setFormValues]=useState(initialValues);
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const handleChange=(e)=>
  {
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  };
  const handleSubmit=(e)=>
  {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  }
  const togglePasswordVisiblity = () => {
  setPasswordShown(passwordShown ? false : true);
  };

  const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
  } else if (values.password.length < 4) {
   errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
  errors.password = "Password cannot exceed more than 10 characters";
  }
  if (!values.number) {
  errors.number = "Contact Number is required";
  } 
  else if (values.number.length > 10) {
  errors.number = "Contact Number cannot exceed more than 10 characters";
  }
  return errors;
  };
  return (
   <div className="App">
      
   <h1>Form Validation</h1>
  <div className="col-lg-7 clo-md-8 m-auto d-block">
	
			<form action="#"  className="bg-light" onSubmit={handleSubmit} >
	  <div className="form-group">
          <label className="labelValue">Username</label>
          <input
              type="text"
            className='inputValue'
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            />
          </div>
          <p className="text-danger font-size-x-small">{formErrors.username}</p>
          <div className="form-group">
          <label className="labelValue">Email</label>
          <input
              type="text"
             className='inputValue'
             name="email"
             placeholder="Email"
             value={formValues.email}
             onChange={handleChange}
            />
          </div>
          <p className="text-danger font-size-x-small">{formErrors.email}</p>
        <div className="form-group">
        <div className="field-pass">
        <label className="labelValue"> Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              className='inputValue'
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          <img src={eye} className='eye' onClick={togglePasswordVisiblity}></img>
          </div></div>
          <p className="text-danger font-size-x-small">{formErrors.password}</p>
          <div className="form-group">
          <label className="labelValue">Contact Number</label>
          <input
          type="number"
              className='inputValue'
              name="number"
              placeholder="Mobile number"
              value={formValues.number}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger font-size-x-small">{formErrors.number}</p>
          <div className="form-group">
      <label className="labelValue">Gender </label>
     <label className='labelradio'> <input 
        type="radio" 
       className='inputValue'
       name="Gender"
       value={formValues.Gender}
       onChange={handleChange} />Male</label>
        
       <label className='labelradio'><input 
       type="radio" 
       className='inputValue'
        name="Gender"
       value={formValues.Gender}
        onChange={handleChange} />Female</label>
                   </div>
            <div className="form-group">
               <label className="labelValue">marital status</label>
               <label className='labelradio'>
                <input 
               class="form-check-input" 
               type="checkbox" 
                name ="maritalStatus"
                value={formValues.maritalStatus}
               onChange={handleChange}  />
    Single
  </label>

<label  className='labelradio'>
   <input
      class="form-check-input" 
      type="checkbox"
      name ="maritalStatus"
     value={formValues.maritalStatus}
      onChange={handleChange}  />
     married
 </label>
</div>
        <div className="field_btn">
      <input type="submit" name="submit" value="submit" class="btn btn-primary" /></div>
       
</form>
</div>
</div>
)
}

export default App
