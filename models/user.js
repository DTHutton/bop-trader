module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userFirstName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    userLastName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    userPassword: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      required: true,
      allowNull: false,
      defaultValue: new Date()
    }
  });

  return User;
};
