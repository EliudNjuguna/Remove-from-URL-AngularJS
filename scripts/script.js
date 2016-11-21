
/// <reference path="angular.min.js" />

var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider,$locationProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templetes/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Templetes/courses.html",
                        controller: "coursesController"
                    })
                    .when("/student", {
                        templateUrl: "Templetes/student.html",
                        controller: "studentController"
                    })
                    $locationProvider.html5Mode(true);
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server","JAVA","PHP","C++"];
            })
				.controller("studentController",function($scope){
					$scope.students = ["Mary","John","Mark","Samuel","James","Mathew","Paul"];
				})
			