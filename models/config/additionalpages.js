'use strict';

const path = require('path');

function getAdditionalPages(templates, dest, constants, indexSrc) {
    let additionalPages = [];

    additionalPages.unshift({
        id: 'colors',
        title: 'Colors',
        src: indexSrc,
        target: path.join(dest, '/colors.html'),
        template: 'colors',
        type: 'colors',
        isDeprecated: false,
        subPages: [
            {
                id: 'colors-theme-1',
                title: 'Theme #1',
                src: indexSrc,
                target: path.join(dest, '/colors-theme-1.html'),
                template: 'colors',
                type: 'colors',
                isDeprecated: false,
                subPages: []
            },
            {
                id: 'colors-theme-2',
                title: 'Theme #2',
                src: indexSrc,
                target: path.join(dest, '/colors-theme-2.html'),
                template: 'colors',
                type: 'colors',
                isDeprecated: false,
                subPages: []
            }
        ]
    });

    additionalPages.unshift({
        id: 'icons',
        title: 'Icons',
        src: indexSrc,
        target: path.join(dest, '/icons.html'),
        template: 'icons',
        type: 'icons',
        isDeprecated: false,
        subPages: []
    });

    additionalPages.push({
        id: 'index',
        title: 'About',
        src: indexSrc,
        target: path.join(dest, '/index.html'),
        template: 'about',
        type: 'about',
        isDeprecated: false,
        subPages: []
    });

    // if (constants.isDefined) {
    //     additionalPages.unshift({
    //         id: 'styleguide',
    //         title: 'Styleguide',
    //         src: '',
    //         target: path.join(dest, '/styleguide.html'),
    //         template: 'styleguide',
    //         type: 'styleguide',
    //         isDeprecated: false,
    //         subPages: []
    //     });
    // }

    return additionalPages;
}

module.exports = getAdditionalPages;
