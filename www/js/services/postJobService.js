angular.module('services').service(
  'postJobService', function () {
  Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

      function postJob (title, description, cost, duration, location, jobeeID, callback) {
       
    var Job = Parse.Object.extend("Job");
    
    var job = new Job();
    
    job.set("title", title);
    job.set("description", description);
    job.set("cost", cost);
    job.set("duration", duration);
    job.set("location", location);
    job.set("jobeeID", jobeeID);
    
    job.save(null, {
        success: function () {
            console.log("success");
            callback({success:true});
        },
        error: function () {
            console.log("fail");
            callback ({success:false, message:error});
        }
    });  
    
}
});


