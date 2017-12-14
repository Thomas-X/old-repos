package Hoofdstuk8;

import java.applet.Applet;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Praktijk8 extends Applet {

    TextField tekstvak1;
    TextField tekstvak2;
    Button multiply;
    Button divide;
    Button plus;
    Button minus;
    double outputmultiply;
    double outputdivide;
    double outputplus;
    double outputminus;

    @Override
    public void init() {
        super.init();

        tekstvak1 = new TextField("", 30);
        tekstvak2 = new TextField("", 60);
        multiply = new Button("*");
        divide = new Button("/");
        plus = new Button("+");
        minus = new Button("-");
        multiply.addActionListener(new multiplyListener());
        divide.addActionListener(new divideListener());
        plus.addActionListener(new plusListener());
        minus.addActionListener(new minusListener());
        add(tekstvak1);
        add(tekstvak2);
        add(multiply);
        add(divide);
        add(plus);
        add(minus);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);

    }

    public class multiplyListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            outputmultiply = Double.parseDouble(tekstvak1.getText()) * Double.parseDouble(tekstvak2.getText());
            tekstvak1.setText(String.valueOf(outputmultiply));
            tekstvak2.setText("");
            repaint();
        }
    }

    public class divideListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            outputdivide = Double.parseDouble(tekstvak1.getText()) / Double.parseDouble(tekstvak2.getText());
            tekstvak1.setText(String.valueOf(outputdivide));
            tekstvak2.setText("");
            repaint();
        }
    }

    public class plusListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            outputplus = Double.parseDouble(tekstvak1.getText()) + Double.parseDouble(tekstvak2.getText());
            tekstvak1.setText(String.valueOf(outputplus));
            tekstvak2.setText("");
            repaint()
            ;
        }
    }

    public class minusListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            outputminus = Double.parseDouble(tekstvak1.getText()) - Double.parseDouble(tekstvak2.getText());
            tekstvak1.setText(String.valueOf(outputminus));
            tekstvak2.setText("");
            repaint();
        }
    }

}
