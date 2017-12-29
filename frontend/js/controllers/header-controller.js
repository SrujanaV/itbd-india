// myApp.controller('headerCtrl', function ($scope, TemplateService) {
//     $scope.template = TemplateService;
//     $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
//         $(window).scrollTop(0);
//     });
//     $.fancybox.close(true);

// $scope.submit = function (cartData, detailForm) {
//             console.log("submiting...")
//             console.log("data",cartData)
//             if (cartData) {
//                 console.log("cartData")
//                 if (detailForm.$valid == true) {
//                     console.log("detailForm.$valid")
//                     NavigationService.submitEnquiry(cartData, function (data) {
//                         console.log("in navigation")
//                         if (data.data.value) {
//                             console.log("all data")
                        
//                         }
//                         console.log(data)
                         
//                         $scope.mycart=false;
//                            $scope.cartData={};
                 
                      
                       
                       
//                     });
//                 }
//             }
//         };
// });