angular.module('services')
  .service('registrationService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

    var registerUser = {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: ""
    };

    this.setNames = function (firstName, lastName)
    {
      registerUser.firstName = firstName;
      registerUser.lastName = lastName;

    }

    this.setUsername = function (username)
    {
      registerUser.username = username;
    }

    this.setEmail = function (email)
    {
      registerUser.email = email;
    }

    this.getUser = function()
    {
      return registerUser;
    }

    this.signUp = function (userName, email, firstName, lastName, password, callback) {
      var user = new Parse.User();
      user.set("email", email);
      user.set("firstName", firstName);
      user.set("lastName", lastName);
      user.set("password", password);
      user.set("username", userName);


      user.signUp(null, {
        success: function (user) {
          console.log("signup success");
          callback({success: true, user :user});
        },
        error: function (user, error) {
          console.log("signup failed");
          console.log(error);
          callback({success: false, user :user});
        }

      });
    }
  })
