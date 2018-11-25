Feature: Filtering

  As QA, I want to check filtering on the page (negative case)

  Scenario Outline: Check name and city for filters (negative case)
    Given I open application
    When Type data: "<name>" , "<city>" for person
    Then Count of members should be: <count>

    Examples:   
      | name      | city   | count |
      | Viktoria  | Kiev   | 0     |