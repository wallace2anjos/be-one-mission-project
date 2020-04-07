// singup
const signupForm = document.querySelector(`#signup-form`);
signupForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm[`signup-email`].value;
  const password = signupForm[`signup-password`].value;

  //sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    console.log(`user signed up`);
    const modal = document.querySelector(`#modal-signup`);
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

/* One time the user has signed up, he is automatically logged in, then we can do his logout.*/
// logout
const logout = document.querySelector(`#logout`);
logout.addEventListener(`click`,(e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log(`user logged out`);
  });
});

// login
const loginForm = document.querySelector(`#login-form`);
loginForm.addEventListener(`submit`, (e) =>{
  e.preventDefault();

  //get user info
  const email = loginForm[`login-email`].value;
  const password = loginForm[`login-password`].value;

  auth.signInWithEmailAndPassword(email, password).catch(function(error){
    //handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === `auth/wrong-password`){
      alert(`Wrong Password`);
    } else {
      alert(errorMessage + ` User dont exist`);
    }
  console.log(error);
  }).then(cred => {
    console.log(cred.user);
    console.log(`user logged in`);
    //close the login modal and reset form
    const modal = document.querySelector(`#modal-login`);
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  })
  /*
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    console.log(`user logged in`);
    //close the login modal and reset form fields
    const modal = document.querySelector(`#modal-login`);
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });*/
});
