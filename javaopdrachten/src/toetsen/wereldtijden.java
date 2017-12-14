package toetsen;
import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
public class wereldtijden extends Applet {
    private TextField tekstvak;
    private int london1;
    private int tokyo1;
    private int newyork1;
    private int hongkong1;

    @Override
    public void init() {
        super.init();
        tekstvak = new TextField(20);
        Button button1 = new Button("Toon Tijden");
        button1.addActionListener(new master());
        add(tekstvak);
        add(button1);
    }
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        if (london1 >= 24) {
            london1 = london1 - 1;
        }
        if (tokyo1 >= 24) {
            tokyo1 = tokyo1 - 7;
        }
        if (newyork1 >= 24) {
            newyork1 = newyork1 - 6;
        }
        if (hongkong1 >= 24) {
            hongkong1 = hongkong1 - 7;
        }
//        ALS WAARDE MINDER DAN 0 IS DAN ZORGEN WE DAT DAT NIET ZO IS
        if (london1 < 0) {
            london1 = london1 + 1;
        }
        if (tokyo1 < 0) {
            tokyo1 = tokyo1 + 7;
        }
        if (newyork1 < 0) {
            newyork1 = newyork1 + 6;
        }
        if (hongkong1 < 0) {
            hongkong1 = hongkong1 + 7;
        }
        int x = 50;
        int y1 = 60;
        int y2 = 80;
        int y3 = 90;
        int y4 = 100;
        g.drawString("Voer een uur in", 10, 20);
        g.drawString("Tijd in London: " + london1 + ":00", x,y1);
        g.drawString("Tijd in Tokyo: " + tokyo1 + ":00", x,y2);
        g.drawString("Tijd in New York: " + newyork1 + ":00", x, y3);
        g.drawString("Tijd in Hongkong: " + hongkong1 + ":00", x, y4);

    }
    private class master implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int input = Integer.parseInt(tekstvak.getText());
            if (input == 0 | input == 1 | input == 2 | input == 3 | input == 4 | input == 5 | input == 6 | input == 7 | input == 8 | input == 9 | input == 10 | input == 11 | input == 12 | input == 13 | input == 14 | input == 15 | input == 16 | input == 17 | input == 18 | input == 19 | input == 20 | input == 21 | input == 22 | input == 23) {
                london1 = input - 1;
                tokyo1 = input + 7;
            repaint();}
            if (input == 8 | input == 9 | input == 10 | input == 11 | input == 12 | input == 13 | input == 14 | input == 15 | input == 16) {
                hongkong1 = input - 7;}
            if (input == 7 | input == 8 | input == 9 | input == 10 | input == 11 | input == 12 | input == 13 | input == 14 | input == 15 | input == 16 | input == 17) {
                newyork1 = input - 6;}
            if (input == 17 | input == 18 | input == 19 | input == 20 | input == 21 | input == 22 | input == 23 | input == 0 ) {
                hongkong1 = (input + 7) - 24;}
            if(input == 18 | input == 19 | input == 20 | input == 21 | input == 22 | input == 23 | input == 0) {
                newyork1 = (input + 6) - 24;}
            if (input == 0 | input == 1 | input == 2 | input == 3 | input == 4 | input == 5 | input == 6 | input == 7) {
                hongkong1 = (input - 7) + 24;}
            if (input == 0 | input == 1 | input == 2 | input == 3 | input == 4 | input == 5 | input == 6 ) {
               newyork1 = (input - 6) + 24;}}}}
