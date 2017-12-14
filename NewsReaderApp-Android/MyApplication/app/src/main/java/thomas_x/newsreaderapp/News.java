package thomas_x.newsreaderapp;

/**
 * Created by Thomas-X on 1/31/2017.
 */

public class News {

    private String mAuthor;

    private String mTitle;

    private String mDescription;

    private String mUrl;

    private String mImgUrl;

    private String mPublished;



    public News(String author, String title, String description, String url, String imgurl, String published) {
        mAuthor = author;
        mTitle = title;
        mDescription = description;
        mUrl = url;
        mImgUrl = imgurl;
        mPublished = published;

    }

    public String getmAuthor() {
        return mAuthor;
    }

    public String getmTitle() {
        return mTitle;
    }

    public String getmDescription() {
        return mDescription;
    }

    public String getmUrl() {
        return mUrl;
    }

    public String getmImgUrl() {
        return mImgUrl;
    }

    public String getmPublished() {
        return mPublished;
    }
}
