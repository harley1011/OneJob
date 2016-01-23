angular.module('services').service(
  'makeBidService', function () {
      Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");
      this.makeBid = function makeBid (contractorID, jobID, bidValue, callback) {
      var Bid = Parse.Object.extend("Bid");
      var bid = new Bid();
    
        bid.set("contractorID", contractorID);
        bid.set("bidValue", bidValue);
    
        var JobObject = Parse.Object.extend("Job");
    
        var query = new Parse.Query(JobObject);
        query.equalTo("objectId", jobID);
        query.first({
        success: function(object) {
            bid.set ("jobeeID", object.get("jobeeID"));
            bid.save();
            console.log("success");
            callback ({success : true});
        },
        error: function(error) {
             console.log(error);
            callback({success: false, message: error})
        }
    });
}
});