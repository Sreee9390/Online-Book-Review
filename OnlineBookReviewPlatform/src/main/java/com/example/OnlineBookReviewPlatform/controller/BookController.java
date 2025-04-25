package com.example.OnlineBookReviewPlatform.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineBookReviewPlatform.entity.Book;
import com.example.OnlineBookReviewPlatform.service.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks(@RequestParam Optional<String> title) {
        return bookService.getBooks(title.orElse(""));
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable UUID id) {
        return bookService.getBook(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Book addBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Book updateBook(@PathVariable UUID id, @RequestBody Book book) {
        return bookService.update(id, book);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteBook(@PathVariable UUID id) {
        bookService.delete(id);
    }
}
