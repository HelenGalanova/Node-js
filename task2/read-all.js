const fs = require('fs');
const conf = { encoding: 'utf8'};

const readData = (pathName) => {
    return new Promise ((done, error) => {
        fs.readdir(pathName, (err, files) => {
            if (err) {
                error(err);
            }else{
            done(files);
            }
        });
    });
};

const getFileContent = (file) => {
    return new Promise((done, error) => {
        fs.readFile(file, conf, (err, data) => {
            if (err) {
                error(err);
            }else {
            done({name: file, content: data});
            }
        });
    });
};

module.exports = (path) => {
    return readData(path)
           .then(files => Promise.all(files.map((fileName) => {
               return getFileContent(`${path}${fileName}`)
    })));
};
