Meteor.publish('docs:reference:versions', function(){

    var query = {};

    var options = {};

    return DocsReferenceVersions.find(query, options);

});

Meteor.publish('docs:reference:version', function(version){

    var query = {
        slug: version
    };

    var options = {};

    return DocsReferenceVersions.find(query, options);

});
