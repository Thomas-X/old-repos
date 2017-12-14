/*
 * Copyright (C) 2016 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.example.android.miwok;

import android.content.Context;
import android.support.v4.content.ContextCompat;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;


public class NumberAdapter extends ArrayAdapter<NumberConstructor> {


// I HAVE NO IDEA WHATS GOING ON

    private int mColourResourceId;


    //so this is the constructor for numberadapter, the syntax is unclear but, I suppose it works.
    public NumberAdapter(Context context, ArrayList<NumberConstructor> numbers, int colourResourceId) {
        super(context, 0, numbers);
        mColourResourceId = colourResourceId;
    }


    //
    // This part is pure magic.
    //
    @Override
    public View getView(int position, View convertView, ViewGroup parent) { //convertView?!!?
        // Check if an existing view is being reused, otherwise inflate the view
        View listItemView = convertView;
        if (listItemView == null) {
            listItemView = LayoutInflater.from(getContext()).inflate(
                    R.layout.list_item, parent, false);
        }

        //
        // End of magic.
        //


        //getItem ?!?!!?!?!? ?!
        NumberConstructor currentWord = getItem(position);


        //finding text views / image views by their ids
        TextView miwokTextView = (TextView) listItemView.findViewById(R.id.miwok_text_view);
        TextView defaultTextView = (TextView) listItemView.findViewById(R.id.default_text_view);
        ImageView iconView = (ImageView) listItemView.findViewById(R.id.image);


        //zet de text voor de miwok translation (want dat is een taal blijkbaar).
        miwokTextView.setText(currentWord.getMiwokTranslation());

        //zet de text naar de engelse vertaling.
        defaultTextView.setText(currentWord.getDefaultTranslation());


        //zet de src voor de image view bij de bijbehoorende data in de array

        if (currentWord.hasImage()) {
            iconView.setImageResource(currentWord.getImageResourceId());
            iconView.setVisibility(View.VISIBLE);
        }
        else {
            iconView.setVisibility(View.GONE);
        }

        View textContainer = listItemView.findViewById(R.id.text_container);

        //??!?!?!?
        int color = ContextCompat.getColor(getContext(), mColourResourceId);
        //?!!?!?!?

        textContainer.setBackgroundColor(color);

        //returned de view die net gemaakt is, dit wordt herhaalt tot de array leeg is (dus dat alle array indexes gelooped zijn), denk ik
        return listItemView;
    }
}