package thomas_x.toumere;

import android.support.v7.app.AppCompatActivity;

/**
 * Created by Thomas-X on 1/19/2017.
 */

public class CardConstructor extends AppCompatActivity {


    private int mImageResourceId;

    private String mTitle;

    private String mText;

//    private int mIntentButton;

    public CardConstructor(String title, String text,int imageResourceId) { //int intentButton
        mTitle = title;
        mText = text;
        mImageResourceId = imageResourceId;
//        mIntentButton = intentButton;
    }

    public int getImageResourceId() {
        return mImageResourceId;
    }
    public String getTitleHeader() { //not getTitle because that's a method in android itself
        return mTitle;
    }
    public String getText() {
        return mText;
    }

    //TODO FIX INTENT BUTTON

}
