DROP DATABASE IF EXISTS scrapbook;
CREATE DATABASE scrapbook;
USE scrapbook;

CREATE TABLE users(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
userpass varchar(100) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE files(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
file_type varchar(100) NOT NULL,
file_name varchar(100) NULL,
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

INSERT INTO files (id, file_type, file_name)
VALUES (1, "txt", "sample_data");

INSERT INTO files (id, file_type, file_name)
VALUES (2, "txt", "data");

INSERT INTO files (id, file_type, file_name)
VALUES (3, "txt", "stuff");

INSERT INTO files (id, file_type, file_name)
VALUES (4, "txt", "morestuff");

INSERT INTO files (id, file_type, file_name)
VALUES (5, "txt", "all_the_stuff");

INSERT INTO files (id, file_type, file_name)
VALUES (6, "txt", "omg_stuff");

INSERT INTO files (id, file_type, file_name)
VALUES (7, "txt", "stuff_for_days");

INSERT INTO files (id, file_type, file_name)
VALUES (8, "txt", "why_not_more_stuff");