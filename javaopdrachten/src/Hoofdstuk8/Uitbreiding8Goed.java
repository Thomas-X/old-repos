package Hoofdstuk8;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Barry on 23-9-2016.
 */
public class Uitbreiding8Goed extends Applet {

    int Valerie;
    int Jeroen;
    int Hand;
    int gewichtV;
    int gewichtJ;
    int gewichtH;
    Button Knop1;
    TextField V;
    TextField J;
    TextField H;

    @Override
    public void init() {
        super.init();
        gewichtV = 40;
        gewichtJ = 100;
        gewichtH = 80;
        V = new TextField();
        J = new TextField();
        H = new TextField();
        Knop1 = new Button("OK");
        Knop1.addActionListener(new Knop1Listener());

        add(V);
        add(J);
        add(H);
        add(Knop1);
    }

    public class Knop1Listener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            gewichtV = Integer.parseInt(V.getText());
            gewichtJ = Integer.parseInt(J.getText());
            gewichtH = Integer.parseInt(H.getText());
            repaint();
        }
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("Valerie", 110, 210);
        g.drawString("" + gewichtV, 110, 220);
        g.drawString("Jeroen", 160, 210);
        g.drawString("" + gewichtJ, 160, 220);
        g.drawString("Hans", 210, 210);
        g.drawString("" + gewichtH, 210, 220);
        g.drawLine(80, 200, 260, 200);
        g.drawLine(80, 200, 80, 50);
        g.drawString("20Kg__", 33, 180);
        g.drawString("40Kg__", 33, 160);
        g.drawString("60Kg__", 33, 140);
        g.drawString("80Kg__", 33, 120);
        g.drawString("100Kg__", 26, 100);
        g.drawString("120Kg__", 26, 80);
        g.setColor(Color.RED);
        g.fillRect(110, 200 - gewichtV, 40, gewichtV);
        g.setColor(Color.GREEN);
        g.fillRect(160, 200 - gewichtJ, 40, gewichtJ);
        g.setColor(Color.BLUE);
        g.fillRect(210, 200 - gewichtH, 40, gewichtH);
    }
}
