const dbConnect = require('../mongodbManager');

// dbConnect().then((resp)=> {
// resp.find({name : 'Miller'}).toArray().then((data)=> {
// console.log(data);
// })
// })

const main = async () => {
    let data = await dbConnect();
    data = await data.find({name:'Miller'}).toArray();
    console.warn(data);
    }
    
main();