$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val(),
      password: passwordInput.val()
    };

    console.log("userData = ", userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "/login" route and if successful, redirects us the the dashboard page
  function loginUser(email, password) {
    console.log("HIT loginUser function in login.js");
    $.post("/login", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log("err = ", err);
      });
  }
});
