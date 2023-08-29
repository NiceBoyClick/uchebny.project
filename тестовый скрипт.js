'use Strict';

let arr = [
    'dfgdf.html',
    'http://return',
    'dfgfdg.html',
    'http://false',
    '.htmlsogfjhf',
];

const httpUrls = arr.filter(function (url) {
    return url.endsWith(".html");
});

console.log(httpUrls);

