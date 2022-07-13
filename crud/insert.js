const dbConnect = require('../mongodbManager');

const insert = async () => {
    let db = await dbConnect();
    const result = await db.insert(
        [{name:'Little'},
        {name:'Ronaldo'},
        {name:'Ram'},
        {name:'Sham'}]
    );

    if (result.acknowledged) {
      console.log('result is' + result);
    }
}

insert();