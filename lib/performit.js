
(function(root) {
    var performit = {
        promise: function(fn) {
            return new Promise(fn);
        }
    };
    // performit.promise = angular.$q
    function Fund() {
        
    }
    Fund.list = function() {
        return performit.promise(function(resolve, reject) {
            try {
                $.ajax({
                    url: '/api/funds',
                    dataType: "json",
                    success: function(data) {
                        resolve(data);
                    },
                    error: function() {
                        reject(arguments);
                    }
                });
            }catch(e) {
                console.error(e.message);
            }
        });
    };
    performit.Fund = Fund;
    root.performit = performit;
})(this);