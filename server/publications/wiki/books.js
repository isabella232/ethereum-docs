Meteor.publish('docs:wiki:books', function(){

    var query = {};

    var options = {
        fields: {
            body: 0
        }
    };

    return DocsWikiBooks.find(query, options);

});

Meteor.publish('docs:wiki:book', function(book){

    var query = {
        slug: book
    };

    var options = {};

    return DocsWikiBooks.find(query, options);

});
