package com.example.OnlineBookReviewPlatform.controller;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineBookReviewPlatform.service.ReviewService;

@RestController
@RequestMapping("/api/books/{bookId}/reviews")
public class ReviewController {
    @Autowired private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<?> addReview(@PathVariable UUID bookId, @RequestBody ReviewRequest request, Principal principal) {
        return reviewService.addReview(bookId, request, principal.getName());
    }

    @GetMapping
    public List<ReviewResponse> getReviews(@PathVariable UUID bookId) {
        return reviewService.getReviews(bookId);
    }
}

