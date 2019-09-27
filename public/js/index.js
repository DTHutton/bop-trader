$(document).ready(function() {
  // Get references to page elements
  // const $exampleText = $("#example-text");
  // const $exampleDescription = $("#example-description");
  // const $exampleList = $("#example-list");

  const $submitBtn = $("#submit");

  // The API object contains methods for each kind of request we'll make
  const API = {
    saveExample: function(user) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/register",
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

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();
    console.log("handleFormSubmit HIT on @ index.js public file");
    const user = {
      email: $("#email")
        .val()
        .trim(),
      emailValidate: $("#emailValidate")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim(),
      passwordValidate: $("#passwordValidate")
        .val()
        .trim()
    };

    console.log("index.js > >  user = ", user);

    if (!(user.email && user.password)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(user);

    // ====++=+=++=++==+=+=+=+=====
    // Submits a new user to the database and brings user to blog page upon completion
    // $.post("/register", user, function() {
    //   // window.location.href = "/dashboard";
    //   console.log("hello >>> COMPLETED $.post(/register");
    // });

    $("#email").val("");
    $("#emailValidate").val("");
    $("#password").val("");
    $("#passwordValidate").val("");
  };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
});

//  ============= END
//  =============
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

// refreshExamples gets new examples from the db and repopulates the list
// const refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     const $examples = data.map(function(example) {
//       const $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       const $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       const $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// const handleDeleteBtnClick = function() {
//   const idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };
