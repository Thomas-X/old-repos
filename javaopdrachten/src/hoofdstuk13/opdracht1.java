package hoofdstuk13;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by Thomas-X on 10/28/2016.
 */
public class opdracht1 extends Applet {
    @Override
    public void init() {
        super.init();
        button1("Red", Color.red);
        button1("Blue", Color.blue);
        button1("Yellow", Color.yellow);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
    }

    Button button1(String a, Color b) {
        Button button;
        button = new Button("" + (a));
        button.setBackground(b);
        add(button);
        return button;
    }
}
