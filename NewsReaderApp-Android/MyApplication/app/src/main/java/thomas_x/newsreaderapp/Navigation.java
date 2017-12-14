package thomas_x.newsreaderapp;

/**
 * Created by Thomas-X on 2/10/2017.
 * Project: MyApplication.
 * On 10 11 09
 */

public class Navigation {


    private String mImageResource;

    private String mTextResource;


    public Navigation(String imageResource, String textResource) {
        mImageResource = imageResource;
        mTextResource = textResource;
    }

    public String getmImageResource() {
        return mImageResource;
    }

    public String getmTextResource() {
        return mTextResource;
    }
}
