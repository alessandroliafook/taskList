/**
 * Created by Alessandro Lia Fook Santos on 25/11/2016.
 */

var app = angular.module('myApp', []);

app.controller('controller', function ($scope) {

    $scope.taskList = new Array();
    $scope.taskName = "";
    $scope.percentualDone = 0.0;

    var task = function (taskName) {
        this.titleName = taskName;
        this.isDone = false;
    };

    $scope.addTask = function () {
        if (!containsTask($scope.taskName)) {
            $scope.taskList.push(new task($scope.taskName));
            console.log($scope.taskName + " adicionada!");
        }
    };

    function containsTask(taskName) {
        for (var index = 0; index < $scope.taskList.length; index++) {
            if ($scope.taskList[index].titleName === taskName) {
                return true;
            }
        }
        return false;
    }

    $scope.deleteTask = function (index) {
        $scope.taskList.splice(index, 1);
    }

    $scope.getDonePercentage = function () {
        var totalDone = 0;
        for (var index = 0; index < $scope.taskList.length; index++) {
            if ($scope.taskList[index].isDone) {
                totalDone += 1;
            }
        }
        return Math.floor(totalDone / taskList.length) * 100;
    }
});

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}


function changeColor(color) {
    document.body.style.backgroundColor = color;
};
