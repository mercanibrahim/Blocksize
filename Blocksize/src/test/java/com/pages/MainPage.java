package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MainPage extends BasePage {
    @FindBy(xpath = "//li[@id='menu-item-35']")
    public WebElement opportunitiesButton;

    @FindBy(xpath = "//li[@id='menu-item-160']")
    public WebElement RequestADemo;


}
