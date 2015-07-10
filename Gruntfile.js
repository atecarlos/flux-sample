'use strict';

var path = require('path'),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUNDLE_NAME = 'bundle',
	JS_BUNDLE = BUNDLE_NAME + '.js',
	CSS_BUNDLE = BUNDLE_NAME + '.css';

function fontMatcher(ext){
	return new RexExp('\.' + ext + '(\?\d*)?');
}

module.exports = function(grunt) {
	grunt.initConfig({
		webpack: {
			options: {
				entry: './js/app.js',
				output: {
					filename: JS_BUNDLE,
				},
				module: {
		    		loaders: [
		        		{
			                test: /\.js$/,
			                exclude: /(node_modules)/,
			                loader: 'babel'
		            	},
		            	{
		            		test: /\.scss$/,
		            		loader: ExtractTextPlugin.extract('style', 'css!sass')
		            	},
		            	{
		            		test: /\.css$/,
		            		loader: ExtractTextPlugin.extract('style', 'css')
		            	},
		            	{ test: fontMatcher('woff'),   loader: "url-loader?limit=10000&minetype=application/font-woff2" },
		            	{ test: fontMatcher('woff2'),  loader: "url-loader?limit=10000&minetype=application/font-woff" },
					    { test: fontMatcher('ttf'),    loader: "file-loader" },
					    { test: fontMatcher('eot'),    loader: "file-loader" },
					    { test: fontMatcher('svg'),    loader: "file-loader" }
		        	]
				},
				plugins: [
        			new ExtractTextPlugin(CSS_BUNDLE)
    			],
    			resolve: {
    				modulesDirectories: ["node_modules", "styles"]
    			}
			},
			dev: {
				devtool: 'source-map',
				output: {
					path: 'dev-build/',
					debug: true
				}
			},
			prod: {
				output: {
		    		path: './'
				}
			}
		},
		watch: {
			dev: {
				files: ['js/**/*', 'styles/*.scss'],
				tasks: ['eslint:all', 'webpack:dev'],
				options: {
					spawn: false,
					atBegin: true
				}
			}
		},
		copy: {
			prod: {
				files: [
					{ expand: true, src: [JS_BUNDLE], dest: 'build/js' },
					{ expand: true, src: [CSS_BUNDLE], dest: 'build/styles/' }
				]
			}
		},
		clean: {
			prod: [JS_BUNDLE, CSS_BUNDLE]
		},
		eslint: {      
			all: {
				src: ['js/**/*.js'],
				options: {
		            config: "eslint.json"
		        },
			}
	    },
	    jest: {
	    	options: {
	    		config: './jest.json',
	    		coverage: true,
	    		testPathPattern: /.*-test.js/
	    	}
	    }
	});

	function loadGruntTasks(){
		grunt.loadNpmTasks('grunt-webpack');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks("gruntify-eslint");
		grunt.loadNpmTasks("grunt-jest");
	}

  	loadGruntTasks();

	grunt.registerTask('dev-start', ['watch:dev']);
	grunt.registerTask('test', ['eslint:all', 'jest']);
	grunt.registerTask('production', ['webpack:prod', 'copy:prod', 'clean:prod']);
};