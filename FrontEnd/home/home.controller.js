(function () {
  "use strict";

  angular.module("app").controller("HomeController", HomeController);
  HomeController.$inject = ["$rootScope", "$http", "$location", "FlashService"];
  function HomeController($rootScope, $http, $location, FlashService) {
    var vm = this;
    vm.message = "";
    // vm.user = null;
    // vm.allUsers = [];
    // vm.deleteUser = deleteUser;
    vm.search = search;
    // initController();
    // function initController() {
    //   loadCurrentUser();
    //   loadAllUsers();
    // }
    // function loadCurrentUser() {
    //   UserService.GetByUsername($rootScope.globals.currentUser.username).then(
    //     function (user) {
    //       vm.user = user;
    //     }
    //   );
    // }
    // function loadAllUsers() {
    //   UserService.GetAll().then(function (users) {
    //     vm.allUsers = users;
    //   });
    // }
    // function deleteUser(id) {
    //   UserService.Delete(id).then(function () {
    //     loadAllUsers();
    //   });
    // }

    function search(id) {
      $http
        .get(window.__env.apiUrl + "/clientes/" + id)
        .then(successCallback, errorCallback);
      function successCallback(response) {
        console.log(response);
        $rootScope.information = {
          information: response.data,
        };
        $location.path("/information");
      }
      function errorCallback(response) {
        FlashService.Error(response.data.message);
      }
    }
  }
})();
