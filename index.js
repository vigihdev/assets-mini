'use strict';
// assets/index.js

const path = require('node:path');
const fs = require('node:fs');

const BASEPATH = __dirname;
const PATHS = {
    DIST: {
        CSS: path.join(BASEPATH, 'dist', 'css'),
        JS: path.join(BASEPATH, 'dist', 'js')
    },
    BUILDS: {
        CSS: path.join(BASEPATH, 'builds', 'css'),
        JS: path.join(BASEPATH, 'builds', 'js')
    },
};

const sass = {
    dist: {
        options: {
            sourceMap: false,
            'no-source-map': true,
            style: 'expanded'
        },
        files: {
            [`${PATHS.DIST.CSS}/style.css`]: `${BASEPATH}/src/scss/style.scss`
        }
    }
};

const concatFiles = {
    js: {
        [`${PATHS.DIST.JS}/style.js`]: `${BASEPATH}/src/js/*.js`,
    },
};

const watch = {
    js: [
        `${BASEPATH}/src/js/*.js`,
        `${BASEPATH}/src/js/*/*.js`,
    ],
    css: [
        `${BASEPATH}/src/scss/*.scss`,
        `${BASEPATH}/src/scss/*/*.scss`,
        `${BASEPATH}/src/scss/*/*/*.scss`,
    ]
}

// Export Configuration
module.exports.AssetsSass = {
    basepath: BASEPATH,
    sass: sass,
    concat: {
        options: {
            separator: ';'
        },
        dist: {
            files: { ...concatFiles.js },
        },
    },
    watch: watch,
};