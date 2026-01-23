import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import apiInstance from '../../utils/axios';
import { register } from '../../utils/auth';
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'



function Register() {
  const [fullName, SetFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const {error} = await register(fullName, email, password, password2);
    if (error){
      alert(error);
      setIsLoading(false);
    } else{
      navigate('/');
      alert("Registration Successful");
      setIsLoading(false);
    }
  };
 

  return (
    <>
      <BaseHeader />

      <section className="container d-flex flex-column vh-100" style={{ marginTop: "150px" }}>
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow">
              <div className="card-body p-6">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">Sign up</h1>
                  <span>
                    Already have an account?
                    <Link to="/login/" className="ms-1">
                      Sign In
                    </Link>
                  </span>
                </div>
                {/* Form */}
                <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="full_name"
                      className="form-control"
                      name="full_name"
                      placeholder="student"
                      required=""
                      onChange={(event) => SetFullName(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="lms@gmail.com"
                      required=""
                      onChange={(event) => SetEmail(event.target.value)}
                    />
                  </div>
                  
                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="**************"
                      required=""
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirm_password"
                      className="form-control"
                      name="confirm_password"
                      placeholder="**************"
                      required=""
                      onChange={(event) => setPassword2(event.target.value)}
                    />
                  </div>
                  <div>
                    <div className="d-grid">
                      {isLoading === true && (<button disabled type="submit" className="btn btn-primary">
                        Processing <i className='fas fa-spinner fa-spin'></i>
                      </button>)}

                      {isLoading === false && (<button type="submit" className="btn btn-primary">
                        Sign Up <i className='fas fa-user-plus'></i>
                      </button>)}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  )
}

export default Register