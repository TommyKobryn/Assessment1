app.controller('commentController', function($scope) {
  $scope.comments = [
    {name:'Patricia' , title:'comment 1 Numbers or tingling in your feet Numbers or tingling in your feet Numbers or tingling in your feet'},
    {name:'Jhonny' , title:'comment 2in your feet Numbers or tingling in your feet Numbers or tingling in your feet Numbers or tingling '},
    {name:'Mark' , title:'comment 3 in your feet Numbers or tingling in your feet Numbers or tingling in your feet Numbers or tingling '},

  ];
});

app.controller('questionController', function($scope){

$scope.questions = [
  {name:'Eva' , title:'Will insuline make my patient gain weight?'},
  {name:'Barbara' , title:'Q2 Will insuline make my patient gain weight?'},
  {name:'Jenny' , title:'Q3 Will insuline make my patient gain weight?'},
];
});


app.controller('ControllerJson', function($scope, $http) {
  $http.get("http://www.pitbullsdogfood.com/montrail/db.json").then(function (response) {
      $scope.data = response.data.records;
  });
});
