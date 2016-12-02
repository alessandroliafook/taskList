/**
 * Created by Alessandro Lia Fook Santos on 25/11/2016.
 */

var app = angular.module('myApp', []);

app.controller('controller', function ($scope) {

    $scope.taskList = new Array();
    $scope.taskName = "";

    var task = function (taskName) {
        this.titleName = taskName;
        this.isDone = false;
    };
    //creating start tasks and add to list to accomplish design request
    var wakeUp = new task("Wake Up");
    $scope.taskList.push(wakeUp);
    var sleep = new task("Sleep");
    $scope.taskList.push(sleep);

    $scope.addTask = function () {

        if (!containsTask($scope.taskName)) {

            $scope.taskList.push(new task($scope.taskName));
            $scope.atualizarDonePercentage();
        }
    };

    function containsTask(taskName) {

        for (var index = 0; index < $scope.taskList.length; index++) {

            var taskTitle = $scope.taskList[index].titleName;
            if (taskTitle === taskName) {return true;}
        }
        return false;
    };

    $scope.deleteTask = function (index) {

        var task = $scope.taskList[index];
        task.isDone = false;

        $scope.atualizeConcludedList(index);
        $scope.taskList.splice(index, 1);
        $scope.atualizarDonePercentage();
    };

    $scope.removeDoneTasks = function () {

        for (var index = 0; index < $scope.taskList.length; index++) {
            var task = $scope.taskList[index];
            if (task.isDone === true) {$scope.deleteTask(index)}
        }
    };

    $scope.concludedList = new Array();
    $scope.donePercentage = 0;

    $scope.atualizeConcludedList = function (index) {

        var task = $scope.taskList[index];

        var taskIndex = $scope.concludedList.indexOf(task);
        if(task.isDone === true &&  taskIndex < 0) {
            $scope.concludedList.push(task);
        }

        if(task.isDone === false && taskIndex >= 0) {
            $scope.concludedList.splice(taskIndex, 1);
        }
        $scope.atualizarDonePercentage();
    };

    $scope.atualizarDonePercentage = function () {
        $scope.donePercentage = Math.floor(($scope.concludedList.length / $scope.taskList.length) * 100);
        document.getElementById('progress-bar').style.width = $scope.donePercentage+"%";
    };


});

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
};