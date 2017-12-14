package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas on 10/17/2016.
 */
public class opdracht8 extends Applet {
    @Override
    public void init() {
        super.init();
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        int teller;
        int xy = 50;
        int size = 0;
        for (teller = 0; teller < 100; teller++) {
            size += 5;
            g.drawOval(xy, xy, size, size);
        }
    }
}
