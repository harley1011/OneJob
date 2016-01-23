angular.module('services', []).service (
    'registrationService', function (userName, email, firstName, lastName, password) {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

    var user = new Parse.User();
        user.set("email", email);
        user.set("firstName", firstName);
        user.set("lastName", lastName);
         user.set("password", password);
        user.set("username", userName);


        user.signUp(null, {
            success: function (user) {
                console.log("signup success");
            },
            error: function (user, error){
                console.log("signup failed");
                console.log (error);
            }

        });
    });
