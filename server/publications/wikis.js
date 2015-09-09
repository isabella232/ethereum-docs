/**
 * Summaries of all wikis
 */
Meteor.publish('docs:wikis', function(version){

    var query = {
        '_version': version,
        'type': 'wiki'
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
 * Complete information about the particular wiki
 */
Meteor.publish('docs:wiki', function(project){

    var query = {
        '_version': 'develop',
        'type': 'wiki',
        slug: project
    };

    return DocsProjects.find(query);

});
