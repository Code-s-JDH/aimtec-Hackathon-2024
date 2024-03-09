import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from '../components/common/navbar/NavBar';
import { loginUser } from '../services/userApi';
import useAuth from '../hooks/useAuth';
import useInput from '../hooks/useInput';
import useToggle from '../hooks/useToggle';
import './styles/login.css';

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const userRef = useRef();
  // const errRef = useRef();

  const [email, resetEmail, emailAttribs] = useInput('email', '')
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [check, toggleCheck] = useToggle('persist', false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        pwd
      };

      const response = await loginUser(userData);
      const username = response?.data.username
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      console.log(response.data)
      setAuth({ username, email, pwd, roles, accessToken });
      resetEmail();
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      // errRef.current.focus();
    }
  }

  return (
    <>
      <header>
        <div className="redGradientL" id="gradient1"></div>
        <NavBar />
      </header>
      <main>
        <section className="login">
          <div>
            <p className="fontHeader2">Přihlásit se</p>
            <form onSubmit={handleLogin}>
              <div className='userInputs'>
                <div className='userInput'>
                  <input
                    type="text"
                    id="email"
                    placeholder='Email'
                    // ref={userRef}
                    autoComplete="off"
                    {...emailAttribs}
                    required
                  />

                  <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                </div>
                <div className='userInput'>
                  <input
                    type="password"
                    id="password"
                    placeholder='Heslo'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    autoComplete='current-password'
                    required
                  />
                  <label htmlFor="password"><FontAwesomeIcon icon={faLock} /></label>
                </div>
              </div>
              {/* <div className='rememberMe'>
                <input
                  type="checkbox"
                  id="persist"
                  onChange={toggleCheck}
                  checked={check}
                />
                <label htmlFor="persist"><p className='fontHeader3'>Zapamatovat si mě</p></label>
              </div> */}
              <button>Přihlásit se</button>
            </form>
            <div className='loginDetails'>
              <p className="fontHeader3"><Link to="/Register">Vytvořit účet</Link></p>
              <p>|</p>
              <p className="fontHeader3"><Link to='/wip'>Zapomenuté heslo</Link></p>
            </div>
          </div>
        </section>
        {/* <div className="blueGradientR" id="gradient2"></div> */}
      </main>
    </>
  );
}

export default Login;
