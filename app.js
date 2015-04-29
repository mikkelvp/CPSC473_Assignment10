var app = angular.module('Comments', []);

app.controller('CommentsCtrl', function($scope) {
    $scope.comment = '';
    $scope.comments = [];

    $scope.addCommentFromInputBox = function() {
        $scope.comments.push($scope.comment);
        $scope.comment = '';
    };
});

// directive from http://stackoverflow.com/a/17472118
app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
