package com.logagramm;

import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import java.util.Random;

public class AuthActivity extends AppCompatActivity {
    
    private EditText phoneInput, nameInput, usernameInput;
    private Button nextBtn, verifyBtn, completeBtn;
    private LinearLayout step1, step2, step3;
    private LinearLayout codeContainer;
    private String tempCode = "";
    private String tempPhone = "";
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_auth);
        
        step1 = findViewById(R.id.step1);
        step2 = findViewById(R.id.step2);
        step3 = findViewById(R.id.step3);
        phoneInput = findViewById(R.id.phoneInput);
        nameInput = findViewById(R.id.nameInput);
        usernameInput = findViewById(R.id.usernameInput);
        nextBtn = findViewById(R.id.nextBtn);
        verifyBtn = findViewById(R.id.verifyBtn);
        completeBtn = findViewById(R.id.completeBtn);
        codeContainer = findViewById(R.id.codeContainer);
        
        nextBtn.setOnClickListener(v -> {
            tempPhone = phoneInput.getText().toString().trim();
            if (tempPhone.length() >= 10) {
                tempCode = String.format("%05d", new Random().nextInt(100000));
                // В реальном приложении здесь отправка SMS
                showToast("Код: " + tempCode);
                step1.setVisibility(View.GONE);
                step2.setVisibility(View.VISIBLE);
                setupCodeInputs();
            } else {
                showToast("Введите корректный номер");
            }
        });
        
        verifyBtn.setOnClickListener(v -> {
            StringBuilder code = new StringBuilder();
            for (int i = 0; i < codeContainer.getChildCount(); i++) {
                EditText et = (EditText) codeContainer.getChildAt(i);
                code.append(et.getText().toString());
            }
            if (code.toString().equals(tempCode)) {
                step2.setVisibility(View.GONE);
                step3.setVisibility(View.VISIBLE);
            } else {
                showToast("Неверный код");
            }
        });
        
        completeBtn.setOnClickListener(v -> {
            String name = nameInput.getText().toString().trim();
            String username = usernameInput.getText().toString().trim().toLowerCase();
            if (name.isEmpty() || username.isEmpty()) {
                showToast("Заполните все поля");
                return;
            }
            // Сохранение пользователя
            User newUser = new User(System.currentTimeMillis() + "", name, username, tempPhone);
            getSharedPreferences("logagramm", MODE_PRIVATE).edit()
                .putString("current_user", newUser.toJson()).apply();
            startActivity(new Intent(this, MainActivity.class));
            finish();
        });
    }
    
    private void setupCodeInputs() {
        codeContainer.removeAllViews();
        for (int i = 0; i < 5; i++) {
            EditText et = new EditText(this);
            et.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
            et.setMaxLines(1);
            et.setMaxEms(1);
            et.setGravity(android.view.Gravity.CENTER);
            et.setTextSize(24);
            et.setBackgroundResource(android.R.drawable.editbox_background);
            LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(120, 140);
            params.setMargins(8, 0, 8, 0);
            et.setLayoutParams(params);
            final int index = i;
            et.addTextChangedListener(new android.text.TextWatcher() {
                @Override public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
                @Override public void onTextChanged(CharSequence s, int start, int before, int count) {
                    if (s.length() == 1 && index < 4) {
                        ((EditText) codeContainer.getChildAt(index + 1)).requestFocus();
                    }
                }
                @Override public void afterTextChanged(android.text.Editable s) {}
            });
            codeContainer.addView(et);
        }
    }
    
    private void showToast(String msg) {
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show();
    }
}