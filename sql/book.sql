CREATE TABLE Book (
    bookId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(80) NOT NULL,
    author VARCHAR(80) NOT NULL,
    CONSTRAINT pkBookId PRIMARY KEY (bookId)
);

CREATE TABLE Page {
    pageId INT NOT NULL AUTO_INCREMENT,
    pageNumber INT NOT NULL,
    textArea VARCHAR(367),
    pictureId INT NOT NULL,
    CONSTRAINT pkPageId PRIMARY KEY (pageId),
    CONSTRAINT fkPictureId FOREIGN KEY (pictureId) REFERENCES Picture(imageId)
};

CREATE TABLE Picture (
    pictureId INT NOT NULL,
    nameFile VARCHAR(100) NOT NULL,
    CONSTRAINT pkPictureId PRIMARY KEY(pictureId)
);