myApp.controller('footerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
      $scope.showMsg=false
    console.log("inside footerctrl")
$scope.submitEmail=function(data){

     NavigationService.saveMail(data, function (data1) {
         console.log("data1",data1)
         console.log("go");
        //  $scope.data={};
         if(data1.data.value==true){
               $scope.showMsg=false
               $scope.data={};
         }else{
             $scope.showMsg=true
         }
      });
}

});