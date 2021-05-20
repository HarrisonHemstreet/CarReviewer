CREATE TABLE cars (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	make VARCHAR(50) NOT NULL,
	model VARCHAR(50) NOT NULL,
	price_range INT NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);

CREATE TABLE reviews (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	car_id BIGINT NOT NULL REFERENCES cars(id),
	name VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL check(rating >=1 AND rating <=5)
);
