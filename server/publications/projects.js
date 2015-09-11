/**
 * Summaries of all projects under the selected version
 */
Meteor.publish('docs:projects', function(version){

    var query = {
        '_version': version,
        'type': 'project'
    };

    var options = {
        fields: {
            _version: 1,
            slug: 1,
            type: 1,
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
        'type': 'project',
        slug: project
    };

    return DocsProjects.find(query);

});
