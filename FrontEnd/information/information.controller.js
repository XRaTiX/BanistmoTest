(function () {
  "use strict";

  angular
    .module("app")
    .controller("InformationController", InformationController);
  InformationController.$inject = ["$rootScope", "$location"];
  function InformationController($rootScope, $location) {
    var vm = this;
    initController();
    function initController() {
      if ($rootScope.information != undefined) {
        loadInformation();
      } else {
        $location.path("/");
      }
    }
    function loadInformation() {
      vm.CLIENTNUM = $rootScope.information.information.CLIENTNUM;
      vm.Attrition_Flag = $rootScope.information.information.Attrition_Flag;
      vm.Customer_Age = $rootScope.information.information.Customer_Age;
      vm.Gender = $rootScope.information.information.Gender;
      vm.Dependent_count = $rootScope.information.information.Dependent_count;
      vm.Education_Level = $rootScope.information.information.Education_Level;
      vm.Marital_Status = $rootScope.information.information.Marital_Status;
      vm.Income_Category = $rootScope.information.information.Income_Category;
      vm.Card_Category = $rootScope.information.information.Card_Category;
      vm.Months_on_book = $rootScope.information.information.Months_on_book;
      vm.Total_Relationship_Count =
        $rootScope.information.information.Total_Relationship_Count;
      vm.Months_Inactive_12_mon =
        $rootScope.information.information.Months_Inactive_12_mon;
      vm.Contacts_Count_12_mon =
        $rootScope.information.information.Contacts_Count_12_mon;
      vm.Credit_Limit = $rootScope.information.information.Credit_Limit;
      vm.Total_Revolving_Bal =
        $rootScope.information.information.Total_Revolving_Bal;
      vm.Avg_Open_To_Buy = $rootScope.information.information.Avg_Open_To_Buy;
      vm.Total_Amt_Chng_Q4_Q1 =
        $rootScope.information.information.Total_Amt_Chng_Q4_Q1;
      vm.Total_Trans_Amt = $rootScope.information.information.Total_Trans_Amt;
      vm.Total_Trans_Ct = $rootScope.information.information.Total_Trans_Ct;
      vm.Avg_Utilization_Ratio =
        $rootScope.information.information.Avg_Utilization_Ratio;
      vm.Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Cou =
        $rootScope.information.information.Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Cou;
      vm.Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Co =
        $rootScope.information.information.Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Co;
    }
  }
})();
