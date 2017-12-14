package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by user on 13-10-2016.
 */

public class Opdracht1 extends Applet {
    @Override
    public void init() {
        super.init();
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        int teller;
        int y = 0;
        for (teller = 0; teller < 10; teller++) {
            y += 20;
            g.drawLine(50, y, 300, y);
            g.drawString("" + teller, 305, y);
        }
    }
}
