package com.bookreview.dto;



public class ReviewRequest {
    // @NotNull(message = "Rating is required")
    // @Min(value = 1, message = "Rating must be at least 1")
    // @Max(value = 5, message = "Rating must be at most 5")
    private Integer rating;

  //  @NotBlank(message = "Review text cannot be empty")
    private String reviewText;

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    
}