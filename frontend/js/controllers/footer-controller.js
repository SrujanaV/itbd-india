myApp.controller('footerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
      $scope.showMsg=false
      $scope.hideMsg=false
    console.log("inside footerctrl")
// $scope.submitEmail=function(data){

//      NavigationService.saveMail(data, function (data1) {
//          console.log("data1",data1)
//          console.log("go");
//         //  $scope.data={};
//          if(data1.data.value==true){
//                $scope.showMsg=false,
//                $scope.hideMsg=true
//                $scope.data={};
//          }else{
//              $scope.showMsg=true,
//              $scope.hideMsg=false
//          }
//       });
// }
       $scope.subscribeSubmit = function(subscribeData) {
            console.log("sadsadasdsads");
            console.log("subscribeData", subscribeData);
           NavigationService.saveMail(subscribeData, function (data) {
                console.log("data", data.value);
                if (data.data.data) {
                    console.log('hhhhhhhhh');
                    $scope.subscribeComplete = true;
                    $timeout(function() {
                        $scope.subscribeComplete = false;
                        $scope.subscribeData = {};
                    }, 2000);
                } else {
                    console.log('eeeeeeeeeee');
                    console.log('inside elseeee');
                    $scope.alreadySubscribed = true;
                    $timeout(function() {
                        $scope.alreadySubscribed = false;
                        $scope.subscribeData = {};
                    }, 2000);
                }


            })
        }

});