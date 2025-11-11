const path = require("path");

const BASEPATH = '/Users/thrubus/Wordpress/thrubus/wp-daftar-harga-thrubus';

module.exports.Paths = {
    Basepath: BASEPATH,
    assets: path.join(BASEPATH, 'assets'),
    siteAssets: path.join(BASEPATH, 'examples', 'site', 'assets'),
}
