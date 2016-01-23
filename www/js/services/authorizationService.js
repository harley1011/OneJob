angular.module('services').service(
  'authorizationService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

    this.login = function (userName, password, callback) {
      console.log(userName + " " + password);
      Parse.User.logIn(userName, password, {
        success: function (user) {
          console.log("success");
          callback({success: true})

        },
        error: function (user, error) {
          console.log(error);
          callback({success: false, message: error})
        }
      });
    }

    this.isLoggedIn = function (callback)
    {
      var currentUser = Parse.User.current();
      if (currentUser) {
        callback({success: true})
      } else {
        callback({success: false});
      }
    }
  });
