create table FAVORITES (
    ID serial,
    FAVORITE_INFO varchar(200) NOT NULL UNIQUE,
    CATEGORY_ID varchar(100),
    USER_ID varchar(100)
);