package thomas_x;

import android.app.Application;
import android.content.Context;

/**
 * Created by Thomas-X on 2/7/2017.
 * Project: MyApplication.
 * On 07 13 25
 */

public class Newsreader extends Application {


    /*
    *
    *
    * This class is deprecated
    *
    *
    * */

    private static Context context;

    public void onCreate() {
        super.onCreate();
        Newsreader.context = getApplicationContext();
    }
    public static Context getAppContext() {
        return Newsreader.context;
    }
}
