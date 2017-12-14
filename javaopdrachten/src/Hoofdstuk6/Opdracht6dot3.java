package Hoofdstuk6;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas-X on 9/16/2016.
 */
public class Opdracht6dot3 extends Applet {


    int positive1;
    int positive2;
    int negative;

    @Override
    public void init() {
        super.init();
        positive1 = 1;
        positive2 = 1;
        negative = 1 + 1 + -3;
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString("" + (negative), 20, 20);


    }
}
