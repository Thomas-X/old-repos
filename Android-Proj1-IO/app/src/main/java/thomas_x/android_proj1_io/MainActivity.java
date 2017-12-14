package thomas_x.android_proj1_io;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    int teamScoreOne = 0;
    int teamScoreTwo = 0;

    int foulTeamOne = 0;
    int foulTeamTwo = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void reset(View view) {
        teamScoreOne = 0;
        teamScoreTwo = 0;

        foulTeamOne = 0;
        foulTeamTwo = 0;

        displayTeamOneScore(teamScoreOne);
        displayFoulTeamOne(foulTeamOne);

        displayTeamTwoScore(teamScoreTwo);
        displayFoulTeamTwo(foulTeamTwo);
    }
    //team one
    public void plusTeamOne(View view) {
        teamScoreOne++;
        displayTeamOneScore(teamScoreOne);
    }

    public void minusTeamOne(View view) { //incase user accidentally pressed the plus button
        if (teamScoreOne != 0) {
            teamScoreOne--;
            displayTeamOneScore(teamScoreOne);
        }
    }

    //team two
    public void plusTeamTwo(View view) {
        teamScoreTwo++;
        displayTeamTwoScore(teamScoreTwo);
    }

    public void minusTeamTwo(View view) { //incase user accidentally pressed the plus button
        if (teamScoreTwo != 0) {
            teamScoreTwo--;
            displayTeamTwoScore(teamScoreTwo);
        }
    }
    public void foulTeamOne(View view) {
        foulTeamOne++;
        displayFoulTeamOne(foulTeamOne);
    }
    public void foulTeamTwo(View view) {
        foulTeamTwo++;
        displayFoulTeamTwo(foulTeamTwo);
    }


    private void displayTeamOneScore(int number) {
        TextView textView = (TextView) findViewById(R.id.score1counter);
        textView.setText("" + number);
    }
    private void displayTeamTwoScore(int number) {
        TextView textView = (TextView) findViewById(R.id.score2counter);
        textView.setText("" + number);
    }
    private void displayFoulTeamOne(int number) {
        TextView textView = (TextView) findViewById(R.id.foulCounterTeamOne);
        textView.setText("" + number);
    }
    private void displayFoulTeamTwo(int number) {
        TextView textView = (TextView) findViewById(R.id.foulCounterTeamTwo);
        textView.setText("" + number);
    }
}
