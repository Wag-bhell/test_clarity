Feature: Overlay test feature
  Scenario: Click on button until "Click Done" is displayed
    Given I visit the "ClarityTestPage/ClarityTestPage.html?withOverlay" page
    When I type "hello" in the input field "input_text1"
    And I click on the button by id "propagate"
    Then The other inputs should have the value "hello"
    When I click on the button by text "Clear All"
    Then The other inputs should have the value ""