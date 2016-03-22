/* @ngInject */
module.exports = function SearchCtrl($state, FlickrService) {
    'use strict';
    var ctrl = this;
    ctrl.displayText = 'Flickr Photos';
    ctrl.tags = $state.params.tag;
    ctrl.size = 'm';

    FlickrService.search({ tags: ctrl.tags }, function (data) {
        ctrl.photos = data.photos.photo;
    });

    ctrl.changeTag = function () {
        $state.go('search', { tag: ctrl.tags });
    };

};
