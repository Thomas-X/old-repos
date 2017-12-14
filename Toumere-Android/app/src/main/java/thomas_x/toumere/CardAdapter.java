package thomas_x.toumere;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by Thomas-X on 1/19/2017.
 */

public class CardAdapter extends ArrayAdapter<CardConstructor> {


    //so this is the constructor for numberadapter, the syntax is unclear but, I suppose it works.
    public CardAdapter(Context context, ArrayList<CardConstructor> numbers) {
        super(context, 0, numbers);
    }

    static class ViewHolderItem {
        ImageView image;
        TextView title;
        TextView text;
    }


    //
    // This part is pure magic.
    //
    @Override
    public View getView(int position, View convertView, ViewGroup parent) { //convertView?!!?
        // Check if an existing view is being reused, otherwise inflate the view

        ViewHolderItem viewHolderItem;

        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(
                    R.layout.cards, parent, false);

            //set up viewholder
            viewHolderItem = new ViewHolderItem();
            viewHolderItem.title = (TextView) convertView.findViewById(R.id.titleHeader);
            viewHolderItem.text = (TextView) convertView.findViewById(R.id.shortText);
            viewHolderItem.image = (ImageView) convertView.findViewById(R.id.imageBig);

            convertView.setTag(viewHolderItem);


        }
        else {
            viewHolderItem = (ViewHolderItem) convertView.getTag();
        }

        //
        // End of magic.
        //


        CardConstructor currentArrayItem = getItem(position);


//        Button button = (Button) currentArrayItem.findViewById(R.id.readMoreButton);

        if (currentArrayItem != null) {

            //set image
            viewHolderItem.image.setImageResource(currentArrayItem.getImageResourceId());
            viewHolderItem.image.setTag(currentArrayItem.getImageResourceId());

            //set titleText
            viewHolderItem.title.setText(currentArrayItem.getTitleHeader());
            viewHolderItem.title.setTag(currentArrayItem.getTitleHeader());

            //set text
            viewHolderItem.text.setText(currentArrayItem.getText());
            viewHolderItem.text.setTag(currentArrayItem.getText());

        }
//        Intent i = new Intent(currentArrayItem.getIntentButton());
        //TODO FIX INTENT BUTTON

        return convertView;

    }
}
