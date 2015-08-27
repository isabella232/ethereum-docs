/**
 * Summaries of all compounds under the selected project
 */
Meteor.publish('docs:compounds', function(version, project){

    var query = {
        '_version': version,
        '_project': project
    };

    var options = {
        fields: {
            _version: 1,
            _project: 1,
            slug: 1
        }
    };

    return DocsCompounds.find(query, options);

});

/**
 * Complete information about the particular compound
 */
Meteor.publish('docs:compound', function(version, project, compound){

    var query = {
        '_version': version,
        '_project': project,
        slug: compound
    };

    return DocsCompounds.find(query);

});
