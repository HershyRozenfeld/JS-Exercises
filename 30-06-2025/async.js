import {readFile, stat, readdir, path} from "node:fs";

// ✨ Exercise 1: File Reader with Stats
// Goal:
// ● Read a text file content.
// ● After that, print its size and creation date.
// ● Handle all operations using callbacks.

// Required Modules:
// ✅ fs
// Expected Output Example:
// File Content:
// Hello world, welcome to Node.js!
// Size: 35 bytes
// Created At: 2025-06-27T15:40:12.000Z

// function readTxt(){
//     const pathsToCheck = 'file.txt';

//     readFile(pathsToCheck, 'utf8', (err, data)=>{
//         if (err) throw err;
//         console.log(data);
//         stat(pathsToCheck, (err, stats)=>{
//             console.log(`Size: ${(stats.blksize / 1024).toFixed(2)}`);
//             const creationTime= new Date(stats.birthtime)
//             console.log(`Created At: ${creationTime.getFullYear()}/${creationTime.getMonth()}/${creationTime.getDate()} ${creationTime.getHours()}:${creationTime.getMinutes()}`);
//         })
//     })
// }

// readTxt()


// ✨ Exercise 2: Directory Files Only
// Goal:
// ● List only files (ignore folders) in the given directory.
// ● Use callbacks for all operations.

// Required Modules:
// ✅ fs
// ✅ path
// Expected Output Example:

// File: index.js
// File: notes.txt
// File: app.js


function listFilesInDirectory(directoryPath){
    stat(directoryPath, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error(`Listen, the path "${directoryPath}" doesn't exist. Maybe double-check what you're typing?`);
            } else {
                console.error(`Something cute went wrong while trying to check the path: ${err.message}`);
            }
            return;
        }

        if (!stats.isDirectory()) {
            console.error(`Come on, "${directoryPath}" isn't a folder. Maybe try giving me a real directory?`);
            return;
        }
        
        readdir(directoryPath, (err, files) => {
            if (err) {
                console.error(`Seriously? Couldn't even read the damn directory: ${err.message}`);
                return;
            }
            files.forEach(file => {
                const fullPath = path.join(directoryPath, file)

                stat(fullPath, (err, stats) => {
                    if (err) {
                    console.error(`Error while checking ${fullPath}: ${err.message}`);
                    return;
                    }

                    if (stats.isFile()) {
                        console.log(`File: ${file}`);
                    }
                })
            })
        })
    })
}


listFilesInDirectory('../30-06-2025');
listFilesInDirectory('./my_directory');
listFilesInDirectory('./async.js');
