/**
 * Summaries of all projects under the selected version
 */
Meteor.publish('docs:projects', function(version){

    var query = {
        '_version': version
    };

    var options = {
        fields: {
            _version: 1,
            slug: 1,
            summary: 1
        }
    };

    return DocsProjects.find(query, options);

});

/**
 * Complete information about the particular project
 */
Meteor.publish('docs:project', function(version, project){

    var query = {
        '_version': version,
        slug: project
    };

    return DocsProjects.find(query);

});
