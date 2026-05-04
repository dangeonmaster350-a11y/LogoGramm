package com.logagramm;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.bottomsheet.BottomSheetDialog;
import java.util.ArrayList;
import java.util.Date;

public class MainActivity extends AppCompatActivity {
    
    private RecyclerView chatsRecyclerView;
    private ChatAdapter chatAdapter;
    private ArrayList<Chat> chats = new ArrayList<>();
    private User currentUser;
    private BottomNavigationView bottomNav;
    private LinearLayout stickersPanel;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Загрузка текущего пользователя
        currentUser = getSharedPreferences("logagramm", MODE_PRIVATE)
            .getString("current_user", null) != null ? 
            User.fromJson(getSharedPreferences("logagramm", MODE_PRIVATE).getString("current_user", "")) : null;
        
        if (currentUser == null) {
            // Переход на экран регистрации
            startActivity(new Intent(this, AuthActivity.class));
            finish();
            return;
        }
        
        initViews();
        loadChats();
        setupBottomNav();
        setupStickers();
        
        // Обновление UI профиля
        TextView userName = findViewById(R.id.userName);
        ImageView userAvatar = findViewById(R.id.userAvatar);
        userName.setText(currentUser.getName());
        // Загрузка аватарки (упрощённо)
    }
    
    private void initViews() {
        chatsRecyclerView = findViewById(R.id.chatsRecyclerView);
        chatsRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        bottomNav = findViewById(R.id.bottomNavigation);
        stickersPanel = findViewById(R.id.stickersPanel);
    }
    
    private void loadChats() {
        // Загрузка из SharedPreferences или создание тестовых чатов
        chats = DataManager.getInstance().getChats(currentUser.getId());
        chatAdapter = new ChatAdapter(chats, chat -> {
            Intent intent = new Intent(MainActivity.this, ChatActivity.class);
            intent.putExtra("chat_id", chat.getId());
            startActivity(intent);
        });
        chatsRecyclerView.setAdapter(chatAdapter);
    }
    
    private void setupBottomNav() {
        bottomNav.setOnItemSelectedListener(item -> {
            if (item.getItemId() == R.id.nav_chats) {
                chatsRecyclerView.setVisibility(View.VISIBLE);
                stickersPanel.setVisibility(View.GONE);
                return true;
            } else if (item.getItemId() == R.id.nav_stickers) {
                chatsRecyclerView.setVisibility(View.GONE);
                stickersPanel.setVisibility(View.VISIBLE);
                return true;
            } else if (item.getItemId() == R.id.nav_profile) {
                startActivity(new Intent(this, ProfileActivity.class));
                return true;
            }
            return false;
        });
    }
    
    private void setupStickers() {
        String[] stickers = {"🐒", "😂", "🔥", "❤️", "🎉", "😎", "🥺", "🚀", "💀", "👑"};
        LinearLayout stickersGrid = findViewById(R.id.stickersGrid);
        for (String sticker : stickers) {
            TextView tv = new TextView(this);
            tv.setText(sticker);
            tv.setTextSize(40);
            tv.setPadding(16, 16, 16, 16);
            tv.setOnClickListener(v -> {
                // Отправка стикера в последний активный чат
                Toast.makeText(this, "Стикер " + sticker + " выбран", Toast.LENGTH_SHORT).show();
            });
            stickersGrid.addView(tv);
        }
    }
}