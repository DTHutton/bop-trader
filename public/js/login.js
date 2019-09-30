$(document).ready(function() {
  // Getting references to our form and inputs
  // var loginForm = $("form.login");

  // When the form is submitted, we validate there's an email and password entered
  $("form.login").on("submit", function(event) {
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");
    event.preventDefault();
    var userData = {
      email: emailInput.val(),
      password: passwordInput.val()
    };
    $.post("/login", userData)
      .then(res => {
        console.log("the res", res);
        window.location.replace("/index");
      })
      .catch(err => console.log("the errrrrrr", err));
  });

  //     console.log("userData = ", userData);

  //     if (!userData.email || !userData.password) {
  //       return;
  //     }

  // If we have an email and password we run the loginUser function and clear the form
  //     loginUser(userData.email, userData.password);
  //     emailInput.val("");
  //     passwordInput.val("");
  //   });

  // loginUser does a post to our "/login" route and if successful, redirects us the the dashboard page
  // function loginUser(email, password) {
  //   console.log("HIT loginUser function in login.js");
  //   $.post("/login", {
  //     email: email,
  //     password: password
  //   });

  // }
});
