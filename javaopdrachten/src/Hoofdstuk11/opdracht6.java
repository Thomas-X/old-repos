package Hoofdstuk11;
import java.applet.Applet;
import java.awt.*;
public class opdracht6 extends Applet {
    @Override public void init() {
        super.init();
    }
    @Override public void paint(Graphics g) {
        super.paint(g);
        int xy = 80;
        int size = 200;
        for (int teller = 0; teller < 5; teller++) {
            size -= 30;
            xy += 15;
            g.drawOval(xy , xy, size, size);}}}