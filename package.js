Package.describe({
    name: "altapp:articles",
	summary: "Meteor package for determining indefinite articles (a vs. an) for English words.",
	git: "https://github.com/Altapp/Meteor-Articles.git",
    version: "0.2.0",
});

/* This defines your actual package */
Package.onUse(function (api) {
	// If no version is specified for an 'api.use' dependency, use the
	// one defined in Meteor 0.9.0.
	api.versionsFrom('METEOR@0.9.0');

    //api.use("handlebars", "client");

	//api.addFiles("helpers.js", "client");
	api.addFiles("articles.js", ["server", "client"]);

    api.export && api.export(["articlize", "findArticle"], ["server", "client"]);
});
