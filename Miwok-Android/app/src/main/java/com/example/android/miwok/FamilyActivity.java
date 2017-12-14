package com.example.android.miwok;

import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import java.util.ArrayList;

public class FamilyActivity extends AppCompatActivity {

    private MediaPlayer mMediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_numbers);



        final ArrayList<NumberConstructor> family = new ArrayList<>();

        family.add(new NumberConstructor("father", "әpә", R.drawable.family_father, R.raw.family_father));
        family.add(new NumberConstructor("mother", "әṭa", R.drawable.family_mother, R.raw.family_mother));
        family.add(new NumberConstructor("son", "angsi", R.drawable.family_son, R.raw.family_son));
        family.add(new NumberConstructor("daughter", "tune", R.drawable.family_daughter, R.raw.family_daughter));
        family.add(new NumberConstructor("older brother", "taachi", R.drawable.family_older_brother, R.raw.family_older_brother));
        family.add(new NumberConstructor("younger brother", "chalitti", R.drawable.family_younger_brother, R.raw.family_younger_brother));
        family.add(new NumberConstructor("older sister", "teṭe", R.drawable.family_older_sister, R.raw.family_older_sister));
        family.add(new NumberConstructor("younger sister", "kolliti", R.drawable.family_younger_sister, R.raw.family_younger_sister));
        family.add(new NumberConstructor("grandmother ", "ama", R.drawable.family_grandmother, R.raw.family_grandmother));
        family.add(new NumberConstructor("grandfather", "paapa", R.drawable.family_grandfather, R.raw.family_grandfather));

        NumberAdapter adapter = new NumberAdapter(this, family, R.color.category_family);

        ListView listView = (ListView) findViewById(R.id.list);

        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                NumberConstructor numberConstructor = family.get(position);
                mMediaPlayer = MediaPlayer.create(FamilyActivity.this, numberConstructor.getAudioResourceId());
                mMediaPlayer.start();
            }
        });
    }
}
