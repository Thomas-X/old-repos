import greenfoot.*;
import java.awt.Dimension;
import java.awt.Color;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Counter here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Counter extends Score {
	private int score;

	public Counter() {
		String scoreText;
		GreenfootImage image;
		Dimension dim;

		score = 0;
		scoreText = "Aantal diamanten: 0";
		image = new GreenfootImage(10,100);
		dim = getTextDimensions(image, scoreText);
		image.scale(dim.width, dim.height);
		setImage(image);
		image.setColor(new Color(0,0,0));
		image.drawString(scoreText, 0, dim.height);
	}

	public void act() {

	}  

	protected void addScore() {
		score++;
		updateImage();
	}

	protected void updateImage() {
		String scoreText;
		Dimension dim;
		GreenfootImage image;

		image = getImage();
		image.clear();
		scoreText = "Aantal diamanten: " + score;
		dim = getTextDimensions(image, scoreText);
		image.setColor(new Color(0,0,0));
		image.drawString(scoreText,0,dim.height);
	}

	public int getScore() {
		return this.score;
	}
}
