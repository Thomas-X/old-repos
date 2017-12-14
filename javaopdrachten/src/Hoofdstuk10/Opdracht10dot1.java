package Hoofdstuk10;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas-X on 9/28/2016.
 */
public class Opdracht10dot1 extends Applet {

    TextField tekstvak1;
    TextField tekstvak2;
    TextField tekstvak3;

    @Override
    public void init() {
        super.init();
        tekstvak1 = new TextField("", 30);
        tekstvak2 = new TextField("", 60);
        tekstvak3 = new TextField("", 90);
        tekstvak1.addActionListener(new checkListener());
        tekstvak2.addActionListener(new checkListener());
        add(tekstvak1);
        add(tekstvak2);
        add(tekstvak3);



    }

    public class checkListener extends Applet implements ActionListener {
        public void actionPerformed(ActionEvent e) {

            if (Double.parseDouble(tekstvak1.getText()) > Double.parseDouble(tekstvak2.getText())) {
                tekstvak3.setText("TextField 1 has the highest value!");
                repaint();
            }
            if (Double.parseDouble(tekstvak2.getText()) > Double.parseDouble(tekstvak1.getText())) {
                tekstvak3.setText("TextField 2 has the highest value!");
                repaint();

            }
        }
    }
}

