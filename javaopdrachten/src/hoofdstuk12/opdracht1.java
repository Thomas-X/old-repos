package hoofdstuk12;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas-X on 10/25/2016.
 */
public class opdracht1 extends Applet {

    public int y = 0;
    public int teller1 = 0;
    public int sum;
    public int teller2 = 0;
    @Override
    public void init() {
        super.init();
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        int[] table = {500, 1000, 200, 300, 400, 10, 999, 760, 120, 666};
        for (int teller = 0; teller < 10; teller++) {
            y += 20;
            g.drawString("" + (table[teller1]), 50, y);
            sum += table[teller1];
            teller1++;
            teller2++;

        }
        if (teller2 == 10) {
            g.drawString("" + (sum / teller1), 100, 50);
        }

    }
}

