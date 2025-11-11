'use strict';

const SiteSass = require('../config/site-sass').SiteSass

const COMMAND = 'site';

/** @param {import("grunt")} grunt */
module.exports.SiteGrunt = function (grunt) {

    grunt.task.registerTask(`${COMMAND}:dist`, 'Development', function () {
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            copy: SiteSass.copy
        }

        grunt.initConfig(initConfig)
        if (args.length > 0) {
            Object.keys(initConfig).forEach(k => {
                if (args.includes(k)) {
                    grunt.task.run([k])
                }
            })
            return;
        }

        grunt.task.run(['copy'])

    });

    grunt.task.registerTask(`${COMMAND}`, `Default task`, [
        `${COMMAND}:dist`,
    ]);

};