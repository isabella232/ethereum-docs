Meteor.publish('docs:wiki:pages', function(book){

    var query = {
        '_book': book
    };

    var options = {
        fields: {
            body: 0
        }
    };

    return DocsWikiPages.find(query, options);

});

Meteor.publish('docs:wiki:page', function(book, page){

    var query = {
        '_book': book,
        slug: page
    };

    var options = {};

    return DocsWikiPages.find(query, options);

});
