package thomas_x.newsreaderapp;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.preference.PreferenceManager;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import com.koushikdutta.ion.Ion;
import org.w3c.dom.Text;
import thomas_x.newsreaderapp.SettingsActivity.NewsPreferenceFragment;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Set;

/**
 * Created by Thomas-X on 1/31/2017.
 */

public class NewsAdapter extends ArrayAdapter<News> {

    final List<News> mNews;

    String mTextCardColour;

    String mColourPrimary;

    private static final String LOG_TAG = NewsAdapter.class.getSimpleName();


    public NewsAdapter(Context context, List<News> news, String textCardColour, String colourPrimary) {
        super(context, 0, news);
        mNews = news;
        mTextCardColour = textCardColour;
        mColourPrimary = colourPrimary;
    }

    public View getView(int position, View convertView, ViewGroup parent) {


//        if (nightmode == "On") {
//            mTextCardColour = "#b3ffffff";
//            mColorPrimary = "#212121";

//        }
//        //disengage nightmode!
//        else if (nightmode == "Off") {
//            mTextCardColour = "#8C000000";
//            mColorPrimary = "#b3ffffff";
//        }

        View rootView = convertView;

        if (rootView == null) {
            rootView = LayoutInflater.from(getContext()).inflate(R.layout.news_list_item, parent, false);
        }

        final News currentArticle = getItem(position);

        //method chaining ftw
        ImageView imageView = (ImageView) rootView.findViewById(R.id.imageBig);

        //for getting the images from url we use the ion library https://github.com/koush/ion
        Ion.with(imageView)
                .placeholder(R.drawable.loading)
                .error(R.drawable.loading)
                .load(currentArticle.getmImgUrl());



        TextView title = (TextView) rootView.findViewById(R.id.titleHeader);
        title.setText(currentArticle.getmTitle());


        TextView description = (TextView) rootView.findViewById(R.id.shortText);
        description.setText(currentArticle.getmDescription());


//        System.out.println(mTextColour);


//        try {
//            description.setTextColor(Integer.parseInt(SettingsActivity.NewsPreferenceFragment.mTextCardColour));
//        } catch (NumberFormatException e) {
//            Log.e("THIS IS NORMAL", "THIS CRASH SHOULD BE IGNORED", e);
//        }


        TextView author = (TextView) rootView.findViewById(R.id.author);
        author.setText(currentArticle.getmAuthor());


        TextView publishedAt = (TextView) rootView.findViewById(R.id.publishedAt);
        publishedAt.setText(currentArticle.getmPublished());

//        author.setTextColor(Color.parseColor(currentArticle.getmTextColour()));
//        description.setTextColor(Color.parseColor(currentArticle.getmTextColour()));
//        publishedAt.setTextColor(Color.parseColor(currentArticle.getmTextColour()));
//        rootView.setBackgroundColor(Color.parseColor(currentArticle.getmBackground()));
//
//        for (int i = 0; i < 10; i++) {
//            System.out.println(mTextCardColour + "null?");
//        }

        author.setTextColor(Color.parseColor(mTextCardColour));
        publishedAt.setTextColor(Color.parseColor(mTextCardColour));
        description.setTextColor(Color.parseColor(mTextCardColour));
        rootView.setBackgroundColor(Color.parseColor(mColourPrimary));


        //TODO add clicklisteners to go to url of site

        return rootView;
    }


    //TODO switch to using loaders instead of asynctask
    private class LoadImageFromWebOperations extends AsyncTask<String, Void, Drawable> {

        ImageView mImageView;

        public LoadImageFromWebOperations(ImageView imageView) {
            mImageView = imageView;
        }
        protected Drawable doInBackground(String... url) {
            try {
                InputStream is = (InputStream) new URL(url[0]).getContent();
                Drawable d = Drawable.createFromStream(is, "src name");
                return d;
            } catch (Exception e) {
                Log.e(LOG_TAG, "Error loading news image", e);
                return null;
            }
        }
        protected void onPostExecute(Drawable result) {
            mImageView.setImageDrawable(result);
        }
    }
}
