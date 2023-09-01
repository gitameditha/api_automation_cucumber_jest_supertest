Feature: Order Processing

  Scenario: Verify order processing with valid order
    Given user have valid authentication
    When user process the order
    Then the order status should be updated
    And the last updated timestamp should be updated

