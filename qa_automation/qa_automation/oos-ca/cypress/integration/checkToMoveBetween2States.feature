Feature: States
  As QA, I want to check move between states Applied and Interviewing
  My preconditions will be : 
    - change state from Applied to Interviewing
    - check that the member is present in 'Interviewing' state

  Scenario Outline: Check move between states Applied and Interviewing
    Given I open application
    When Change state: "<columnName>" for a "<memberName>" the one step ahead
    Then Check that in state: "<changedColumnName>" "<changedName>" is present

    Examples:   
    |columnName|memberName|changedColumnName|changedName|
    |Applied|emma|Interviewing|emma|
