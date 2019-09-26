// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
    event.preventDefault();
    console.log("handleFormSubmit HIT on @ register.js public file");
  
    let user = {
      username: $("name").val().trim(),
      email: $("email").val().trim(),
      password: $("password").val().trim(),
      password2: $("password2").val().trim()
    };
  
    // const example = {
    //   text: $exampleText.val().trim(),
    //   description: $exampleDescription.val().trim()
    // };
  
    if (!(user.username && user.email)) {
      alert("You must enter an example text and description!");
      return;
    }
  
    API.saveExample(example).then(function () {
      refreshExamples();
    });
  
    // $exampleText.val("");
    // $exampleDescription.val("");

    console.log("REGISTER.JS HIT > > >   user.username = ", user.username)

    res.render("form submitted.")

  };

  $("#submit").on("click", handleFormSubmit)