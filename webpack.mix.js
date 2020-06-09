const mix = require('laravel-mix');
const domain = "clayton.test";
const homedir = require('os').homedir();
mix.pug = require('laravel-mix-pug');

require('laravel-mix-tailwind');

mix
    .js('src/js/app.js', 'dist')
    .sass('src/scss/app.scss', 'dist')
    .pug('src/*.pug', '../dist', {
        pug: {
            pretty: true,
            debug: false
        }
    })
    .setPublicPath('dist')
    .tailwind('tailwind.config.js')
    .browserSync({
        proxy: 'https://' + domain,
        files: [
            'src/'
        ],
        host: domain,
        open: 'external',
        https: {
            key: homedir + '/.config/valet/Certificates/' + domain + '.key',
            cert: homedir + '/.config/valet/Certificates/' + domain + '.crt',
        },
    });
