angular.module('services').service(
  'tempStorageService', function () {
    var temp;
    this.setTempStore = function (value) {
      temp = value;
    }

    this.getTempStore = function () {
      return temp;
    }


  });


