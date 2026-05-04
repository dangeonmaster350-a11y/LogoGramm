package com.logagramm.models;

public class User {
    private String id, name, username, phone, avatar;
    private boolean premium;
    private long premiumUntil;
    private ArrayList<String> nftOwned;
    
    public User(String id, String name, String username, String phone) {
        this.id = id; this.name = name; this.username = username; this.phone = phone;
        this.nftOwned = new ArrayList<>();
    }
    // Getters, Setters, toJson/fromJson...
}