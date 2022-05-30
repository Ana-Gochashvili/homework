const jsText = 'JavaScript is the programming language of HTML and the Web. ' +
    'JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.'

let arrOne = jsText.split(' ');

arrOne.forEach((word) => console.log(word + ':' + word.length));
