package Hoofdstuk11;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas on 10/17/2016.
 */
public class opdracht7 extends Applet {
    @Override
    public void init() {
        super.init();
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

        int xy = 80;
        int size = 500;

        for (int teller = 0; teller < 50; teller++) {
//            int size2 = size - 30;
//            int xy2 = xy + 15;
            size -= 10;
            xy += 5;
            g.drawOval(xy , xy, size, size);


        }
    }
}
