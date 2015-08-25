/**
 *
 */
Meteor.publish('docs:pages', function(wiki){

    var query = {
        '_wiki': wiki
    };

    var options = {
        fields: {
            slug: 1
        }
    };

    return DocsPages.find(query, options);

});

/**
 *
 */
Meteor.publish('docs:page', function(wiki, page){

    var query = {
        '_wiki': wiki,
        slug: page
    };

    return DocsPages.find(query);

});
