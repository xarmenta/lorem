/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.components:modal",["require","modal/modules/video","modal/modules/newsletter","modal/modules/photo.gallery"],function(require){var App=function(){};return App.prototype.video=function(props){return new(require("modal/modules/video"))(props)},App.prototype.newsletter=function(props){return new(require("modal/modules/newsletter"))(props)},App.prototype.photoGallery=function(props){return new(require("modal/modules/photo.gallery"))(props)},new App});