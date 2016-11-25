/**
 * Created by Alessandro Lia Fook Santos on 25/11/2016.
 */

var app = angular.module('myApp', []);

app.controller('controller', function ($scope) {
    $scope.firstName = "";
    $scope.lastName= "";

    $scope.taskList = new Array();
    $scope.name = "";

    var task = function (taskName) {
      this.nome = taskName;
      this.isDone = false;

    };

    $scope.addTask = function () {
        $scope.taskList.push(new task($scope.name));
        console.log($scope.name + " adicionada!");
    };

});
