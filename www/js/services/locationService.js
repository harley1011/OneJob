angular.module('services').service(
  'locationService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");
    
       this.getUsersByLocation = function (location, callback) {
          var userLoc = new Parse.Object("UserLocation");
           var query = new Parse.Query(userLoc);
    
            query.equalTo("location", location);
          query.find({
            success: function (results) {
               for (var i=0; i < results.length; i++){console.log(results[i]);console.log(results[i].get("user"));}
               callback({success: true, data: results});
                return true;
            },
            error: function () {
                console.log("fail");
                callback({success: false, message: error});
                return false;
            }
            });
    }

       this.getLocationsOfUser = function (callback) {
    
        var userLoc = new Parse.Object("UserLocation");
    
        var query = new Parse.Query(userLoc);
    
           query.equalTo("user", Parse.User.current());
    
        query.find({
            success: function(results) {
                for (var i=0; i < results.length; i++){console.log(results[i]);console.log(results[i].get("location"));}
            callback({success: true, data: results});
                return true;
        },
        error: function(error) {
            console.log("error" + error);
            callback({success: false, message: error});
            return false;
        }
    });    
}
    
    
    
  }
    
);
