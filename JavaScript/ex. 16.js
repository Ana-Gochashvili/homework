const text = 'JavaScript is the programming language of HTML and the Web. ' +
    'JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.'
unWords(text);

function unWords(text) {
    for (let w of text) {
        console.log(w.text + ': ' + w.length)
    }
}