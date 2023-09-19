CREATE TABLE product (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price decimal(10, 2),
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);