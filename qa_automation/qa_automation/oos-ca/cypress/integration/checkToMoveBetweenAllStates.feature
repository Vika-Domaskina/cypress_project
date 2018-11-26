Feature: check on the passage of all stages
As QA, I want to check move between all states from Applied to Hired and back
  My preconditions will be : 
    - change state from Applied to Interviewing
    - change state from Interviewing to Hired
    - change state from Hired to Interviewing
    - change state from Interviewing to Applied
    - check that the member is present in 'Applied' states

  Scenario Outline: Check move between states Applied and Interviewing
    Given I open application
    When Change state: "<columnName>" for a "<memberName>" the one step ahead
    And Change state: "<nextMoveColumnName>" for a "<memberName>" the one step ahead
    And Change state: "<lastMoveColumnName>" for a "<memberName>" the one step back
    And Change state: "<nextMoveColumnName>" for a "<memberName>" the one step back
    Then Check that in state: "<columnName>" "<memberName>" is present

    Examples:   
    |columnName|memberName|nextMoveColumnName|lastMoveColumnName|
    |Applied|emma|Interviewing|Hired|
