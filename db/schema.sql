create database if not exists burgers_db;

use burgers_db;

create table burgers(
	id int auto_increment primary key not null,
    burger_name varchar(255),
    devoured bool
);