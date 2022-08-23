package com.example.Library_management.models;

import javax.persistence.*;

@Entity
@Table(name = "BookDetails")

public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BookID;

    @Column(name = "Book_Name")
    private String BookName;

    @Column(name = "Author_Name")
    private String AuthorName;

    @Column(name = "Publisher_Name")
    private  String PublisherName;

    public Books(){

    }
    public Books(String bookName, String authorName, String publisherName) {
        BookName = bookName;
        AuthorName = authorName;
        PublisherName = publisherName;
    }

    public Long getBookID() {
        return BookID;
    }

    public void setBookID(Long bookID) {
        BookID = bookID;
    }

    public String getBookName() {
        return BookName;
    }

    public void setBookName(String bookName) {
        BookName = bookName;
    }

    public String getAuthorName() {
        return AuthorName;
    }

    public void setAuthorName(String authorName) {
        AuthorName = authorName;
    }

    public String getPublisherName() {
        return PublisherName;
    }

    public void setPublisherName(String publisherName) {
        PublisherName = publisherName;
    }
}
