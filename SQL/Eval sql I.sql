CREATE DATABASE HOTEL;

CREATE TABLE oclient(
cli_num INT NOT NULL,
cli_nom VARCHAR(50) NOT NULL,
cli_adresse VARCHAR(50) NOT NULL
cli_tel VARCHAR(30) NOT NULL
,CONSTRAINT oclient_PK PRIMARY KEY (cli_num)
);

CREATE TABLE commande(
com_num INT NOT NULL,
cli_num INT NOT NULL,
com_date DATETIME NOT NULL,
com_obs VARCHAR(50) NOT NULL
,CONSTRAINT commande_PK PRIMARY KEY (com_num)
,CONSTRAINT commande_oclient_FK FOREIGN KEY (cli_num) REFERENCES oclient (cli-num)
);

CREATE TABLE produit(
pro_num INT NOT NULL,
pro_libelle VARCHAR(50) NOT NULL,
pro_description VARCHAR(50) NOT NULL
,CONSTRAINT produit PRIMARY KEY (pro_num)
);

CREATE TABLE est_compose(
        com_num Int NOT NULL ,
        pro_num Int NOT NULL ,
        est_qte INT NOT NULL
    ,CONSTRAINT PRIMARY KEY (com_num,pro_num)
    ,CONSTRAINT est_compose_commande_FK FOREIGN KEY(com_num) REFERENCES commande(com_num)
    ,CONSTRAINT est_compose_produit_FK FOREIGN KEY(pro_num) REFERENCES produit(pro_num)
);


CREATE INDEX INDEX1 ON oclient(cli_nom)