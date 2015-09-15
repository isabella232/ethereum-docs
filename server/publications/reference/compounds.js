Meteor.publish('docs:reference:compounds', function(version, project){

    var query = {
        '_version': version,
        '_project': project
    };

    var options = {
        fields: {
            body: 0
        }
    };

    return DocsReferenceCompounds.find(query, options);

});

Meteor.publish('docs:reference:compound', function(version, project, compound){

    var query = {
        '_version': version,
        '_project': project,
        slug: compound
    };

    var options = {};

    return DocsReferenceCompounds.find(query, options);

});
