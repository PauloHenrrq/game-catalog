CREATE TABLE produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE jogo (
    id_jogo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    plataforma VARCHAR(50),
    estoque INT,
    id_produto INT,
    
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);


INSERT INTO produto (nome, preco) VALUES
('Minecraft', 99.90),
('FIFA 25', 299.90),
('GTA V', 149.90),
('The Witcher 3', 129.90),
('God of War Ragnarök', 249.90),
('Forza Horizon 5', 199.90),
('Resident Evil 4', 179.90),
('Elden Ring', 249.90),
('Super Mario Odyssey', 299.90),
('Red Dead Redemption 2', 199.90);

INSERT INTO jogo (nome, genero, plataforma, estoque, id_produto) VALUES
('Minecraft', 'Sandbox', 'PC', 20, 1),
('FIFA 25', 'Esporte', 'PlayStation 5', 15, 2),
('GTA V', 'Ação', 'PC', 10, 3),
('The Witcher 3', 'RPG', 'PC', 12, 4),
('God of War Ragnarök', 'Ação', 'PlayStation 5', 8, 5),
('Forza Horizon 5', 'Corrida', 'Xbox', 14, 6),
('Resident Evil 4', 'Terror', 'PlayStation 5', 9, 7),
('Elden Ring', 'RPG', 'PC', 11, 8),
('Super Mario Odyssey', 'Aventura', 'Nintendo Switch', 7, 9),
('Red Dead Redemption 2', 'Ação', 'PC', 13, 10);

