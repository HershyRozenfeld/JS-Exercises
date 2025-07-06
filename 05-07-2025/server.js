import {createServer} from "node:http";

const PORT = 4545;
const server = createServer((req,res) => {
    const {url,method} = req;
    console.log(`URL is: ${url}, METHOD is: ${method}`)
    switch(method){
        case "GET":
            switch(url){
                case "/":
                    res.end(`thanks for the GET request on /`);
                    break;
                case "/home":
                    res.end(`thanks for the GET request on /home`);
                    break;
                default:
                    res.end(`thanks for the GET request on ${url}`);
                    break
            }
            default:
            break;
    }
});

server.listen(PORT, ()=>{
    console.log(`server listening on port: ${PORT}`);
})







