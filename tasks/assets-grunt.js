// assets-grunt.js
'use strict';

const AssetsSass = require('../index').AssetsSass

const COMMAND = 'assets';

/** @param {import("grunt")} grunt */
module.exports.AssetsGrunt = function (grunt) {

    grunt.task.registerTask(`${COMMAND}:watch`, 'Development', function () {
        grunt.initConfig({
            watch: {
                css: {
                    files: AssetsSass.watch.css,
                    tasks: [`${COMMAND}:dist:sass`, `site:dist`]
                },
                js: {
                    files: AssetsSass.watch.js,
                    tasks: [`${COMMAND}:dist:concat`, `site:dist`]
                }
            }
        })
        grunt.task.run(['watch'])
    });

    grunt.task.registerTask(`${COMMAND}:dist`, 'Development', function () {
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            sass: AssetsSass.sass,
            concat: AssetsSass.concat,
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

        grunt.task.run(['sass', 'concat'])

    });

    grunt.task.registerTask(`${COMMAND}`, `Default task`, [
        `${COMMAND}:dist`,
    ]);

};