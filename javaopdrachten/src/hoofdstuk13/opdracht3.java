package hoofdstuk13;
import java.applet.Applet;
import java.awt.*;
/**
 * Created by Thomas-X on 10/28/2016.
 */
public class opdracht3 extends Applet {
    int y1 = 0;
    int x1 = 0;
    int counter = 0;
    @Override
    public void init() {
        super.init();
    }

    // METHOD
    void drawBrick(Graphics g) {
        g.setColor(Color.RED);
        g.fillRect(x1, y1, 40, 20);
        g.setColor(Color.BLACK);
        g.drawRect(x1, y1, 40, 20);
    }

    public void paint(Graphics g) {
        counter = 0;
        while (counter < 5) {
                for (int counter2 = 0; counter2 < 10; counter2++) {
                    drawBrick(g);
                    x1 += 40;
                }
                counter++;
                x1 = 0;
                y1 += 20 * counter / counter;
            }
    }
}
