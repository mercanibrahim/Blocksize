Feature: Main Page


  Scenario: Using Main Page the check website
    Given the user is on the Blocksize Capital page
    When the user clicks on Opportunities
    Then the title of the page contains Opportunities

