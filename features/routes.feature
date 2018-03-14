# features/simple_math.feature
Feature: test get request
  In order make a get
  As a developer
  I want to make a get request

  Scenario Outline: make a get request
    Given a place I want to go <var>
    When I go to it <increment>
    Then I get stuff back <result>

    Examples:
      | var                           | increment         | result   |
      | "http://localhost:3000/users" |         "dfsiodj" |    "105" |