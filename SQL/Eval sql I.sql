CREATE DATABASE HOSTEL;

CREATE TABLE patron(
ptr_num INT NOT NULL,
ptr_nom VARCHAR(50) NOT NULL,
ptr_adresse VARCHAR(50) NOT NULL,
ptr_tel VARCHAR(30) NOT NULL
,CONSTRAINT patron_PK PRIMARY KEY (ptr_num)
);

CREATE TABLE order(
ordr_num INT NOT NULL,
ptr_num INT NOT NULL,
ordr_date DATETIME NOT NULL,
ordr_obs VARCHAR(50) NOT NULL
,CONSTRAINT order_PK PRIMARY KEY (ordr_num)
,CONSTRAINT order_patron_FK FOREIGN KEY (ptr_num) REFERENCES patron (cli-num)
);

CREATE TABLE product(
prd_num INT NOT NULL,
pro_libelle VARCHAR(50) NOT NULL,
pro_description VARCHAR(50) NOT NULL
,CONSTRAINT product PRIMARY KEY (pro_num)
);

CREATE TABLE est_compose(
        ordr_num Int NOT NULL ,
        pro_num Int NOT NULL ,
        est_qte INT NOT NULL 
    ,CONSTRAINT PRIMARY KEY (ordr_num,pro_num)
    ,CONSTRAINT est_compose_order_FK FOREIGN KEY(ordr_num) REFERENCES order(ordr_num)
    ,CONSTRAINT est_compose_product_FK FOREIGN KEY(pro_num) REFERENCES product(pro_num)
);


CREATE INDEX INDEX1 ON patron(ptr_nom)