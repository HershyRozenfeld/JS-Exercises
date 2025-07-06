import {createServer} from "node:http";
import {readDataFromFile} from "./crudUtils.js";

const PORT = 4545;
const server = createServer((req, res) => {
    const { url, method } = req;
    switch (method) {
        case "GET":
            switch(url){
                case "student":
                    readDataFromFile('./data/student.txt')
                        .then(data => {
                            res.writeHead(200);
                            res.end(data);
                        })
                        .catch(err => {
                            res.writeHead(500);
                            res.end(`Error reading student data: ${err}`);
                        });
                    break;
                case "teacher":
                    readDataFromFile('./data/teacher.txt')
                        .then(data => {
                            res.writeHead(200);
                            res.end(data);
                        })
                        .catch(err => {
                            res.writeHead(500);
                            res.end(`Error reading teacher data: ${err}`);
                        });
                    break;
                case "course":
                    readDataFromFile('./data/student.txt')
                        .then(data => {
                            res.writeHead(200);
                            res.end(data);
                        })
                        .catch(err => {
                            res.writeHead(500);
                            res.end(`Error reading student data: ${err}`);
                        });
                    readDataFromFile('./data/teacher.txt')
                        .then(data => {
                            res.writeHead(200);
                            res.end(data);
                        })
                        .catch(err => {
                            res.writeHead(500);
                            res.end(`Error reading teacher data: ${err}`);
                        });
                    break;
                default:
                    res.writeHead(404);
                    res.end(`Resource not found: ${url}`);
                    break;
            }
        default:
            res.writeHead(405);
            res.end(`Method not allowed: ${method}`);
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

readDataFromFile('./data/student.txt')
                        .then(data => {
                            console.log(`Student data: ${data}`);
                        })
                        .catch(err => {
                        });