package Hoofdstuk10;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas-X on 9/28/2016.
 */
public class Opdracht10dot3 extends Applet {

    Label label;
    TextField maandnr;
    int maand;
    String tekst;

    @Override
    public void init() {
        super.init();

        maandnr = new TextField("", 2);
        label = new Label("Maand Nummer: ");

        maandnr.addActionListener(new MaandListener());

        tekst = "";

        add(label);
        add(maandnr);

    }


    class MaandListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            String s;

            s = maandnr.getText();
            maand = Integer.parseInt(s);

            if (maand == 1) {
                tekst = "Januari 31 dagen";
            }
            if (maand == 2) {
                tekst = "Februari 30 dagen";
            }
            if (maand == 3) {
                tekst = "Maart 31 dagen";
            }
            if (maand == 4) {
                tekst = "April 30 dagen";
            }
            if (maand == 5) {
                tekst = "Mei 31 dagen";
            }
            if (maand == 6) {
                tekst = "Juni 30 dagen";
            }
            if (maand == 7) {
                tekst = "Juli 31 dagen";
            }
            if (maand == 8) {
                tekst = "Augustus 31 dagen";
            }
            if (maand == 9) {
                tekst = "September 30 dagen";
            }
            if (maand == 10) {
                tekst = "Oktober 31 dagen";
            }
            if (maand == 11) {
                tekst = "November 30 dagen";
            }
            if (maand == 12) {
                tekst = "December 31 dagen";
            }
            if (maand >= 13) {
                tekst = "Deze maand bestaat niet lol noob xd";
            }
            maandnr.setText("");
            repaint();
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("" + tekst, 60, 50);

    }
}
