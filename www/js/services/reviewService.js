angular.module('services')
  .service('reviewService', function () {
    Parse.initialize("WNMS58WrCeFRP5GDL43J9EPtPaJuMUd7AsygsGlH", "B3M0Urq3fJtw7BoeW0zztFK1uA243PpdugTyfKMK");
    
    this.setReview = function (jobID, description, callback){
        var Review = Parse.Object.extend("Review");
        var review = new Review ();
        review.set("postedBy", Parse.User.current());
        review.set ("job", jobID);
        review.set ("description", description);
        review.save(null,{
           success:function (){
                console.log ("Success!");
                callback ({success:true, data:review});
               return true;
           }
            error: function (error){
                console.log("error!"+ error); 
                callback ({success:false});
                return false;
           }
        });
    }
    
    
    this.getReview = function (jobID, callback){
         var review = Parse.Object.extends ("Review");
         var query = new Parse.Query (review);
        query.equalTo ("job",jobID);
        query.find ({
           success:function (results){
              console.log (results);
               callback ({success:true, data:results});
               return true;  
           }
            error: function (){
                console.log("error!")
                callback ({success:false});
                return false;
        }
        });
         
        
    }
    
    
    
});