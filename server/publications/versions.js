/**
 * Slugs of all documentation versions
 */
Meteor.publish('docs:versions', function(){

    var query = {};

    var options = {
        fields: {
            'slug': 1
        }
    };

    return DocsVersions.find(query, options);

});

/**
 * Complete information about the particular version
 */
Meteor.publish('docs:version', function(version){

    var query = {
        slug: version
    };

    return DocsVersions.find(query);

});
