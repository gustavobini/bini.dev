import React from 'react';

const post = {
  title: 'The download attribute on an anchor tag',
  content: {
    p:
      'Many of us are familiar with the download attribute in an anchor tag, such as:',
    code:
      '<a href="https://bini.dev/static/bini.jpeg" download="bini_face.jpg" >download my face</a>',
    p:
      'What it does is pretty straight forward: it prompts the user to download the file instead of trying to navigate there.',
    p:
      'Today, while creating a anchor to download a static file from a cdn, I learned that this attribute does not work with different origins.',
    p:
      'Say, for instance, if you click this link, it will not work. The code for the link is this:',
    code: '<a href="https://mdn.com/file.exe" download="file.exe">link</a>'
  }
};
