package thomas_x.toumere;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;

public class Accommodations extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.list_view_main); //maybe maar 1 .xml maar gebruiken

        final ArrayList<CardConstructor> accommodations = new ArrayList<>();

        accommodations.add(new CardConstructor("Lorem ipsuum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, arcu a consequat ultricies, nunc orci molestie purus, vel efficitur erat dolor ac enim. Phasellus eu orci tellus. Pellentesque placerat tortor neque, et blandit ipsum feugiat non. Donec congue, lorem nec maximus placerat, massa dui vestibulum justo", R.drawable.placekitten));
        accommodations.add(new CardConstructor("Lorem ipsuum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, arcu a consequat ultricies, nunc orci molestie purus, vel efficitur erat dolor ac enim. Phasellus eu orci tellus. Pellentesque placerat tortor neque, et blandit ipsum feugiat non. Donec congue, lorem nec maximus placerat, massa dui vestibulum justo", R.drawable.placekitten));
        accommodations.add(new CardConstructor("Lorem ipsuum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, arcu a consequat ultricies, nunc orci molestie purus, vel efficitur erat dolor ac enim. Phasellus eu orci tellus. Pellentesque placerat tortor neque, et blandit ipsum feugiat non. Donec congue, lorem nec maximus placerat, massa dui vestibulum justo", R.drawable.placekitten));
        accommodations.add(new CardConstructor("Lorem ipsuum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, arcu a consequat ultricies, nunc orci molestie purus, vel efficitur erat dolor ac enim. Phasellus eu orci tellus. Pellentesque placerat tortor neque, et blandit ipsum feugiat non. Donec congue, lorem nec maximus placerat, massa dui vestibulum justo", R.drawable.placekitten));

        CardAdapter adapter = new CardAdapter(this, accommodations);

        ListView listView = (ListView) findViewById(R.id.list);

        listView.setAdapter(adapter);
    }
}
