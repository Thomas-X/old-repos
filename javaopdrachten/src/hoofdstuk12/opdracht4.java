package hoofdstuk12;

import java.awt.*;
import java.applet.*;

public class opdracht4 extends Applet {
    public boolean gevonden;
    public double[] salaris = { 100.0, 200.0, 500.0, 400.0, 300.0 };
    public double gezocht;

    public void init() {
        gezocht = 400;
        gevonden = false;
        int teller = 0;
        while(gevonden != true) {
            if(salaris[teller] == gezocht) {
                gevonden = true;
            }
            if(salaris[teller] == salaris.length) {
                gevonden = false;
                break;
            }
            teller ++;
        }
    }

    public void paint(Graphics g) {
        if(gevonden == true) {
            g.drawString("De waarde is gevonden.", 20, 50);
        }
        else {
            g.drawString("De waarde is niet gevonden.", 20, 50);
        }
    }
}