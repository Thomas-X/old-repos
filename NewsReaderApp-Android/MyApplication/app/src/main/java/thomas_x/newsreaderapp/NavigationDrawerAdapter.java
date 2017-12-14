package thomas_x.newsreaderapp;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import com.koushikdutta.ion.Ion;

import java.io.InputStream;
import java.util.List;

/**
 * Created by Thomas-X on 2/10/2017.
 * Project: MyApplication.
 * On 10 11 03
 */

public class NavigationDrawerAdapter extends ArrayAdapter<Navigation> {

    final List<Navigation> mArray;

    public NavigationDrawerAdapter(Context context, List<Navigation> array) {
        super(context, 0, array);
        mArray = array;
    }

    public View getView(int position, View convertView, ViewGroup parent) {
        View rootView = convertView;

        if (rootView == null) {
            rootView = LayoutInflater.from(getContext()).inflate(R.layout.nav_item_layout, parent, false);
        }


        final Navigation currentNavItem = getItem(position);


        ImageView imageView = (ImageView) rootView.findViewById(R.id.imageNav);

        Ion.with(imageView)
                .placeholder(R.drawable.kitty)
                .error(R.drawable.kitty)
                .load(currentNavItem.getmImageResource());


        TextView textView = (TextView) rootView.findViewById(R.id.textNav);

        textView.setText(currentNavItem.getmTextResource());

//        imageView.setImageResource(R.drawable.logo);



        return rootView;
    }


    //TODO switch to using loaders instead of asynctask
    private class DownloadNavImageTask extends AsyncTask<String, Void, Bitmap> {
        ImageView bmImage;

        public DownloadNavImageTask(ImageView bmImage) {
            this.bmImage = bmImage;
        }

        protected Bitmap doInBackground(String... urls) {
            String urldisplay = urls[0];
            Bitmap mIcon11 = null;
            try {
                InputStream in = new java.net.URL(urldisplay).openStream();
                mIcon11 = BitmapFactory.decodeStream(in);
            } catch (Exception e) {
                Log.e("Error", e.getMessage());
                e.printStackTrace();
            }
            return mIcon11;
        }

        protected void onPostExecute(Bitmap result) {
            bmImage.setImageBitmap(result);
        }
    }
}
