const path = require("path");
const Paths = require("./paths").Paths;


// Copy Files Configuration
const copyFiles = [
    { expand: true, cwd: path.join(Paths.assets, 'dist', 'js'), src: ['style.js'], dest: path.join(Paths.siteAssets, 'js') },
    { expand: true, cwd: path.join(Paths.assets, 'dist', 'css'), src: ['style.css'], dest: path.join(Paths.siteAssets, 'css') },
];
// Export Configuration
module.exports.SiteSass = {
    copy: {
        main: {
            files: copyFiles
        }
    },
};