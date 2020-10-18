
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
price INTEGER,
img TEXT
)

INSERT INTO products (name,price,img)
VALUES ('Some Product', '1000000', 'url path to an image')

INSERT INTO products (name,price,img)
VALUES ('Some Other Product', '10', 'url path to an image')