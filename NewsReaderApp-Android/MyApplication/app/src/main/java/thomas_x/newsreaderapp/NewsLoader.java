package thomas_x.newsreaderapp;

import android.content.AsyncTaskLoader;
import android.content.Context;

import java.util.List;

/**
 * Created by Thomas-X on 1/31/2017.
 */

public class NewsLoader extends AsyncTaskLoader<List<News>> {

    private String mUrl;

    public NewsLoader(Context context, String url) {
        super(context);
        mUrl = url;
    }

    protected void onStartLoading() {
        forceLoad();
    }

    public List<News> loadInBackground() {
        if (mUrl == null) {
            return null;
        }
        List<News> news = Utils.fetchNewsData(mUrl);
        return news;
    }

}
