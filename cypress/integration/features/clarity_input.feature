Feature: Input test feature
  Scenario: Try to change the inputs values
    Given I visit the "ClarityTestPage/ClarityTestPage.html?withOverlay" page
    When I type "hello" in the input field "input_text1"
    And I click on the button by id "propagate"
    Then The inputs should have the value "hello"
    When I click on the button by text "Clear All"
    Then The inputs should have the value ""