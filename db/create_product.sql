INSERT INTO product (name, price, image) values ($1, $2, $3)
RETURNING name, price, image