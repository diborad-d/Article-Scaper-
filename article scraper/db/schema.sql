CREATE DATABASE article_db;
USE article_db;

CREATE TABLE articles
(
	id int NOT NULL AUTO_INCREMENT,
	Headline VARCHAR(255),
	Summary VARCHAR(255),
	Link varchar(255),
	Date_saved DATETIME,
	PRIMARY KEY (id)
);