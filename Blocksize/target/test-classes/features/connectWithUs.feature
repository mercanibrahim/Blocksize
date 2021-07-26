Feature: Filling the form "Connect With Us"


  Scenario: Using Opportunities Page to send my information
    Given the user is on the Blocksize Capital page
    When the user clicks on Opportunities
    And the user clicks on Take the opportunity
    And the user enter First name as "Ibrahim"
    And the user enter Last name as "Mercan"
    And the user enter Company name as "AgilePro"
    And the user enter Email as "mercanibrahim@hotmail.com"
    And the user enter a message "Hello Stepan. This is Ibrahim. How are you?"
    Then Blocksize Capital representative can see First name as "Ibrahim"
