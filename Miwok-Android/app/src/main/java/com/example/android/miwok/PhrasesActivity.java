package com.example.android.miwok;


import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import java.util.ArrayList;

public class PhrasesActivity extends AppCompatActivity {

    private MediaPlayer mMediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_numbers);


        final ArrayList<NumberConstructor> phrases = new ArrayList<>();
        
        phrases.add(new NumberConstructor("Where are you going?", "minto wuksus", R.raw.phrase_where_are_you_going));
        phrases.add(new NumberConstructor("What is your name?", "tinnә oyaase'nә", R.raw.phrase_what_is_your_name));
        phrases.add(new NumberConstructor("My name is...", "oyaaset...", R.raw.phrase_my_name_is));
        phrases.add(new NumberConstructor("How are you feeling?", "michәksәs?", R.raw.phrase_how_are_you_feeling));
        phrases.add(new NumberConstructor("I’m feeling good.", "kuchi achit", R.raw.phrase_im_feeling_good));
        phrases.add(new NumberConstructor("Are you coming?", "әәnәs'aa?", R.raw.phrase_are_you_coming));
        phrases.add(new NumberConstructor("Yes, I’m coming.", "hәә’ әәnәm", R.raw.phrase_yes_im_coming));
        phrases.add(new NumberConstructor("I’m coming.", "әәnәm", R.raw.phrase_im_coming));
        phrases.add(new NumberConstructor("Let’s go.", "yoowutis", R.raw.phrase_lets_go));
        phrases.add(new NumberConstructor("Come here.", "әnni'nem", R.raw.phrase_come_here));

     
        NumberAdapter adapter = new NumberAdapter(this, phrases, R.color.category_phrases);

     
        ListView listView = (ListView) findViewById(R.id.list);

        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                NumberConstructor numberConstructor = phrases.get(position);
                mMediaPlayer = MediaPlayer.create(PhrasesActivity.this, numberConstructor.getAudioResourceId());
                mMediaPlayer.start();

            }
        });
    }
}
