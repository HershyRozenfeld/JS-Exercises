import {readFile} from 'node:fs/promises';

export const readDataFromFile = async (filePath) => {
    try {
        const data = await readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error(`Error reading file from disk: ${error}`);
    }
};
// readDataFromFile('./data/student.txt')
//     .then(data => {
//         console.log(`Student data: ${data}`);
//     })
//     .catch(err => {
//         console.error(`Error: ${err}`);
//     });