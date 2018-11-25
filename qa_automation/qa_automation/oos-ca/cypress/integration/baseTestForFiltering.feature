Feature: Filtering

  As QA, I want to check base filtering on the page

  Scenario Outline: Check name and city for filters
    Given I open application
    When Type full data: "<name>" , "<city>" for existing person
    Then Count of members should be: <count>

    Examples:   
      | name   | city       | count |
      | lloyd  | hereford   | 1     |