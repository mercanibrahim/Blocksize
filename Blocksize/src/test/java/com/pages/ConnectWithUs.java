package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ConnectWithUs extends BasePage{
    @FindBy(xpath = "//a[@class='button button--orange']")
    public WebElement takeOpportunity;

    @FindBy(xpath = "//input[@name='firstname']")
    public WebElement firstName;

    @FindBy(id="lastname-5baff070-b786-4ce9-a6d6-a9f80d791203")
    public WebElement lastName;

    @FindBy(id="company-5baff070-b786-4ce9-a6d6-a9f80d791203")
    public WebElement companyName;

    @FindBy(id="email-5baff070-b786-4ce9-a6d6-a9f80d791203")
    public WebElement eMail;

    @FindBy(id="message-5baff070-b786-4ce9-a6d6-a9f80d791203")
    public WebElement message;

}
