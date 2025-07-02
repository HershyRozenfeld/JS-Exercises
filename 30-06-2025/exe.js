import { error } from "node:console";
import {readFile, writeFile} from "node:fs";


function readFiles(path){
    readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        const upperData = data.toUpperCase()
        writeFile('b.txt', upperData, (err) => {
            if (err) throw err;
        })
    })
}


const path = "./a.txt";
readFiles(path);

