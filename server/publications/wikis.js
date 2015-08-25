/**
 *
 */
Meteor.publish('docs:wikis', function(){

    var query = {};

    var options = {
        fields: {
            'slug': 1
        }
    };

    // TODO: find all expect for Tutorials
    return DocsWikis.find(query, options);

});

/**
 *
 */
Meteor.publish('docs:wiki', function(wiki){

    var query = {
        slug: wiki
    };

    return DocsWikis.find(query);

});
