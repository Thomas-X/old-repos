package com.example.android.quakereport;

import android.content.AsyncTaskLoader;
import android.content.Context;

import java.util.List;

/**
 * Created by Thomas-X on 1/27/2017.
 */


public class EarthquakeLoader extends AsyncTaskLoader<List<Earthquake>> {


    private String mUrl;

    public EarthquakeLoader(Context context, String url) {
        super(context);
        mUrl = url;
    }

    @Override
    protected void onStartLoading() {
        System.out.println("onStartLoading");

        forceLoad();
    }

    @Override
    public List<Earthquake> loadInBackground() {
        System.out.println("loadInBackground");

        if (mUrl == null) {
            return null;
        }


        //do network-y stuff
        List<Earthquake> earthquakes = QueryUtils.fetchEarthquakeData(mUrl);
        return earthquakes;
    }
}
