Feature: Filtering

  As QA, I want to check 'Clear' button on the page 

  Scenario Outline: Check 'Clear' button 
    Given I open application
    When Type data: "<name>" , "<city>" for person
    When Find and click to "Clear" button
    Then Count of members should be: <count>

    Examples:   
      | name      | city   | count |
      | Zerg      | Kiev   | 5     |