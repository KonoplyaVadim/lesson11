var app=angular.module("SampleApp",[]);
app.controller("SampleAppCtrl", function ($scope) {
    $scope.items = { name: "Ivan", age: "18", city:"Kiev"};
});

app.controller("tabCtrl", function ($scope) {
    $scope.list = [{ name: "Иван", age: "18"},
        { name: "Сергей", age: "27"},
        { name: "Олег", age: "38"},
        { name: "Павел", age: "49"}];
});