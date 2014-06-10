'use strict';

angular.module('investApp')
  .directive('activeb', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
       
                attrs.cycle({  
            fx:     'scrollHorz', 
            speed:  'slow', 
            timeout: 1000, 
            prev:   '.move-left',  
            next:   '.move-right' 
        });
      }
    };
  });

