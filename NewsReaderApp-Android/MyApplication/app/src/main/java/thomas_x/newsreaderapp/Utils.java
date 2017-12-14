package thomas_x.newsreaderapp;

import android.util.Log;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Thomas-X on 1/31/2017.
 * Project: MyApplication.
 * On 31 09 55
 */

public final class Utils {

    public static final String LOG_TAG = Utils.class.getSimpleName();


    //No one should ever make a Utils object
    private Utils() {
    }

    private static URL createUrl(String url) {
        URL urlObject = null;
        try {
            urlObject = new URL(url);
        } catch (MalformedURLException e) {
            Log.e(LOG_TAG, "Error creating the URL", e);
        }
        return urlObject;
    }

    public static List<News> fetchNewsData(String stringUrl) {

        URL url = createUrl(stringUrl);

        String jsonResponse = null;

        try {
            jsonResponse = makeHttpRequest(url);
        } catch (IOException e) {
            Log.e(LOG_TAG, "Error making httpRequest and input stream", e);
        }



        List<News> news = extractNews(jsonResponse);

        return news;
    }

    public static List<NewsSource> fetchNewsSourceData(String stringUrl) {

        URL url = createUrl(stringUrl);

        String jsonResponse = null;

        try {
            jsonResponse = makeHttpRequest(url);
        } catch (IOException e) {
            Log.e(LOG_TAG, "Error making httpRequest and input stream", e);
        }



        List<NewsSource> news = extractNewsSources(jsonResponse);

        return news;
    }


    //this has to be in a try catch block
    private static String makeHttpRequest(URL url) throws IOException {

        String jsonResponse = "";

        if (url == null) {
            return jsonResponse;
        }

        HttpURLConnection urlConnection = null;
        InputStream inputStream = null;

        try {
            urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setReadTimeout(10000); //miliseconds
            urlConnection.setConnectTimeout(15000);
            urlConnection.setRequestMethod("GET");
            urlConnection.connect();

            //if HTTP response code was 200
            if (urlConnection.getResponseCode() == 200) {
                inputStream = urlConnection.getInputStream();

                //TODO add readFromStream helper method
                jsonResponse = readFromStream(inputStream);
            } else {
                Log.e(LOG_TAG, "Error HTTP response code is: " + urlConnection.getResponseCode());
            }
        } catch (IOException e) {
            Log.e(LOG_TAG, "Problem retrieving JSON results");
        } finally {

            //close urlConnections and inputStreams
            if (urlConnection != null) {
                urlConnection.disconnect();
            }
            if (inputStream != null) {
                inputStream.close();
            }
        }
        return jsonResponse;

    }

    private static String readFromStream(InputStream inputStream) throws IOException {

        StringBuilder output = new StringBuilder();
        if (inputStream != null) {
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, Charset.forName("UTF-8"));
            BufferedReader reader = new BufferedReader(inputStreamReader);
            String line = reader.readLine();

            //loop through inputstream and append while line is not null
            while (line != null) {
                output.append(line);
                line = reader.readLine();
            }
        }
        return output.toString();
    }

    public static List<NewsSource> extractNewsSources(String newsJSON) {
        List<NewsSource> news = new ArrayList<>();

        try {
            JSONObject rootJson = new JSONObject(newsJSON);
            JSONArray articles = rootJson.getJSONArray("sources");

            for (int i = 0; i < articles.length(); i++) {
                JSONObject newsObject = articles.getJSONObject(i);

                String id = newsObject.getString("id");
                String name = newsObject.getString("name");




                news.add(new NewsSource(id, name));
            }
        } catch (JSONException e) {
            Log.e(LOG_TAG, "Problem parsing news JSON results", e);
        }
        return news;
    }

    public static List<News> extractNews(String newsJSON) {

        List<News> news = new ArrayList<>();

        try {
            JSONObject rootJson = new JSONObject(newsJSON);
            JSONArray articles = rootJson.getJSONArray("articles");

            for (int i = 0; i < articles.length(); i++) {
                JSONObject newsObject = articles.getJSONObject(i);

                String author = newsObject.getString("author");
                String title = newsObject.getString("title");
                String description = newsObject.getString("description");
                String url = newsObject.getString("url");
                String imgUrl = newsObject.getString("urlToImage");
                String published = newsObject.getString("publishedAt");


                int s = published.indexOf("T");

                String publishedFormatted = null;

                if (published.length() != 4) {
                    publishedFormatted = published.substring(0, s);
                }



                if (author == null || author.equals("") || author.equals("null")) {
                    author = "Unknown";
                }

                String FormattedAuthor = "By: " + author;

                news.add(new News(FormattedAuthor, title, description, url, imgUrl, publishedFormatted));
            }
        } catch (JSONException e) {
            Log.e(LOG_TAG, "Problem parsing news JSON results", e);
        }
        return news;
    }
}
