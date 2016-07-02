angular.module('Trello')

.controller('MainController', function ($scope, dataService) {

  // $http.get('/api/hello-world')
  // .then(function(response) {
  //   console.log(response)
  // })

  // var newTask = {
  //   text: 'Do laundry.'
  // }
  //
  // $http.post('/api/task', newTask)
  // .then(function(response) {
  //   console.log(response);
  // });

  dataService.getAllData()
    .then(function(response) {
      $scope.lists = response.data;
      console.log(response);
    })
    .catch(function(err) {
      console.error(err);
    })

    $scope.addTask = function(listIndex, newTask) {
      dataService.addTask(listIndex, newTask)
      .then(function(response) {
        console.warn(response)
        $scope.lists[listIndex].tasks.push(response.data);
      })
      .catch(function(err) {
        console.error(err);
      })
    }

  // $scope.addTask = function() {
  //   dataService.getData();
  // }


});
