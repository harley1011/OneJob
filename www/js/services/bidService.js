angular.module('services').service(
  'bidService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");
    this.makeBid = function makeBid(jobID, bidValue, callback) {
      var Bid = Parse.Object.extend("Bid");
      var bid = new Bid();
      var user = Parse.User.current();
      var Job = Parse.Object.extend("Job");


      var query = new Parse.Query(Job);
      query.equalTo("objectId", jobID);
      query.first({
        success: function (results) {
          bid.set("contractor", user);
          bid.set("bidValue", bidValue);
          bid.set("job", results);

          bid.save(null, {
            success: function () {
              console.log("success");
              callback({success: true, data: bid});
              return true;
            },
            error: function () {
              console.log("fail");
              callback({success: false, message: error});
              return false;
            }
          });
        },
        error: function (error) {
          console.log(error);
        }
      });


    }

    this.getBidHistory = function (limit, jobID, callback) {
      var Bid = Parse.Object.extend("Bid");
      var query = new Parse.Query(Bid);

      query.limit(limit);
      query.ascending("cost");
      query.include("contractor");
      query.include("job");
      query.find({
        success: function (results) {
          callback({success: true, data: results});
          console.log("success");
          return true;
        },
        error: function () {
          console.log(error);
          callback({success: false, message: error});
          return false;
        }
      });
    }
  });
