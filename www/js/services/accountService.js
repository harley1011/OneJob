angular.module('services').service(
  'accountService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

    this.changeAboutMe = function (aboutMe, callback) {
        var user = Parse.User.current();
        user.set("aboutMe", aboutMe);
        user.save(null, {
            success: function() {
                callback({success:true, user:user});
                return true;
            },
            error: function(error) {
                callback({success:false, user:user});
                return false;
            }
        });
    }

    this.changeHourlyRate = function(hourlyRate, callback) {
        var user = Parse.User.current();
        user.set("hourlyRate", hourlyRate);
        user.save(null, {
            success: function() {
                callback({success:true, user:user});
                return true;
            },
            error: function(error) {
                callback({success:false, user:user});
                return false;
            }
        });
    }
    
    this.changeAvailability = function(availability, callback) {
        var user = Parse.User.current();
        user.set("availability", availability);
        user.save(null, {
            success: function() {
                callback({success:true, user:user});
                return true;
            },
            error: function(error) {
                callback({success:false, user:user});
                return false;
            }
        });
    }
    
    
    this.setRole = function (role, callback) {
     
    //Find user by ID
    var user = Parse.User.current();
    if (role != null) {user.set ("roleType", role);}
     user.save(null, {
            success: function() {
                callback({success:true, user:user});
                return true;
            },
            error: function(error) {
                callback({success:false, user:user});
                return false;
            }
        });
  
}
    
  });


