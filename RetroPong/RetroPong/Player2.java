import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Player2 here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Player2 extends Actor {

    public Player2() {
        
    }

    public void act() {
        movingAndTurning();
        checkEdge();
    }   
    
    protected void movingAndTurning() {
        if (Greenfoot.isKeyDown("UP")) {
            setLocation(getX(), getY() - 5);
        } else if (Greenfoot.isKeyDown("DOWN")) {
            setLocation(getX(), getY() + 5);
        }
    }

    private void checkEdge() {
        if(getY() > getWorld().getHeight() - 50) setLocation(getX(), getWorld().getHeight() - 50);
        else if(getY() < 50) setLocation(getX(), 50);
    }
}   
