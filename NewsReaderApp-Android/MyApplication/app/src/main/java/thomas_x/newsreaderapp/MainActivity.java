package thomas_x.newsreaderapp;

import android.app.LoaderManager;
import android.content.*;
import android.content.res.Configuration;
import android.graphics.Point;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.util.TypedValue;
import android.view.Display;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.*;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements LoaderManager.LoaderCallbacks<List<News>> {

    public static final String LOG_TAG = MainActivity.class.getName();

    private String api_link = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=80919f8518c74ea08a0e68dbe1aee195";

    private NewsAdapter mAdapter = null;

    boolean isConnected;

    private TextView mEmptyTextView;

    private TextView mNoNetworkTextView;

    private String mTextCardColour = "";

    private String mColorPrimary = "";

    private int actionBarHeight;

    //navigation drawer stuff
    private ListView mDrawerList;

    private boolean toggle = true;


    private NavigationDrawerAdapter mNavAdapter;

    //adding ActionBarDrawer toggle variable
    private ActionBarDrawerToggle mDrawerToggle;
    //adding a drawer layout for the drawer layout
    private DrawerLayout mDrawerLayout;
    //the name of the activity
    private String mActivityTitle;

    private int navigationDrawerFinalWidth;

    private ListView newsListView;

    private final List<Navigation> navList = new ArrayList<>();

    private ArrayList<News> newsList = new ArrayList<News>();

    private String selectedNewsSource;


    //for getting the display
    private Display display;

    private Point size = new Point();

    private int screenSizeXvalue;

    protected List<NewsSource> newsSources = null;

    private String i;

    private String o;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        new setupNav().execute();


        //add navigation bar via helper method
        mDrawerList = (ListView) findViewById(R.id.navList);

        //getting the values of the screen (so x, y all are in the Point variable called 'size'
        display = getWindowManager().getDefaultDisplay();

        display.getSize(size);

        //then we say that the int screenSizeXValue is size.x which is size -> x coordinate
        screenSizeXvalue = size.x;


        navigationDrawerFinalWidth = (screenSizeXvalue - getActionBarHeight());


        /*
        *
        * According to google it shouldnt be wider than 280 dp on mobile but int values of this aren't in DP for some reason,
        * so we're just gonna skip this check and hope for the best.
        *
        * */
//        if (navigationDrawerFinalWidth > 280) {
//            navigationDrawerFinalWidth = 280;
//        }


        mDrawerList.getLayoutParams().width = (navigationDrawerFinalWidth);
        addDrawerItems();

        //adding the hamburger menu
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);

        //setting mDrawerLayout and mActivityTitle
        /*
        * drawer_open and drawer_close in strings.xml are needed for a toggle (because android)
        * */
        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
        mActivityTitle = getTitle().toString();

        //helper method for setting up the toggle for the navigation bar icon (the hamburger thing)
        setupDrawer();


        //adding an onclick listener for individual list items
