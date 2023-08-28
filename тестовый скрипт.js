'use Strict';

let arr = [
    'dfgdf',
    'http://return',
   'dfgfdg',
    'http://false',
    'sogfjhf',
];

const httpUrls = arr.filter(function(url) {
    return url.startsWith("http://");
});

console.log(httpUrls);

