package com.logagramm.models;

public class Message {
    private String id, authorId, content, type;
    private long timestamp;
    private ArrayList<Reaction> reactions;
    
    public Message(String id, String authorId, String content, String type, long timestamp) {
        this.id = id; this.authorId = authorId; this.content = content; 
        this.type = type; this.timestamp = timestamp; this.reactions = new ArrayList<>();
    }
    // Getters...
}