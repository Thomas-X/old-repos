package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas on 10/17/2016.
 */
public class opdracht5 extends Applet {
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
        for (teller = 0; teller < 5; teller++) {
            x += 20;
            y += 20;
            g.drawRect(x, y, 20, 20);
        }
    }
}
