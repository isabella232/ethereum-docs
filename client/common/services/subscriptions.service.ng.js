angular
    .module('ethdev')
    .factory('SubscriptionsService', SubscriptionsService);

/**
 * This factory is responsible for managing Meteor subscriptions
 * @param $meteor
 * @returns {{}}
 * @constructor
 */
function SubscriptionsService($meteor) {

    // Current subscriptions
    var subscriptions = [];

    var consoleSubscribeStyle = 'background: #3A9E00; color: #eeeeee;';
    var consoleUnsubscribeStyle = 'background: #9E1500; color: #eeeeee;';

    var referenceVersions = {
        subscribe: function(){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'All reference versions');
            subscribe('docs:reference:versions');
        },
        unsubscribe: function(){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'All reference versions');
            unsubscribe('docs:reference:versions');
        }
    };

    var referenceVersion = {
        subscribe: function(version){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'Reference version: ' + version);
            subscribe('docs:reference:version', [
                version
            ]);
        },
        unsubscribe: function(version){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'Reference version: ' + version);
            unsubscribe('docs:reference:version', [
                version
            ]);
        }
    };

    var referenceProjects = {
        subscribe: function(version){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'All projects in reference version: ' + version);
            subscribe('docs:reference:projects', [
                version
            ]);
        },
        unsubscribe: function(version){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'All projects in reference version: ' + version);
            unsubscribe('docs:reference:projects', [
                version
            ]);
        }
    };

    var referenceProject = {
        subscribe: function(version, project){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'Project: ' + project + ', version: ' + version);
            subscribe('docs:reference:project', [
                version,
                project
            ]);
        },
        unsubscribe: function(version, project){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'Project: ' + project + ', version: ' + version);
            unsubscribe('docs:reference:project', [
                version,
                project
            ]);
        }
    };

    var referenceCompounds = {
        subscribe: function(version, project){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'All compound in project: ' + project + ', version: ' + version);
            subscribe('docs:reference:compounds', [
                version,
                project
            ]);
        },
        unsubscribe: function(version, project){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'All compound in project: ' + project + ', version: ' + version);
            unsubscribe('docs:reference:compounds', [
                version,
                project
            ]);
        }
    };

    var referenceCompound = {
        subscribe: function(version, project, compound){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'Compound: ' + compound + ', project: ' + project + ', version: ' + version);
            subscribe('docs:reference:compound', [
                version,
                project,
                compound
            ]);
        },
        unsubscribe: function(version, project, compound){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'Compound: ' + compound + ', project: ' + project + ', version: ' + version);
            unsubscribe('docs:reference:compound', [
                version,
                project,
                compound
            ]);
        }
    };

    var wikiBooks = {
        subscribe: function(){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'All wiki books');
            subscribe('docs:wiki:books');
        },
        unsubscribe: function(){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'All wiki books');
            unsubscribe('docs:wiki:books');
        }
    };

    var wikiBook = {
        subscribe: function(book){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'Wiki book: ' + book);
            subscribe('docs:wiki:book', [
                book
            ]);
        },
        unsubscribe: function(book){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'Wiki book: ' + book);
            unsubscribe('docs:wiki:book', [
                book
            ]);
        }
    };

    var wikiPages = {
        subscribe: function(book){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'All pages in wiki book: ' + book);
            subscribe('docs:wiki:pages', [
                book
            ]);
        },
        unsubscribe: function(book){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'All pages in wiki book: ' + book);
            unsubscribe('docs:wiki:pages', [
                book
            ]);
        }
    };

    var wikiPage = {
        subscribe: function(book, page){
            console.log('%c + Subscription ', consoleSubscribeStyle, 'Page: ' + page + ', book: ' + book);
            subscribe('docs:wiki:page', [
                book,
                page
            ]);
        },
        unsubscribe: function(book, page){
            console.log('%c - Subscription ', consoleUnsubscribeStyle, 'Page: ' + page + ', book: ' + book);
            unsubscribe('docs:wiki:page', [
                book,
                page
            ]);
        }
    };

    return {
        reference: {
            versions: referenceVersions,
            version: referenceVersion,
            projects: referenceProjects,
            project: referenceProject,
            compounds: referenceCompounds,
            compound: referenceCompound
        },
        wiki: {
            books: wikiBooks,
            book: wikiBook,
            pages: wikiPages,
            page: wikiPage
        }
    };

    function subscribe(key, args){

        // If no arguments supplied
        args = typeof args !== 'undefined' ? args : [];

        // Copy args array by value
        var subscribeParams = args.slice();

        // Append key as a first element
        subscribeParams.unshift(key);

        $meteor.subscribe.apply(this, subscribeParams).then(function(subscriptionHandle){

            if (!subscriptions[key]){
                subscriptions[key] = []
            }

            var argString = _arrayToString(args);

            subscriptions[key][argString] = subscriptionHandle;

        });

    }

    function unsubscribe(key, args){

        // If no arguments supplied
        args = typeof args !== 'undefined' ? args : [];

        if (subscriptions[key]) {

            var argString = _arrayToString(args);

            if (subscriptions[key][argString]) {
                subscriptions[key][argString].stop();
                delete subscriptions[key][argString];
            }

        }

    }

    function _arrayToString(arr){
        return arr.join(":");
    }

}
