app.controller('PostsCtrl', function ($scope, $location, Post) {
  $scope.posts = Post.all;

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
});
