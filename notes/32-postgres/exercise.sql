-- day32 exercises

-- exercise a
SELECT citrus.name AS fruit, stock.quantity AS instock FROM citrus INNER JOIN stock ON citrus.id = stock.citrus_id WHERE citrus.color = 'orange' AND stock.quantity > 0;

-- exercise b
SELECT * FROM citrus INNER JOIN stock ON citrus.id = stock.citrus_id WHERE citrus.color = 'orange' AND stock.quantity > 0;

-- SELECT * FROM citrus INNER JOIN stock ON citrus.id = stock.citrus_id ORDER BY citrus.id ASC;

-- exercise c
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL Serializable;

UPDATE stock SET quantity = quantity + 20 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'lemon';

UPDATE stock SET quantity = quantity + 40 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'orange';

UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'orange';

UPDATE stock SET quantity = quantity + 40 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'lime';

UPDATE stock SET quantity = quantity - 30 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'lemon';

UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'lime';

UPDATE stock SET quantity = quantity + 40 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'grapefruit';

UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id = citrus.id AND name = 'grapefruit';

COMMIT;