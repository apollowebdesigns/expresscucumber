# features/simple_math.feature
Feature: test packages with routes
  In order to check the modules export ok
  As a developer building the modules
  I want to call the functions

  Scenario Outline: I will call the routing functions
    Given a route I want to test <var>
    When I fire it up <increment>
    Then I get a working function response <url> <code>

    Examples:
      | var      | increment      | url       | code |
      | "/"      | "/"            |  "/"      | 200  |
      | "/users" | "/users"       |  "/users" | 200  |