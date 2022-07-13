const dbConnect = require('../mongodbManager');

const deleteData = async () => {
    let db = await dbConnect();
    let result = await db.deleteMany(
        {name:'Sham'}
        )

        if (result.acknowledged) {
            console.log(result);
        }
}

deleteData();