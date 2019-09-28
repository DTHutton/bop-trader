// “sequelize” in this case is actually our connection to our database.

// Inside of our function we run the “sequelize.define” method.
// * We pass it two arguments.
//   - The name of our model as a string, and an object describing our model’s schema.
// Each property will represent a column in the database.
// sequelize.define returns an object, which we store inside the variable “User”. We return this User variable at the end.

// Sequelize will pluralize our table names by default, so always name your models in the singular.

var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    cash: {
      type: DataTypes.INTEGER,
      defaultValue: "100000"
    },
    bitcoin: {
      type: DataTypes.INTEGER,
      defaultValue: "1"
    },
    ethereum: {
      type: DataTypes.INTEGER,
      defaultValue: "0"
    },
    litecoin: {
      type: DataTypes.INTEGER,
      defaultValue: "0"
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  // Generating a hash
  User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });
  // return User;

  return User;
};
