package com.example.android.miwok;

import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import java.util.ArrayList;

public class ColoursActivity extends AppCompatActivity {

    private MediaPlayer mMediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_numbers);


        final ArrayList<NumberConstructor> colours = new ArrayList<>();

        colours.add(new NumberConstructor("red", "weṭeṭṭi", R.drawable.color_red, R.raw.color_red));
        colours.add(new NumberConstructor("mustard yellow", "chiwiiṭә", R.drawable.color_mustard_yellow, R.raw.color_mustard_yellow));
        colours.add(new NumberConstructor("dusty yellow", "ṭopiisә", R.drawable.color_dusty_yellow, R.raw.color_dusty_yellow));
        colours.add(new NumberConstructor("green", "chokokki", R.drawable.color_green, R.raw.color_green));
        colours.add(new NumberConstructor("brown", "ṭakaakki", R.drawable.color_brown, R.raw.color_brown));
        colours.add(new NumberConstructor("gray", "ṭopoppi", R.drawable.color_gray, R.raw.color_gray));
        colours.add(new NumberConstructor("black", "kululli", R.drawable.color_black, R.raw.color_black));
        colours.add(new NumberConstructor("white", "kelelli", R.drawable.color_white, R.raw.color_white));

        NumberAdapter adapter = new NumberAdapter(this, colours, R.color.category_colors);

        ListView listView = (ListView) findViewById(R.id.list);

        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                NumberConstructor numberConstructor = colours.get(position);
                mMediaPlayer = MediaPlayer.create(ColoursActivity.this, numberConstructor.getAudioResourceId());
                mMediaPlayer.start();
            }
        });

    }
}