//        mDrawerList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
//            @Override
//            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
//                //todo do if(id == R.id.<id van adapter item>), make custom adapter
//            }
//        });


        ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);

        NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        isConnected = activeNetwork != null && activeNetwork.isConnectedOrConnecting();

        if (isConnected) {


            SharedPreferences sharedPrefs = PreferenceManager.getDefaultSharedPreferences(this);

            String asd = sharedPrefs.getString(getString(R.string.settings_default), "NIGHTMODE OFF");
            String dsa = sharedPrefs.getString(getString(R.string.settings_nightmode_on), "NIGHTMODE ON");


//            for (int i = 0; i < 1000; i++) {
//                System.out.println(dsa);
//            }

            if (asd.equals("On")) {
                mTextCardColour = "#8C000000";
                mColorPrimary = "#ffffff";
            } else { //=it's a toggle, we don't have to check for a second if plus checking for off is broken, idk why
                mTextCardColour = "#b3ffffff";
                mColorPrimary = "#212121";
            }



            newsListView = (ListView) findViewById(R.id.list);


            mAdapter = new NewsAdapter(MainActivity.this, newsList, mTextCardColour, mColorPrimary);

            newsListView.setAdapter(mAdapter);

            newsListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    News currentNews = mAdapter.getItem(position);

                    Uri newsUri = Uri.parse(currentNews.getmUrl());

                    Intent websiteIntent = new Intent(Intent.ACTION_VIEW, newsUri);

                    startActivity(websiteIntent);
                }
            });

            //loader initilization
            LoaderManager loaderManager = getLoaderManager();

            loaderManager.initLoader(0, null, this);

            mEmptyTextView = (TextView) findViewById(R.id.emptyState);
            newsListView.setEmptyView(mEmptyTextView);


        } else if (!isConnected) {
            View loadingIndicator = findViewById(R.id.loadingIndicator);
            loadingIndicator.setVisibility(View.GONE);
            mNoNetworkTextView = (TextView) findViewById(R.id.noInternet);
            mNoNetworkTextView.setText(R.string.noNetwork);
        }
    }


    @Override
    public Loader<List<News>> onCreateLoader(int id, Bundle args) {
//        System.out.println("onCreateLoader called");
        return new NewsLoader(this, api_link);
    }

    @Override
    public void onLoadFinished(Loader<List<News>> loader, List<News> data) {


        View loadingIndicator = findViewById(R.id.loadingIndicator);
        loadingIndicator.setVisibility(View.GONE);

        newsListView.setVisibility(View.VISIBLE);


        if (!isConnected) {
            mEmptyTextView.setText(R.string.empty);
        }

        mAdapter.clear();


        if (data != null && !data.isEmpty()) {
            mAdapter.addAll(data);
        }
    }

    public void onLoaderReset(Loader<List<News>> loader) {
//        System.out.println("onLoaderReset called");
        mAdapter.clear();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        //so toggle is activated when its clicked (because we return true which calls .. idk?)
        if (mDrawerToggle.onOptionsItemSelected(item)) {
            return true;
        }

        if (id == R.id.action_settings) {
            Intent settingsIntent = new Intent(this, SettingsActivity.class);
            startActivity(settingsIntent);
            return true;
        }
        return super.onOptionsItemSelected(item);
    }




    //navigation drawer helper method for creation (from adapter, this is how the nav drawer is formed or something
    private void addDrawerItems() {
        //make a string array containing list items of navigation bar (so like stuff's thats inside)

        //just make a simple List for our nav items, we dont need anything more advanced

        i = "http://i.newsapi.org/";
        o = "-m.png";



        /*
        *
        * TODO add JSON get request for sources and source names instead of hardcoding it
        *
        * */



    }

    class setupNav extends AsyncTask<Void, Void, List<NewsSource>> {

        @Override
        protected List<NewsSource> doInBackground(Void... params) {
            newsSources = Utils.fetchNewsSourceData("https://newsapi.org/v1/sources");
            return newsSources;
        }

        protected void onPostExecute(List<NewsSource> newsSources) {

            final String[] sources = new String[newsSources.size()];

            final String[] textSources = new String[newsSources.size()];

            for (int j = 0; j < newsSources.size(); j++) {
                sources[j] = (newsSources.get(j).getmId());
                textSources[j] = (newsSources.get(j).getmName());
            }

            String[] shamefulArray = new String[sources.length];

            //I didn't like adding i + var + o to array, just want to add the sources for better maintenence in case new sources get added
            for (int a = 0; a < sources.length; a++) {
                shamefulArray[a] = i + sources[a] + o;
            }

            for (int p = 0; p < shamefulArray.length; p++) {
                navList.add(new Navigation(shamefulArray[p], textSources[p]));
//                System.out.println(shamefulArray[p]);
            }

        /*
        * TODO convert String values of shamefulArray[] to uri using uribuilder
        * Uri newsUri = Uri.parse(currentNews.getmUrl());
        * */

            mNavAdapter = new NavigationDrawerAdapter(MainActivity.this, navList);

            mDrawerList.setAdapter(mNavAdapter);

            mDrawerList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    Navigation currentArticle = mNavAdapter.getItem(position);

                    api_link = "https://newsapi.org/v1/articles?source=" + sources[position] + "&sortBy=top&apiKey=80919f8518c74ea08a0e68dbe1aee195";
                    newsList.clear();
                    View loadingIndicator = findViewById(R.id.loadingIndicator);
                    loadingIndicator.setVisibility(View.VISIBLE);


                    //TODO selected navItem other background

                    newsListView.setVisibility(View.GONE);

                    selectedNewsSource = textSources[position];

                    getSupportActionBar().setTitle(textSources[position]);

                    getLoaderManager().restartLoader(0, null, MainActivity.this);

                    mDrawerLayout.closeDrawer(mDrawerList);
                }
            });

        }
    }

    //setup the toggle for the drawer
    private void setupDrawer() {

        //referencing itself for context, then referencing the layout, then the two string needed for openening / closing
        mDrawerToggle = new ActionBarDrawerToggle(this, mDrawerLayout, R.string.drawer_open, R.string.drawer_close) {

            /* Called when our drawer has completed its open state (so its completely open)*/
            public void onDrawerOpened(View drawerView) {
                //super to itself? what does super do exactly?
                super.onDrawerOpened(drawerView);
                getSupportActionBar().setTitle("Navigation menu"); //he sets the text of the actionbar (the thing on the top with the buttons
                invalidateOptionsMenu(); //create call to onPrepareOptionsMenu()
            }

            /* Called when our drawer has completed its closed states (so its completely closed)*/
            public void onDrawerClosed(View view) {
                getSupportActionBar().setTitle(selectedNewsSource);
            }
        };
        mDrawerToggle.setDrawerIndicatorEnabled(true); //this switches the icon from arrow key to our lovely hamburger menu
        mDrawerLayout.setDrawerListener(mDrawerToggle); //setDrawerListener is deprecated?
    }

    //the button of the menu isnt in sync with the menu, little slow. this fixes that
    protected void onPostCreate(Bundle savedInstanceState) {

        //what does 'super' do exactly?!
        super.onPostCreate(savedInstanceState);

        //syncing the toggle button so its smooth
        mDrawerToggle.syncState();
    }

    //it has to stay in sync if there's stuff happening, like rotating the device, or showing a keyboard on the screen
    public void onConfigurationChanged(Configuration newConfig) {
        //what does super do?
        super.onConfigurationChanged(newConfig);

        //if config is changed
        mDrawerToggle.onConfigurationChanged(newConfig);
    }

    public int getActionBarHeight() {
        // Calculate ActionBar height
        TypedValue tv = new TypedValue();
        if (getTheme().resolveAttribute(android.R.attr.actionBarSize, tv, true)) {
            actionBarHeight = TypedValue.complexToDimensionPixelSize(tv.data, getResources().getDisplayMetrics());
        }
        return actionBarHeight;
    }

}