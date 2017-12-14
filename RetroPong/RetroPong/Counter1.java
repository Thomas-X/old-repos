import greenfoot.*;
import greenfoot.GreenfootImage;
import greenfoot.Actor;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Dimension;

//Quincy
import java.awt.Color;
//Quincy

public class Counter1 extends Actor {
    
    //QUINCY
    int score1 = 0;
    public void act() {
    if (score1 >= 0 && score1 < 7) {
            setImage(new GreenfootImage("" + score1, 24, Color.WHITE, Color.BLACK));
            
    }
    else if (score1 >=7) {
            setImage(new GreenfootImage("PLAYER 1 HAS WON", 24, Color.WHITE, Color.BLACK));
            Greenfoot.stop();
    }
}
    
        public void addScore1()
    {
        score1++;
    //QUINCY
}
}
