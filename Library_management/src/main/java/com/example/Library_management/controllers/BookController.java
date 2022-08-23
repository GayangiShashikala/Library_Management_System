package com.example.Library_management.controllers;

import com.example.Library_management.models.Books;
import com.example.Library_management.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.InvalidPropertiesFormatException;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    //get all books

    @GetMapping("/Books")
    public List<Books> getAllBooks(){

        return bookRepository.findAll();
    }

    //insert
    @PostMapping(path = "/Books")
    void insertDetails(@RequestBody Books books)
    {
        bookRepository.save(books);

    }


    // delete student rest api
    @DeleteMapping("/Books/{BookID}")
    public ResponseEntity<Map<String, Boolean>> deleteBooks(@PathVariable long BookID){
        Books book = bookRepository.findById(BookID)
                .orElseThrow(() -> {
                    return new InvalidConfigurationPropertyValueException("Book not exist " , bookRepository,"");
                });

        bookRepository.delete(book);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    // get book by id rest api
    @GetMapping("/Books/{BookID}")
    public ResponseEntity<Books> getEmployeeById(@PathVariable long BookID) {
        Books books = bookRepository.findById(BookID)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Book not exist " , bookRepository,""));
        return ResponseEntity.ok(books);
    }

    // update book by id rest api
    @PutMapping("/Books/{BookID}")
    public ResponseEntity<Books> updateBooks(@PathVariable long BookID, @RequestBody Books booksObject){
        Books books = bookRepository.findById(BookID)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Book not exist " , bookRepository,""));

        books.setBookName(booksObject.getBookName());
        books.setAuthorName(booksObject.getAuthorName());
        books.setPublisherName(booksObject.getPublisherName());



        Books updatedBooks = bookRepository.save(books);
        return ResponseEntity.ok(updatedBooks);
    }
}
