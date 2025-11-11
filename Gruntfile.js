// thrubus/wp-daftar-harga-thrubus/Gruntfile.js

const BASEPATH = '/Users/thrubus/VigihDev/NpmPackage/assets-mini';

/** @type {typeof import('./tasks')} */
const { AssetsGrunt, SiteGrunt } = require(`${BASEPATH}/tasks`)


/** @param {import("grunt")} grunt */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-shell');

    AssetsGrunt(grunt);
    SiteGrunt(grunt);

    grunt.registerTask(`test`, 'Test Grunt', async () => {
        grunt.log.writeln(__dirname)
        grunt.log.writeln(`BASEPATH : ${BASEPATH}`)
    })

};
