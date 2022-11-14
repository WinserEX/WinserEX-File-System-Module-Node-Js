const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!");
//     if (err) throw err;
// });

// console.log("I come after");

try {
        fs.mkdirSync(folderName);
        fs.writeFileSync(`${folderName}/index.html`, '')
        fs.writeFileSync(`${folderName}/app.js`, '')
        fs.writeFileSync(`${folderName}/style.css`, '')
        console.log(`"Your Js template is ready, you can find it within" ${folderName}`)
}

catch(e) {
    console.log(e);
}