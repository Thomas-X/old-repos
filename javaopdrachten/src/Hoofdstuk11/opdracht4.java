package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas on 10/17/2016.
 */
public class opdracht4 extends Applet {
    @Override
    public void init() {
        super.init();

    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

        int y = 20;
        int teller;
        int var1;
        var1 = 0;
        g.drawString("3 x 0 =", 15, 20);
        g.drawString("0", 60, 20);
        for (teller = 0; teller < 10; teller++) {
            y += 20;
            var1 += 1;
            g.drawString("3 x " + var1 + " =", 15, y);
            g.drawString("" + (var1 * 3), 60, y);}}}

