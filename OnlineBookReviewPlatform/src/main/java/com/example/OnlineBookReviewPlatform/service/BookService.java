package com.example.OnlineBookReviewPlatform.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineBookReviewPlatform.entity.Book;
import com.example.OnlineBookReviewPlatform.repository.BookRepository;

@Service
public class BookService {
    @Autowired private BookRepository bookRepo;
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }
    public Optional<Book> getBook(UUID id) {
        return bookRepo.findById(id);
    }
    public Book save(Book book) {
        return bookRepo.save(book);
    }
    public void delete(UUID id) {
        bookRepo.deleteById(id);
    }
}