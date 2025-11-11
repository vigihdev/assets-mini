const path = require("path");

const BASEPATH = path.resolve(__dirname);

module.exports.Paths = {
    Basepath: BASEPATH,
    assets: path.join(BASEPATH, 'assets'),
    siteAssets: path.join(BASEPATH, 'examples', 'site', 'assets'),
}
