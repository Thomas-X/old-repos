package thomas_x.educationquiz;

import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    //methods used for answer comparison
    public void wrongAnswerTextSetter(int whichAnswerToUse) {
        TextView someParam = (TextView) findViewById(whichAnswerToUse);
        someParam.setTextColor(Color.RED);
        someParam.setText("FOUT!!");
    }
    public void correctAnswerTextSetter(int whichAnswerToUse) {
        TextView someParam = (TextView) findViewById(whichAnswerToUse);
        someParam.setTextColor(Color.GREEN);
        someParam.setText("GOED!!");
    }
    public void wrongAnswer (View view){
//        vraag 1
        if (view.getId() == R.id.question1B || view.getId() == R.id.question1C) {
            wrongAnswerTextSetter(R.id.question1answer);
        }
//        vraag 2
        if (view.getId() == R.id.question2B || view.getId() == R.id.question2C) {
            wrongAnswerTextSetter(R.id.question2answer);
        }
//        vraag 3
        if (view.getId() == R.id.question3A || view.getId() == R.id.question3B) {
            wrongAnswerTextSetter(R.id.question3answer);
        }
//        vraag 4
        if (view.getId() == R.id.question4A || view.getId() == R.id.question4B) {
            wrongAnswerTextSetter(R.id.question4answer);
        }
//        vraag 5
        if (view.getId() == R.id.question5A || view.getId() == R.id.question5B) {
            wrongAnswerTextSetter(R.id.question5answer);
        }
    }
    public void correctAnswer(View view) {
        switch (view.getId()) {
            //vraag 1
            case R.id.question1A:
                correctAnswerTextSetter(R.id.question1answer);
                break;
            //vraag 2
            case R.id.question2A:
                correctAnswerTextSetter(R.id.question2answer);
                break;
            //vraag 3
            case R.id.question3C:
                correctAnswerTextSetter(R.id.question3answer);
                break;
            //vraag 4
            case R.id.question4C:
                correctAnswerTextSetter(R.id.question4answer);
                break;
            //vraag 5
            case R.id.question5C:
                correctAnswerTextSetter(R.id.question5answer);
                break;
        }
    }
}
