Meteor.publish('docs:reference:projects', function(version){

    var query = {
        '_version': version
    };

    var options = {
        fields: {
            body: 0
        }
    };

    return DocsReferenceProjects.find(query, options);

});

Meteor.publish('docs:reference:project', function(version, project){

    var query = {
        '_version': version,
        slug: project
    };

    var options = {};

    return DocsReferenceProjects.find(query, options);

});
