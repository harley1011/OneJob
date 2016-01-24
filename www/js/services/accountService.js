angular.module('services').service(
  'accountService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

    this.changeAboutMe = function (aboutMe) {
    var user = Parse.User.current();
      user.set("aboutMe", aboutMe);
    }

  });
