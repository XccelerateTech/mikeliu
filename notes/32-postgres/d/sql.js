const getDataSql = 
    "SELECT name, quantity " +  
    "FROM citrus INNER JOIN stock ON citrus.id = stock.citrus_id " + 
    "WHERE citrus.name = $1";

const buySql = 
    "UPDATE stock SET quantity = quantity + $1 " + 
    "FROM citrus " + 
    "WHERE stock.citrus_id = citrus.id " + 
    "AND name = $2";

const sellSql = 
    "UPDATE stock SET quantity = quantity - $1 " + 
    "FROM citrus " + 
    "WHERE stock.citrus_id = citrus.id " + 
    "AND name = $2";


module.exports.getDataSql = getDataSql;
module.exports.buySql = buySql;
module.exports.sellSql = sellSql;


    // SELECT name, quantity 
    // FROM citrus INNER JOIN stock ON citrus.id = stock.citrus_id 
    // WHERE citrus.name = 'lemon';

    // UPDATE stock SET quantity = quantity + 100
    // FROM citrus 
    // WHERE stock.citrus_id = citrus.id 
    // AND name = 'lemon';

    // UPDATE stock SET quantity = quantity - 100
    // FROM citrus 
    // WHERE stock.citrus_id = citrus.id 
    // AND name = 'lemon';

// "BUY","lemon",20
// "BUY","orange",10
// "SELL","orange",10
// "BUY","lime",10
// "SELL","lemon",10
// "SELL","lime",5
// "BUY","grapefruit",40
// "SELL","grapefruit",20
// "SELL","orange",68