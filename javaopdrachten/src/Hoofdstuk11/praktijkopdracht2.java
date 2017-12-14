package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Thomas on 10/19/2016.
 */
public class praktijkopdracht2 extends Applet {
    public TextField tekstvak;
    public String string1;
    public int y = 0;
    public int tekst = 0;

    @Override
    public void init() {
        Button button1;
        tekstvak = new TextField("", 2);
        button1 = new Button("OK");
        button1.addActionListener(new button1());
        string1 = tekstvak.getText();
//        add(tekstvak);
        add(button1);
    }


    @Override
    public void paint(Graphics g) {
        super.paint(g);
    }


    public class button1 implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int teller = 0;

            int teller1 = 0;
            int tekst2 = tekst * teller1;
            tekst++;
            if (teller1 == 10) {
                y = 0;
            } else {
                y = 0;
                getGraphics().clearRect(0, 0, getWidth(), getHeight());
            }
            for (teller = 0; teller < 10; teller++) {

                teller1++;
                y += 20;
                getGraphics().drawString(teller1 + " x " + tekst + " =" + (tekst * teller1), 50, y);

            }
        }
    }
}
