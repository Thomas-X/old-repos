package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by user on 13-10-2016.
 */

public class opdracht2 extends Applet {
    @Override
    public void init() {
        super.init();
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        int teller;
        int y = 0;
        int x = 0;
        for (teller = 10; teller < 21; teller++) {
            y += 20;
            x += 20;
//            g.drawLine(50, y, 300, y);
            g.drawString("" + teller, x, 30);
        }
    }
}
