(function () {
  "use strict";

  angular.module("app").factory("UserService", UserService);

  UserService.$inject = ["$http"];
  function UserService($http) {
    var service = {};
    service.Create = Create;

    return service;

    function Create(user) {
      return $http
        .post(__env.apiUrl + "/register", user)
        .then(handleSuccess, handleError);
    }

    // private functions

    function handleSuccess(res) {
      return { success: true };
    }

    function handleError(response) {
      var message;
      if (response.data == null) {
        message = "Could not connect to the server";
      } else {
        message = response.data.message;
      }
      return { success: false, message: message };
    }
  }
})();
