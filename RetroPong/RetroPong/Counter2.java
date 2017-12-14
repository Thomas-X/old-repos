import greenfoot.*;
import greenfoot.GreenfootImage;
import greenfoot.Actor;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Dimension;

//Quincy
import java.awt.Color;
//Quincy

public class Counter2 extends Actor {
    
    //QUINCY
    int score2 = 0;
    public void act() {
                if (score2 >= 0 && score2 < 7) {
            setImage(new GreenfootImage("" + score2, 24, Color.WHITE, Color.BLACK));
            
    }
    else if (score2 >=7) {
            setImage(new GreenfootImage("PLAYER 2 HAS WON", 24, Color.WHITE, Color.BLACK));
            Greenfoot.stop();
    }
}
    
    
        public void addScore2()
    {
        score2++;
    }
    //QUINCY
}