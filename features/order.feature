Feature: Order Processing

  Scenario: Verify order processing with valid order
    Given a sample order
    When I process the order
    Then the order status should be updated
    And the last updated timestamp should be updated

