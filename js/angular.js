var app = angular.module('earningsCalc', []);

app.controller('Calculator', ['$scope', function($scope) {
  $scope.calculate = function(){
    if($scope.runningTips === undefined){
      $scope.runningTips = $scope.runningCount = $scope.runningTipAverage = 0;
    }
    var tax = (+$scope.mealTaxRate / 100).toFixed(2);
    var subtotal = (+$scope.mealPrice * +tax +$scope.mealPrice).toFixed(2);
    var tip = ((+$scope.mealTipRate/100) * +$scope.mealPrice).toFixed(2);
    $scope.activeSubtotal = subtotal;
    $scope.activeTip = tip;
    $scope.activeTotal = (parseFloat(subtotal) + parseFloat(tip)).toFixed(2);
    $scope.runningTips = (parseFloat($scope.runningTips) + parseFloat(tip)).toFixed(2);
    $scope.runningCount = +$scope.runningCount + 1;
    $scope.runningTipAverage = (+$scope.runningTips / +$scope.runningCount).toFixed(2);
    $scope.mealPrice = $scope.mealTipRate = $scope.mealTaxRate = ('');
  };
}]);
