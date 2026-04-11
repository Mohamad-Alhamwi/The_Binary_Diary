/** Credit where it’s due. This plugin code is taken from this great blog: https://www.avonture.be/ */

module.exports = function () {
    return {
        name: "docusaurus-plugin-tag-route",
        async contentLoaded({ actions }) {
            actions.addRoute({
                path: "/blog/tags/:tag",
                component: "@site/src/components/Blog/Tags/TagArticlesPage",
                exact: true,
            });
        },
    };
};