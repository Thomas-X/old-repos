package hoofdstuk14;

/**
 * Created by Thomas-X on 11/29/2016.
 */

import java.awt.*;
import java.applet.*;
import java.awt.event.*;


public class test extends Applet {
    TextField tekstvak;
    Label label;
    String s, tekst;
    int dag;
    int int1;
    int int2;

    public void init() {
        tekstvak = new TextField("", 20);
        label = new Label("Type het dagnummer en druk op enter");
        tekstvak.addActionListener( new TekstvakListener() );
        tekst = "";
        add(label);
        add(tekstvak);
    }

    public void paint(Graphics g) {
        g.drawString(tekst, 50, 60 );
    }

    class TekstvakListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            s = tekstvak.getText();
            dag = Integer.parseInt( s);
            switch(dag) {

                default:
                    tekst = "U hebt een verkeerd nummer ingetikt ..!";
                    break;
            }
            repaint();
        }
    }
}
