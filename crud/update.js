const dbConnect = require('../mongodbManager');

const update = async () => {
    let db = await dbConnect();
let result = await db.updateOne(
    {name:'Ronaldo'},
    {$set : {name: "CRonaldo"}}
)
if (result.acknowledged) {
    console.log(result);
}

}

update();