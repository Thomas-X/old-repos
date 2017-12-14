package Hoofdstuk10;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Barry on 29-9-2016.
 */
public class Opdracht10dot34 extends Applet {


    Label label;
    Label jaartal;

    TextField maandnr;
    TextField jaarnr;

    int maand;
    int jaar;
    int feb;

    String tekst;
    String tekst1;


    @Override
    public void init() {
        super.init();

        maandnr = new TextField("", 2);
        jaarnr = new TextField("", 2);

        label = new Label("Maand Nummer: ");
        jaartal = new Label("Vul hier jaartal in: ");

        maandnr.addActionListener(new MaandListener());

        tekst = "";

        add(jaartal);
        add(jaarnr);
        add(label);
        add(maandnr);

    }


    class MaandListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            String s;
            String t;

            t = jaarnr.getText();
            jaar = Integer.parseInt(t);
            if ((jaar % 4 == 0 && !(jaar % 100 == 0)) ||
                    jaar % 400 == 0) {
                tekst1 = "" + jaar + " is een schrikkeljaar";
                feb = 28;
            } else {
                tekst1 = "" + jaar + " is geen schrikkeljaar";
                feb = 30;
            }

            s = maandnr.getText();
            maand = Integer.parseInt(s);

            if (maand == 1) {
                tekst = "Januari 31 dagen";
            }
            if (maand == 2) {
                tekst = "Februari " + (feb) + " dagen";
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
            jaarnr.setText("");
            repaint();
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("" + tekst, 60, 50);
        g.drawString("" + tekst1, 60, 70);

    }
}
