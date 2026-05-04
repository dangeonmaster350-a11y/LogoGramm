package com.logagramm;

import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import java.io.IOException;
import java.util.ArrayList;

public class ChatActivity extends AppCompatActivity {
    
    private RecyclerView messagesRecyclerView;
    private MessageAdapter messageAdapter;
    private EditText messageInput;
    private ImageButton sendBtn, micBtn, stickerBtn;
    private TextView chatTitle;
    private String chatId;
    private ArrayList<Message> messages = new ArrayList<>();
    
    private MediaRecorder mediaRecorder;
    private String voiceFilePath;
    private boolean isRecording = false;
    private Handler handler = new Handler();
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat);
        
        chatId = getIntent().getStringExtra("chat_id");
        chatTitle = findViewById(R.id.chatTitle);
        messagesRecyclerView = findViewById(R.id.messagesRecyclerView);
        messageInput = findViewById(R.id.messageInput);
        sendBtn = findViewById(R.id.sendBtn);
        micBtn = findViewById(R.id.micBtn);
        stickerBtn = findViewById(R.id.stickerBtn);
        
        messagesRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        loadMessages();
        
        sendBtn.setOnClickListener(v -> sendTextMessage());
        
        // Голосовое сообщение (зажать для записи)
        micBtn.setOnLongClickListener(v -> {
            startRecording();
            return true;
        });
        micBtn.setOnClickListener(v -> stopRecording());
        
        // Стикеры
        stickerBtn.setOnClickListener(v -> showStickerPicker());
        
        chatTitle.setText("Чат");
    }
    
    private void sendTextMessage() {
        String text = messageInput.getText().toString().trim();
        if (!text.isEmpty()) {
            Message msg = new Message(System.currentTimeMillis() + "", 
                DataManager.getInstance().getCurrentUserId(), text, "text", System.currentTimeMillis());
            messages.add(msg);
            messageAdapter.notifyItemInserted(messages.size() - 1);
            messagesRecyclerView.scrollToPosition(messages.size() - 1);
            messageInput.setText("");
            saveMessages();
        }
    }
    
    private void startRecording() {
        voiceFilePath = getExternalCacheDir().getAbsolutePath() + "/voice_" + System.currentTimeMillis() + ".3gp";
        mediaRecorder = new MediaRecorder();
        mediaRecorder.setAudioSource(MediaRecorder.AudioSource.MIC);
        mediaRecorder.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
        mediaRecorder.setOutputFile(voiceFilePath);
        mediaRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);
        try {
            mediaRecorder.prepare();
            mediaRecorder.start();
            isRecording = true;
            micBtn.setImageResource(R.drawable.ic_mic_recording);
            micBtn.setBackgroundColor(getColor(R.color.red));
        } catch (IOException e) { e.printStackTrace(); }
    }
    
    private void stopRecording() {
        if (isRecording && mediaRecorder != null) {
            mediaRecorder.stop();
            mediaRecorder.release();
            mediaRecorder = null;
            isRecording = false;
            micBtn.setImageResource(R.drawable.ic_mic);
            micBtn.setBackgroundColor(getColor(R.color.accent));
            
            // Отправка голосового сообщения
            Message voiceMsg = new Message(System.currentTimeMillis() + "", 
                DataManager.getInstance().getCurrentUserId(), voiceFilePath, "voice", System.currentTimeMillis());
            messages.add(voiceMsg);
            messageAdapter.notifyItemInserted(messages.size() - 1);
            saveMessages();
        }
    }
    
    private void showStickerPicker() {
        BottomSheetDialog dialog = new BottomSheetDialog(this);
        View sheetView = getLayoutInflater().inflate(R.layout.sticker_picker, null);
        String[] stickers = {"🐒", "😂", "🔥", "❤️", "🎉", "😎", "🥺", "🚀", "💀", "👑"};
        LinearLayout grid = sheetView.findViewById(R.id.stickerGrid);
        for (String sticker : stickers) {
            TextView tv = new TextView(this);
            tv.setText(sticker);
            tv.setTextSize(48);
            tv.setPadding(16, 16, 16, 16);
            tv.setOnClickListener(v -> {
                Message stickerMsg = new Message(System.currentTimeMillis() + "", 
                    DataManager.getInstance().getCurrentUserId(), sticker, "sticker", System.currentTimeMillis());
                messages.add(stickerMsg);
                messageAdapter.notifyItemInserted(messages.size() - 1);
                dialog.dismiss();
                saveMessages();
            });
            grid.addView(tv);
        }
        dialog.setContentView(sheetView);
        dialog.show();
    }
    
    private void loadMessages() {
        messages = DataManager.getInstance().getMessages(chatId);
        messageAdapter = new MessageAdapter(messages, this::playVoice);
        messagesRecyclerView.setAdapter(messageAdapter);
        messagesRecyclerView.scrollToPosition(messages.size() - 1);
    }
    
    private void playVoice(String path) {
        try {
            MediaPlayer player = new MediaPlayer();
            player.setDataSource(path);
            player.prepare();
            player.start();
        } catch (IOException e) { e.printStackTrace(); }
    }
    
    private void saveMessages() {
        DataManager.getInstance().saveMessages(chatId, messages);
    }
}