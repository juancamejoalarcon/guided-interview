import mv from 'mv';
import path from 'path';
import fs from 'fs';

// Move all files with .d.ts extension from src/lib to types
function fromDir(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.endsWith(filter)) {
            mv(`./${filename}`, `./${filename.replace('src/lib/', 'types/')}`, { mkdirp: true }, function (err) {
                if (err) console.log('error', err);
            });
        };
    };
};

fromDir('./src/lib', '.d.ts');
