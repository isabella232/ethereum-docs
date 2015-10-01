angular
    .module('ethdev')
    .filter('groupBy', function ($timeout) {
        return function (data, key) {
            if (!key) return data;
            var outputPropertyName = '__groupBy__' + key;
            if(!data[outputPropertyName]){
                var result = {};
                for (var i=0;i<data.length;i++) {
                    if (!result[data[i][key]])
                        result[data[i][key]]=[];
                    result[data[i][key]].push(data[i]);
                }
                Object.defineProperty(data, outputPropertyName, {enumerable:false, configurable:true, writable: false, value:result});
                $timeout(function(){delete data[outputPropertyName];},0,false);
            }
            return data[outputPropertyName];
        };
    })