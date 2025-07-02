// (1)
import { readFile } from 'node:fs'
function fileReaderPromise(path) {
    return new Promise ((res, rej) => {
        readFile(path, 'utf8', (err, data) => {
            if (err){
                rej(err);
            }
            else{
                res(data);
            }
        })
    })
}

fileReaderPromise('./pa.txt').then(content => {
    console.log('File content (Promise):');
    console.log(content);
}).catch(err => {
    console.error('Error reading file (Promise):', err);
})

// (2)

import { readFile } from 'node:fs/promises'

async function readFileAsync(path) {
    try{
        const data = await readFile(path, 'utf8');
        return data;
    } catch (err){
        console.error(err);
        throw err; // זריקת שגיאה למרות התפיסה של הטריי קאצ'
    }
}

readFileAsync('./a.txt').then(content => {
    console.log('File content (Promise):');
    console.log(content);
}).catch(err => {
    console.error('Error reading file (Promise):', err);
})