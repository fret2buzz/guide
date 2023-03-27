'use strict';

const path = require('path');

function getAdditionalPages(templates, dest, constants, indexSrc) {
    let additionalPages = [];

    additionalPages.unshift({
        id: 'icons',
        title: 'Icons',
        src: indexSrc,
        target: path.join(dest, '/icons.html'),
        type: 'icons',
        icon: 'icons',
        isDeprecated: false,
        subPages: []
    });

    additionalPages.push({
        id: 'index',
        title: 'About',
        src: indexSrc,
        target: path.join(dest, '/index.html'),
        type: 'about',
        icon: 'info-16',
        isDeprecated: false,
        subPages: []
    });

    if (constants.isDefined) {
        additionalPages.unshift({
            id: 'styleguide',
            title: 'Styleguide',
            src: '',
            target: path.join(dest, '/styleguide.html'),
            template: 'styleguide',
            type: 'styleguide',
            icon: 'book-16',
            isDeprecated: false,
            subPages: []
        });
    }

    return additionalPages;
}

module.exports = getAdditionalPages;
