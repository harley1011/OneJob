

angular.module('services', []).service (
    'authorizationService', function (userName, password) {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");
        Parse.User.logIn(userName, password, {
            success: function(user) {
                console.log("success");
                return true;
            },
            error: function (user, error) {
                console.log(error);
                return false;
            }
        });
    });
