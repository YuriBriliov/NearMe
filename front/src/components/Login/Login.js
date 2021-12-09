import React from 'react'
import classes from './Login.module.scss'
function Login(){
  return(
    <>

      <div class="bg"></div>
      <div class="panel">
        <input id="switch-open" type="radio" name="switch" />
        <input id="switch-close" type="radio" name="switch" />
        <div class="login">
          <h1>LOGIN</h1>
          <div class="group"><i class="fa fa-envelope" aria-hidden="true"></i>
            <input id="email" type="text" placeholder="E-Mail" />
            <label for="email"></label>
          </div>
          <div class="group"><i class="fa fa-unlock-alt" aria-hidden="true"></i>
            <input id="password" type="password" placeholder="Password" />
            <label for="password"></label>
          </div>
          <input type="submit" value="LOGIN" />
        </div>
        <div class="register">
          <label class="button-open" for="switch-open"></label>
          <label class="button-close" for="switch-close"></label>
          <div class="inner">
            <h1>REGISTER</h1>
            <div class="group"><i class="fa fa-user" aria-hidden="true"></i>
              <input id="name" type="text" placeholder="Name" />
              <label for="name"></label>
            </div>
            <div class="group"><i class="fa fa-envelope" aria-hidden="true"></i>
              <input id="email" type="text" placeholder="E-Mail" />
              <label for="email"></label>
            </div>
            <div class="group"><i class="fa fa-unlock-alt" aria-hidden="true"></i>
              <input id="password" type="password" placeholder="Password" />
              <label for="password"></label>
            </div>
            <input type="submit" value="REGISTER" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
