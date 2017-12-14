package hoofdstuk13;

import org.w3c.dom.css.RGBColor;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas on 10/29/2016.
 */
public class praktijk1 extends Applet {


    public void init() {
        super.init();
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        drawTree(g, 200, 200);
    }

    void drawTree(Graphics g, int x1, int y1) {
        // TODO make this arguments for method
        //drawing the trunk of the tree
        int R = 139;
        int G = 69;
        int B = 19;
        Color brownColor = new Color(R, G, B);
        g.setColor(brownColor);
        g.fillRect(x1, y1, 40, 120);

        //drawing the 'leaves'
        int R2D2 = 35;
        int G2 = 156;
        int B2 = 31;

        Color greenColor = new Color(R2D2, G2, B2);
        g.setColor(greenColor); //since we're only gonna draw 'leaves'

        // draw left Oval
        int x2 = x1 - 30;
        int y2 = (y1 - 20);
        g.fillOval(x2, y2, 40, 40);
        /// draw right Oval
        int x3 = x1 + 30;
        int y3 = (y1 - 20);
        g.fillOval(x3, y3, 40, 40);
        //draw connnecting Rect, otherwise big gaping hole between Ovals layer1
        int x4 = x1 - 20;
        int y4 = y1 - 15;
        g.fillRect(x4, y4, 60, 30);
        //draw left Oval2
        int x2dot1 = x2 + 20;
        int y2dot1 = y2 - 15;
        g.fillOval(x2dot1, y2dot1, 40, 40);
        //draw right Oval2
        int x3dot1 = x3 - 20;
        int y3dot1 = y3 - 15;
        g.fillOval(x3dot1, y3dot1, 40, 40);
        //draw the 'tip'
        int x3dot2 = x3dot1 + 1;
        int y3dot2 = y3dot1 - 8;
        g.fillOval(x3dot2, y3dot2, 20, 20);
    }
}

