import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Player1 here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Player1 extends Actor {

    public Player1() {

    }

    public void act() {
        movingAndTurning();
        checkEdge();
    }   
    
    protected void movingAndTurning() {
        if (Greenfoot.isKeyDown("w")) {
            setLocation(getX(), getY() - 5);
        } else if (Greenfoot.isKeyDown("s")) {
            setLocation(getX(), getY() + 5);
        }

    }
    
    private void checkEdge() {
        if(getY() > getWorld().getHeight() - 50) setLocation(getX(), getWorld().getHeight() - 50);
        else if(getY() < 50) setLocation(getX(), 50);
    }
}
