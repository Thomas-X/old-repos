package thomas_x.toumere;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.RelativeLayout;

public class Navigation extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navigation);



        //onclick Listeners
        RelativeLayout relativeLayout1 = (RelativeLayout)findViewById(R.id.img1);
        RelativeLayout relativeLayout2 = (RelativeLayout)findViewById(R.id.img2);
        RelativeLayout relativeLayout3 = (RelativeLayout)findViewById(R.id.img3);
        RelativeLayout relativeLayout4 = (RelativeLayout)findViewById(R.id.img4);

        relativeLayout1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Navigation.this, Sights.class);
                startActivity(i);
            }
        });
        relativeLayout2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Navigation.this, Accommodations.class);
                startActivity(i);

            }
        });
        relativeLayout3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Navigation.this, Sports.class);
                startActivity(i);

            }
        });
        relativeLayout4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Navigation.this, Food.class);
                startActivity(i);

            }
        });

    }
}
