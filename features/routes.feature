# features/simple_math.feature
Feature: test packages with routes
  In order to check the modules export ok
  As a developer building the modules
  I want to call the functions

  Scenario Outline: I will call the routing functions
    Given a route I want to test <var>
    When I fire it up <increment> <call>
    Then I get a working function response <url> <code>

    Examples:
      | var               | increment           | call | url                | code |
      | "/"               | "/"                 | 200  | "/"                | 200  |
      | "/users"          | "/users"            | 200  | "/users"           | 200  |
      | "/fake"           | "/fake"             | 404  | "/fake"            | 404  |
      | "/faked"          | "/faked"            | 404  | "/faked"           | 404  |
      | "/users?test=667" | "/users?test=667"   | 500  | "/users?test=667"  | 500  |
      | "/users?^&*(=667" | "/users?^&*(=667"   | 500  | "/users?^&*(=667"  | 500  |