angular.module('firstApp.controllers', [])
  .controller('DashCtrl', function($scope) {})
.controller('ChatsCtrl',  function( $scope,Chats ) {


  $scope.doRefresh = function(){
    //console.log(Chats.all());
   Chats.all()
    .then(function(data) {
      // promise fulfilled
       $scope.chats =data.data;
       $scope.$broadcast('scroll.refreshComplete');
    }, function(error) {
       alert(error);
    });

  }
  $scope.remove = function(chat) {
    chats.remove(chat);
  };
} )

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
