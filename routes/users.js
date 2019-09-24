// user/login or user/register route

// {

// bcrypt.genSalt(10, (err, salt) => 
//     bcrypt.hash(newUser.password, salt, (err,hash) => {
//         if(err) throw err;
//         // Set password to hashed
//         newUser.password = hash;
//         // Save user
//         newUser.save()
//             .then(user => {
//                 requestAnimationFrame.flash("success_msg", "You are now registered and can log in");
//                 res.redirect("/users/login");
//         })
//         .catch(err => console.log(err));

//     }))
// }