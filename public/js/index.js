$(document).ready(function() {
  // Get references to page elements
  // const $exampleText = $("#example-text");
  // const $exampleDescription = $("#example-description");
  const $submitBtn = $("#submit");
  const $exampleList = $("#example-list");

  // The API object contains methods for each kind of request we'll make
  const API = {
    saveExample: function(user) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(user)
      });
    },
    getExamples: function() {
      return $.ajax({
        url: "api/examples",
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshExamples gets new examples from the db and repopulates the list
  const refreshExamples = function() {
    API.getExamples().then(function(data) {
      const $examples = data.map(function(example) {
        const $a = $("<a>")
          .text(example.text)
          .attr("href", "/example/" + example.id);

        const $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": example.id
          })
          .append($a);

        const $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $exampleList.empty();
      $exampleList.append($examples);
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();
    console.log("handleFormSubmit HIT on @ register.js public file");

    const user = {
      username: $("#name")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim(),
      password2: $("#password2")
        .val()
        .trim()
    };

    console.log("user = ", user);

    if (!(user.username && user.email)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(user).then(function() {
      refreshExamples();
    });

    $("#name").val("");
    $("#email").val("");
    $("#password").val("");
    $("#password2").val("");
    // console.log('REGISTER.JS HIT > > >   user = ', user);
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  const handleDeleteBtnClick = function() {
    const idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
      refreshExamples();
    });
  };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $exampleList.on("click", ".delete", handleDeleteBtnClick);
});

//  ============= END
//  =============
//  =============

// example

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// const handleFormSubmit = function (event) {
//   event.preventDefault();

//   const user = {
//     username: $("name").val().trim(),
//     email: $("email").val().trim(),
//     password: $("password").val().trim(),
//     password2: $("password2").val().trim()
//   };

// const example = {
//   text: $exampleText.val().trim(),
//   description: $exampleDescription.val().trim()
// };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// #
//
