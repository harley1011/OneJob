angular.module('services').service(
  'bidService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");


    this.makeBid = function makeBid(jobID, bidValue, callback) {
      var Bid = Parse.Object.extend("Bid");
      var Job = Parse.Object.extend("Job");

      var query = new Parse.Query(Bid);
      var job = new Job();
      job.id = jobID;
      query.equalTo("contractor", Parse.User.current());
      query.equalTo("job", job);

      query.first({
        success: function(bid){
          console.log(bid);
          if (bid)
          {
            bid.set("bidValue", bidValue);
          }
          else
          {
            bid = new Bid();
            bid.set("contractor", Parse.User.current());
            bid.set("job", job);
            bid.set("bidValue", bidValue);
          }
          bid.save({
            success: function (result){
              callback({success: true, bid: JSON.parse(JSON.stringify(result))})
            },
            error: function(error){
              console.log(error);
            }
          })


        },
        error: function (error){

        }
      })
     /* bid.set("bidValue", bidValue);

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
      });*/
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
