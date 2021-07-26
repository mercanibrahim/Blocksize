package com.stepDefinitions;



import com.utilities.ConfigurationReader;
import com.utilities.Driver;
import com.pages.MainPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.junit.Assert;


public class MainPageStepDefinitions {
    @Given("the user is on the Blocksize Capital page")
    public void the_user_is_on_the_Blocksize_Capital_page() throws InterruptedException{
        Driver.get().get(ConfigurationReader.get("url"));
        String expectedUrl = ConfigurationReader.get("url");
        String actualUrl = Driver.get().getCurrentUrl();
        Assert.assertEquals(expectedUrl,actualUrl);
        Thread.sleep(5000);

    }

    @When("the user clicks on Opportunities")
    public void the_user_clicks_on_Opportunities() throws InterruptedException {
      MainPage mainPage = new MainPage();
      mainPage.opportunitiesButton.click();
      Thread.sleep(5000);
    }

    @Then("the title of the page contains Opportunities")
    public void the_title_of_the_page_contains_Opportunities() throws InterruptedException {
        Assert.assertTrue(Driver.get().getTitle().contains("Opportunities"));
        Thread.sleep(5000);
    }



}
