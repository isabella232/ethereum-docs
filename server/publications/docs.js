/**
 * Retrieve basic information about all existing docs versions
 */
Meteor.publish('docs-versions', function () {
    return DocVersions.find({}, {
        fields: {
            'slug': 1
        }
    });
});

Meteor.publish('docs-version', function (version) {
    return DocVersions.find({slug: version});
});

/**
 *
 */
Meteor.publish('docs-articles', function (version) {
    return DocArticles.find({
        '_version': version
    }, {
        fields: {
            'slug': 1
        }
    });
});

Meteor.publish('docs-article', function (version, article) {
    return DocArticles.find({
        '_version': version,
        slug: article
    });
});

/**
 * Retrieve basic information about projects in selected docs version
 */
Meteor.publish('docs-projects', function (version) {
    return DocProjects.find({
        '_version': version
    }, {
        fields: {
            _version: 1,
            slug: 1,
            summary: 1
        }
    });
});

Meteor.publish('docs-project', function (version, project) {
    return DocProjects.find({
        '_version': version,
        slug: project
    });
});

/**
 * Retrieve basic information about compounds in selected project
 */
Meteor.publish('docs-compounds', function (version, project) {
    return DocCompounds.find({
        '_version': version,
        '_project': project
    }, {
        fields: {
            body: 0
        }
    });
});

/**
 * Retrieve complete definition of a particular compound
 */
Meteor.publish('docs-compound', function (version, project, compound) {
    return DocCompounds.find({
        '_version': version,
        '_project': project,
        'slug': compound
    });
});
