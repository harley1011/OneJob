angular.module('services').service(
  'makeBidService', function () {
      Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");
      this.makeBid = function makeBid (contractorID, jobID, bidValue, callback) {
          var Bid = Parse.Object.extend("Bid");
          var bid = new Bid();

            bid.set("contractorID", contractorID);
            bid.set("bidValue", bidValue);
            bid.save(null, {
            success: function () {
                console.log("success");
                callback({success: true, data:bid});
            },
            error: function () {
                console.log("fail");
                callback({success: false, message: error});
            }
    });  
    
    }
      
    this.getBidHistory = function (limit, jobID, callback) {
        var Bid = Parse.Object.extend("Bid");
        var query = new Parse.Query(Bid);

        query.limit(limit);
        query.ascending("cost");

        query.find({
            success: function(results) {
                callback({success:true, data:results});
                console.log("success");
            },
            error: function() {
                console.log(error);
                callback({success: false, message: error});
            }
        });
    }
});
