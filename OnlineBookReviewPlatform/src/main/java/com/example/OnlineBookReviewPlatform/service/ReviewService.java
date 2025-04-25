package com.example.OnlineBookReviewPlatform.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineBookReviewPlatform.entity.Book;
import com.example.OnlineBookReviewPlatform.entity.Review;
import com.example.OnlineBookReviewPlatform.entity.User;
import com.example.OnlineBookReviewPlatform.repository.BookRepository;
import com.example.OnlineBookReviewPlatform.repository.ReviewRepository;

@Service
public class ReviewService {
    @Autowired private ReviewRepository reviewRepo;
    @Autowired private BookRepository bookRepo;
    public List<Review> getReviewsByBookId(UUID bookId) {
        return reviewRepo.findByBookId(bookId);
    }
    // public Review addReview(UUID bookId, User user, Review review) {
    //     Book book = bookRepo.findById(bookId).orElseThrow();
    //     review.setBook(book);
    //     review.setUser(user);
    //     review.setCreatedAt(LocalDateTime.now());
    //     return reviewRepo.save(review);
    // }
    public Review updateReview(UUID id, Review updated) {
        Review review = reviewRepo.findById(id).orElseThrow();
        review.setReviewText(updated.getReviewText());
        review.setRating(updated.getRating());
        return reviewRepo.save(review);
    }
    public void deleteReview(UUID id) {
        reviewRepo.deleteById(id);
    }
}
