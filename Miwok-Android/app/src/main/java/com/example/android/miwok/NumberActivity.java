package com.example.android.miwok;

import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.*;

import java.util.ArrayList;

public class NumberActivity extends AppCompatActivity {

    private MediaPlayer mMediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_numbers);

        //final heeft met variable scoping te maken
        final ArrayList<NumberConstructor> numbers = new ArrayList<>();


        numbers.add(new NumberConstructor("one", "lutti", R.drawable.number_one, R.raw.number_one));
        numbers.add(new NumberConstructor("two", "otiiko", R.drawable.number_two, R.raw.number_two));
        numbers.add(new NumberConstructor("three", "tolookosu", R.drawable.number_three, R.raw.number_three));
        numbers.add(new NumberConstructor("four", "oyyisa", R.drawable.number_four, R.raw.number_four));
        numbers.add(new NumberConstructor("five", "massokka", R.drawable.number_five, R.raw.number_five));
        numbers.add(new NumberConstructor("six", "temmokka", R.drawable.number_six, R.raw.number_six));
        numbers.add(new NumberConstructor("seven", "kenekaku", R.drawable.number_seven, R.raw.number_seven));
        numbers.add(new NumberConstructor("eight", "kawinta", R.drawable.number_eight, R.raw.number_eight));
        numbers.add(new NumberConstructor("nine", "wo’e", R.drawable.number_nine, R.raw.number_nine));
        numbers.add(new NumberConstructor("ten", "na’aacha", R.drawable.number_ten, R.raw.number_ten));



        //pure magic.
        NumberAdapter adapter = new NumberAdapter(this, numbers, R.color.category_numbers);

        ListView listView = (ListView) findViewById(R.id.list);

        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                NumberConstructor numberConstructor = numbers.get(position);
                mMediaPlayer = MediaPlayer.create(NumberActivity.this, numberConstructor.getAudioResourceId());
                mMediaPlayer.start();

            }
        });

    }
}
