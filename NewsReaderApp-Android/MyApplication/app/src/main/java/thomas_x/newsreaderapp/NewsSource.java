package thomas_x.newsreaderapp;

/**
 * Created by Thomas-X on 2/14/2017.
 * Project: MyApplication.
 * On 14 10 49
 */

public class NewsSource {

    private String mId;

    private String mName;

    public NewsSource(String id, String name) {
        mId = id;
        mName = name;
    }

    public String getmId() {
        return mId;
    }

    public String getmName() {
        return mName;
    }
}
