angular.module('services').service(
  'jobService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");

    this.returnAllJobs = function(limit, category, location, callback) {

      //Return all listed jobs on the platform matching category and are not mine
      var job = Parse.Object.extend("Job");
      var query = new Parse.Query(job);
      query.notEqualTo("postedBy", Parse.User.current());//not my jobs
      if (category != null) {query.equalTo ("category", category);}//match category
      if (location != null) {query.equalTo ("location", location);}//match location
      query.ascending("cost");//sort ascending
      query.limit (limit);//limit the number of rows returned
      query.include("postedBy");
      query.find({
        success: function(results) {
          console.log("success");
          console.log(results);
          callback({success: true, jobs: results});
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
        }
      });
    }

    this.returnMyJobs = function(limit, category, callback) {

      //Return all my listed jobs on the platform
      var job = Parse.Object.extend("Job");
      var query = new Parse.Query(job);
      query.equalTo ("postedBy", Parse.User.current());//my jobs
      if (category != null) {
        query.equalTo ("category", category);//match category
      }
      query.ascending("cost");//sort ascending
      query.limit (limit);//limit the number of rows returned
      query.find({
        success: function(results) {
          console.log("success");
          console.log(results);
          callback({success:true, jobs: results});
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
        }
      });
    }

    this.postJob = function (title, description, cost, duration, location, category, callback) {

      var Job = Parse.Object.extend("Job");

      var job = new Job();

      job.set("title", title);
      job.set("description", description);
      job.set("cost", cost);
      job.set("duration", duration);
      job.set("location", location);
      job.set("category", category);
      job.add("postedBy", Parse.User.current());
      job.save(null, {
        success: function () {
          console.log("success");
          callback({success: true, post: result});
            return true;
        },
        error: function (error) {
          console.log("fail");
          console.log(error);
          callback({success: false, message: error});
            return false;
        }
      });
    }

    this.makeBid = function (contractorID, jobID, bidValue, callback) {
      var Bid = Parse.Object.extend("Bid");
      var bid = new Bid();

      bid.set("contractorID", contractorID);
      bid.set("bidValue", bidValue);
      bid.set("jobID", jobID);

      bid.save(null, {
        success: function () {
          console.log("success");
            return true;
        },
        error: function () {
          console.log("fail");
            return false;
        }
      });
    }
  })
;
