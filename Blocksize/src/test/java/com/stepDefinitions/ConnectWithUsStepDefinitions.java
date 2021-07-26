package com.stepDefinitions;

import com.pages.ConnectWithUs;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.junit.Assert;


public class ConnectWithUsStepDefinitions {

    @When("the user clicks on Take the opportunity")
    public void the_user_clicks_on_Take_the_opportunity() throws InterruptedException{
        ConnectWithUs connectWithUs = new ConnectWithUs();
        connectWithUs.takeOpportunity.click();
        Thread.sleep(5000);
    }
    @When("the user enter First name as {string}")
    public void the_user_enter_First_name_as(String string) throws InterruptedException{
        ConnectWithUs connectWithUs = new ConnectWithUs();
        connectWithUs.firstName.sendKeys(string);
        Thread.sleep(5000);
    }

    @When("the user enter Last name as {string}")
    public void the_user_enter_Last_name_as(String string) throws InterruptedException{
       ConnectWithUs connectWithUs = new ConnectWithUs();
       connectWithUs.lastName.sendKeys(string);
       Thread.sleep(5000);
    }
    @When("the user enter Company name as {string}")
    public void the_user_enter_Company_name_as(String string) throws InterruptedException {
        ConnectWithUs connectWithUs = new ConnectWithUs();
        connectWithUs.companyName.sendKeys(string);
        Thread.sleep(5000);
    }
    @When("the user enter Email as {string}")
    public void the_user_enter_Email_as(String string) throws InterruptedException {
        ConnectWithUs connectWithUs = new ConnectWithUs();
        connectWithUs.eMail.sendKeys(string);
        Thread.sleep(5000);
    }
    @When("the user enter a message {string}")
    public void the_user_enter_a_message(String string) throws InterruptedException {
        ConnectWithUs connectWithUs = new ConnectWithUs();
        connectWithUs.message.sendKeys(string);
        Thread.sleep(5000);
    }
    @Then("Blocksize Capital representative can see First name as {string}")
    public void blocksize_Capital_representative_can_see_First_name_as(String string) throws InterruptedException{
        ConnectWithUs connectWithUs = new ConnectWithUs();
        String actualText = connectWithUs.firstName.getAttribute("value");
        System.out.println(actualText);
        Assert.assertEquals(string,actualText);
        Thread.sleep(3000);
    }

}



