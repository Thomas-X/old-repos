package hoofdstuk13;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas-X on 10/28/2016.
 */
public class opdracht2 extends Applet {
    @Override
    public void init() {
        super.init();

    }

    @Override
    public void paint(Graphics g) {
        drawTriangle(50, 50, 150, 100, 20, 20);

    }


    void drawTriangle(int x1, int x2, int x3, int y1, int y2, int y3) {
        getGraphics().setColor(Color.black);
        getGraphics().drawLine(x1, y1, x2, y2);
        getGraphics().drawLine(x2, y2, x3, y3);
        getGraphics().drawLine(x3, y3, x1, y1);
    }

}
