$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Uniform.feature");
formatter.feature({
  "line": 1,
  "name": "Automation testing for Uniform Website",
  "description": "",
  "id": "automation-testing-for-uniform-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Validate Sales orders start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Admin enters \"\u003cstartdate\u003e\",\"\u003cenddate\u003e\" in the start date and end date fields",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin varifies the result \"\u003cstartdate\u003e\",\"\u003cenddate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;",
  "rows": [
    {
      "cells": [
        "startdate",
        "enddate"
      ],
      "line": 23,
      "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;1"
    },
    {
      "cells": [
        "!%$#",
        "2021-10-06"
      ],
      "line": 24,
      "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;2"
    },
    {
      "cells": [
        "acfdefrt",
        "aaswered"
      ],
      "line": 25,
      "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;3"
    },
    {
      "cells": [
        "21-12-2021",
        "20-12-2021"
      ],
      "line": 26,
      "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;4"
    },
    {
      "cells": [
        "2021-10-08",
        "2021-06-18"
      ],
      "line": 27,
      "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;5"
    },
    {
      "cells": [
        "2021-04-23",
        "2021-09-07"
      ],
      "line": 28,
      "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4972395900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6636682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 385050200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2040006300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2014231400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 8904638300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2103007200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Sales orders start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Admin enters \"!%$#\",\"2021-10-06\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin varifies the result \"!%$#\",\"2021-10-06\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5895160100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2148498600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2127840800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1209684100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1544718600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!%$#",
      "offset": 14
    },
    {
      "val": "2021-10-06",
      "offset": 21
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 1055730100,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:195)\r\n\tat ✽.When Admin enters \"!%$#\",\"2021-10-06\" in the start date and end date fields(Uniform.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!%$#",
      "offset": 27
    },
    {
      "val": "2021-10-06",
      "offset": 34
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 282045600,
  "status": "passed"
});
formatter.before({
  "duration": 2413722500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 7884348800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 200202300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 4756316100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2011971200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9952468300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2099489100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Sales orders start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Admin enters \"acfdefrt\",\"aaswered\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin varifies the result \"acfdefrt\",\"aaswered\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5876078000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2110316200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2127060000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1091481100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1117771500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acfdefrt",
      "offset": 14
    },
    {
      "val": "aaswered",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 449022700,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:200)\r\n\tat ✽.When Admin enters \"acfdefrt\",\"aaswered\" in the start date and end date fields(Uniform.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "acfdefrt",
      "offset": 27
    },
    {
      "val": "aaswered",
      "offset": 38
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 231353500,
  "status": "passed"
});
formatter.before({
  "duration": 2688788200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6446429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 228785800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1756727400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2007389200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9368120700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2125745300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate Sales orders start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin varifies the result \"21-12-2021\",\"20-12-2021\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5874575700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2108086700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2135157300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1102262000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1090363500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21-12-2021",
      "offset": 14
    },
    {
      "val": "20-12-2021",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 461071800,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:200)\r\n\tat ✽.When Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields(Uniform.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21-12-2021",
      "offset": 27
    },
    {
      "val": "20-12-2021",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 149494600,
  "status": "passed"
});
formatter.before({
  "duration": 2616052500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 7095746900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 335323400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1919818900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2015824700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9106962500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2095864400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate Sales orders start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin varifies the result \"2021-10-08\",\"2021-06-18\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5866994500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2108676200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2091154100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1100343100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1111390900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-08",
      "offset": 14
    },
    {
      "val": "2021-06-18",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 443238800,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:223)\r\n\tat ✽.When Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields(Uniform.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-08",
      "offset": 27
    },
    {
      "val": "2021-06-18",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 208233800,
  "status": "passed"
});
formatter.before({
  "duration": 2287852600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 5884064900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 207434700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1816376000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2020716800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9626061600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2097814200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate Sales orders start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-orders-start-date-and-end-date-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Admin enters \"2021-04-23\",\"2021-09-07\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin varifies the result \"2021-04-23\",\"2021-09-07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5890125500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2100323700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2106921800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1094135600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1109578100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-04-23",
      "offset": 14
    },
    {
      "val": "2021-09-07",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 486111500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 945650900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-04-23",
      "offset": 27
    },
    {
      "val": "2021-09-07",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "duration": 102908000,
  "status": "passed"
});
formatter.after({
  "duration": 173910600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Validate Group by and orders status functionality in orders page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Admin selects an \"\u003coption\u003e\" in Group by field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Admin selects an option \"\u003coption1\u003e\"in Orders status field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page;",
  "rows": [
    {
      "cells": [
        "option",
        "option1"
      ],
      "line": 39,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page;;1"
    },
    {
      "cells": [
        "Weeks",
        "Pending"
      ],
      "line": 40,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page;;2"
    },
    {
      "cells": [
        "Days",
        "All Statuses"
      ],
      "line": 41,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2291126500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 5861606200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 237495500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1791394300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2007909800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9592023100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2102758900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Validate Group by and orders status functionality in orders page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Admin selects an \"Weeks\" in Group by field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Admin selects an option \"Pending\"in Orders status field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5875484600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Weeks",
      "offset": 18
    }
  ],
  "location": "UniformDefinition.admin_selects_an_in_Group_by_field(String)"
});
formatter.result({
  "duration": 1128548500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_selects_an_option_in_Orders_status_field(String)"
});
formatter.result({
  "duration": 2140853300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 829790200,
  "status": "passed"
});
formatter.after({
  "duration": 271644800,
  "status": "passed"
});
formatter.before({
  "duration": 2316827100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 5887950200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 237187000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1824291200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2013095000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9733598000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2075465000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Validate Group by and orders status functionality in orders page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-orders-status-functionality-in-orders-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Admin selects an \"Days\" in Group by field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Admin selects an option \"All Statuses\"in Orders status field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5853248100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Days",
      "offset": 18
    }
  ],
  "location": "UniformDefinition.admin_selects_an_in_Group_by_field(String)"
});
formatter.result({
  "duration": 1145627900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Statuses",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_selects_an_option_in_Orders_status_field(String)"
});
formatter.result({
  "duration": 2110105500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1262598300,
  "status": "passed"
});
formatter.after({
  "duration": 261605900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Validate pagination for orders page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagination-for-orders-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Admin enters \"\u003cstdate\u003e\",\"\u003cendate\u003e\",\"\u003cgrpby\u003e\",\"\u003cordersts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Admin checks if pagination exists",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Admin checks for the total page count",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Admin checks the next button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Admin checks for previous button",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagination-for-orders-page;",
  "rows": [
    {
      "cells": [
        "stdate",
        "endate",
        "grpby",
        "ordersts"
      ],
      "line": 53,
      "id": "automation-testing-for-uniform-website;validate-pagination-for-orders-page;;1"
    },
    {
      "cells": [
        "2019-03-04",
        "2021-10-12",
        "Days",
        "All Statuses"
      ],
      "line": 54,
      "id": "automation-testing-for-uniform-website;validate-pagination-for-orders-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2396170800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 5951593300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 245718200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1813744300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2020170000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9600653200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2080639900,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validate pagination for orders page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagination-for-orders-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Admin navigates to the orders page on clicking orders",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Admin enters \"2019-03-04\",\"2021-10-12\",\"Days\",\"All Statuses\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Admin checks if pagination exists",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Admin checks for the total page count",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Admin checks the next button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Admin checks for previous button",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_orders_page_on_clicking_orders()"
});
formatter.result({
  "duration": 5900638600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-03-04",
      "offset": 14
    },
    {
      "val": "2021-10-12",
      "offset": 27
    },
    {
      "val": "Days",
      "offset": 40
    },
    {
      "val": "All Statuses",
      "offset": 47
    }
  ],
  "location": "UniformDefinition.admin_enters(String,String,String,String)"
});
formatter.result({
  "duration": 2669093700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 974260000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_if_pagination_exists()"
});
formatter.result({
  "duration": 34626100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_the_total_page_count()"
});
formatter.result({
  "duration": 38513500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_the_next_button()"
});
formatter.result({
  "duration": 3276691300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_previous_button()"
});
formatter.result({
  "duration": 2640141400,
  "status": "passed"
});
formatter.after({
  "duration": 367533700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 56,
      "value": "############################################################################################################################"
    }
  ],
  "line": 58,
  "name": "Validate Sales Tax start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Admin enters \"\u003cstartdate\u003e\",\"\u003cenddate\u003e\" in the start date and end date fields",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin varifies the result \"\u003cstartdate\u003e\",\"\u003cenddate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;",
  "rows": [
    {
      "cells": [
        "startdate",
        "enddate"
      ],
      "line": 68,
      "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;1"
    },
    {
      "cells": [
        "%@!^\u0026",
        "2021-04-23"
      ],
      "line": 69,
      "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;2"
    },
    {
      "cells": [
        "acfdefrt",
        "aaswered"
      ],
      "line": 70,
      "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;3"
    },
    {
      "cells": [
        "21-12-2021",
        "20-12-2021"
      ],
      "line": 71,
      "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;4"
    },
    {
      "cells": [
        "2021-10-08",
        "2021-06-18"
      ],
      "line": 72,
      "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;5"
    },
    {
      "cells": [
        "2021-04-23",
        "2021-09-07"
      ],
      "line": 73,
      "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2424310600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6045168600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 212338300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2181545400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2008980400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9158693200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2081338600,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Validate Sales Tax start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Admin enters \"%@!^\u0026\",\"2021-04-23\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin varifies the result \"%@!^\u0026\",\"2021-04-23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 4874699400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2120572700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2126425100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1105381900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1097338600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%@!^\u0026",
      "offset": 14
    },
    {
      "val": "2021-04-23",
      "offset": 22
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 421225700,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:195)\r\n\tat ✽.When Admin enters \"%@!^\u0026\",\"2021-04-23\" in the start date and end date fields(Uniform.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "%@!^\u0026",
      "offset": 27
    },
    {
      "val": "2021-04-23",
      "offset": 35
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 317855200,
  "status": "passed"
});
formatter.before({
  "duration": 2364093800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6775350900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 238386900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1777188000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2014073400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 8772815800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2104070700,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Validate Sales Tax start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Admin enters \"acfdefrt\",\"aaswered\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin varifies the result \"acfdefrt\",\"aaswered\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 4892087400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2123616800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2106888600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1284371200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1496310400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acfdefrt",
      "offset": 14
    },
    {
      "val": "aaswered",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 590985100,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:200)\r\n\tat ✽.When Admin enters \"acfdefrt\",\"aaswered\" in the start date and end date fields(Uniform.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "acfdefrt",
      "offset": 27
    },
    {
      "val": "aaswered",
      "offset": 38
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 152103600,
  "status": "passed"
});
formatter.before({
  "duration": 3033760400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6504841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 300451900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2605951400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2007674500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2826093700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2403009900,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Validate Sales Tax start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin varifies the result \"21-12-2021\",\"20-12-2021\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 4922896900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2141033200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2125807900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1105165600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1080122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21-12-2021",
      "offset": 14
    },
    {
      "val": "20-12-2021",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 454279600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:200)\r\n\tat ✽.When Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields(Uniform.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21-12-2021",
      "offset": 27
    },
    {
      "val": "20-12-2021",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 204273900,
  "status": "passed"
});
formatter.before({
  "duration": 5937909000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6436346700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 254027500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2051655700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2021699800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 8922779900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2117644500,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Validate Sales Tax start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin varifies the result \"2021-10-08\",\"2021-06-18\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 5106273400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2126478800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2198104600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1189062700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1097485500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-08",
      "offset": 14
    },
    {
      "val": "2021-06-18",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 712975400,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:223)\r\n\tat ✽.When Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields(Uniform.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-08",
      "offset": 27
    },
    {
      "val": "2021-06-18",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 222165600,
  "status": "passed"
});
formatter.before({
  "duration": 6969044200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 8824335700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 592065700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 14013443600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2057943200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 10958580000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2094149900,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Validate Sales Tax start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-tax-start-date-and-end-date-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Admin enters \"2021-04-23\",\"2021-09-07\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Admin varifies the result \"2021-04-23\",\"2021-09-07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 4950115600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2146903300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2133579400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1124656000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1110356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-04-23",
      "offset": 14
    },
    {
      "val": "2021-09-07",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 543548900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 881100900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-04-23",
      "offset": 27
    },
    {
      "val": "2021-09-07",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "duration": 108270100,
  "status": "passed"
});
formatter.after({
  "duration": 330971800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Validate Group by and order status functionality in Tax page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "Admin selects an \"\u003coption\u003e\" in Group by field",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Admin selects an option \"\u003coption1\u003e\"in Orders status field",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page;",
  "rows": [
    {
      "cells": [
        "option",
        "option1"
      ],
      "line": 82,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page;;1"
    },
    {
      "cells": [
        "Weeks",
        "Pending"
      ],
      "line": 83,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page;;2"
    },
    {
      "cells": [
        "Days",
        "All Statuses"
      ],
      "line": 84,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2672050700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6129909300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 269519600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1842653100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2010238500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9425140600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2102613800,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validate Group by and order status functionality in Tax page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "Admin selects an \"Weeks\" in Group by field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Admin selects an option \"Pending\"in Orders status field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 4994248600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Weeks",
      "offset": 18
    }
  ],
  "location": "UniformDefinition.admin_selects_an_in_Group_by_field(String)"
});
formatter.result({
  "duration": 1215437000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_selects_an_option_in_Orders_status_field(String)"
});
formatter.result({
  "duration": 2660018900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1081915000,
  "status": "passed"
});
formatter.after({
  "duration": 1097997400,
  "status": "passed"
});
formatter.before({
  "duration": 3017069000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6220297700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 270349300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1965592300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2015781400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9716912800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2203820600,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Validate Group by and order status functionality in Tax page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-order-status-functionality-in-tax-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "Admin selects an \"Days\" in Group by field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Admin selects an option \"All Statuses\"in Orders status field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 5054586200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Days",
      "offset": 18
    }
  ],
  "location": "UniformDefinition.admin_selects_an_in_Group_by_field(String)"
});
formatter.result({
  "duration": 1234302600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Statuses",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_selects_an_option_in_Orders_status_field(String)"
});
formatter.result({
  "duration": 2275205100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1187325600,
  "status": "passed"
});
formatter.after({
  "duration": 182364100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 87,
  "name": "Validate pagenation for Tax  page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagenation-for-tax--page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 88,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Admin enters \"\u003cstdate\u003e\",\"\u003cendate\u003e\",\"\u003cgrpby\u003e\",\"\u003cordersts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Admin checks if pagination exists",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Admin checks for the total page count",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Admin checks the next button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Admin checks for previous button",
  "keyword": "Then "
});
formatter.examples({
  "line": 95,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagenation-for-tax--page;",
  "rows": [
    {
      "cells": [
        "stdate",
        "endate",
        "grpby",
        "ordersts"
      ],
      "line": 96,
      "id": "automation-testing-for-uniform-website;validate-pagenation-for-tax--page;;1"
    },
    {
      "cells": [
        "2019-03-02",
        "2021-10-10",
        "Weeks",
        "Pending"
      ],
      "line": 97,
      "id": "automation-testing-for-uniform-website;validate-pagenation-for-tax--page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2538962400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6289726500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 483073700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1950474800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2019193800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9280894900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2120940400,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Validate pagenation for Tax  page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagenation-for-tax--page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 88,
  "name": "Admin navigates to the tax page on clicking tax",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Admin enters \"2019-03-02\",\"2021-10-10\",\"Weeks\",\"Pending\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Admin checks if pagination exists",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Admin checks for the total page count",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Admin checks the next button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Admin checks for previous button",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_tax_page_on_clicking_tax()"
});
formatter.result({
  "duration": 5282269100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-03-02",
      "offset": 14
    },
    {
      "val": "2021-10-10",
      "offset": 27
    },
    {
      "val": "Weeks",
      "offset": 40
    },
    {
      "val": "Pending",
      "offset": 48
    }
  ],
  "location": "UniformDefinition.admin_enters(String,String,String,String)"
});
formatter.result({
  "duration": 2874616700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 891929700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_if_pagination_exists()"
});
formatter.result({
  "duration": 33173900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_the_total_page_count()"
});
formatter.result({
  "duration": 65385900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_the_next_button()"
});
formatter.result({
  "duration": 2967720700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_previous_button()"
});
formatter.result({
  "duration": 2201709200,
  "status": "passed"
});
formatter.after({
  "duration": 4348359800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 101,
      "value": "#############################################################################################################################"
    }
  ],
  "line": 103,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Admin enters \"\u003cstartdate\u003e\",\"\u003cenddate\u003e\" in the start date and end date fields",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin varifies the result \"\u003cstartdate\u003e\",\"\u003cenddate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;",
  "rows": [
    {
      "cells": [
        "startdate",
        "enddate"
      ],
      "line": 113,
      "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;1"
    },
    {
      "cells": [
        "%@!^\u0026",
        "2021-04-23"
      ],
      "line": 114,
      "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;2"
    },
    {
      "cells": [
        "acfbhydt",
        "something"
      ],
      "line": 115,
      "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;3"
    },
    {
      "cells": [
        "21-12-2021",
        "20-12-2021"
      ],
      "line": 116,
      "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;4"
    },
    {
      "cells": [
        "2021-10-08",
        "2021-06-18"
      ],
      "line": 117,
      "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;5"
    },
    {
      "cells": [
        "2021-04-23",
        "2021-10-07"
      ],
      "line": 118,
      "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4311469800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6392982300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 570535900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2479769000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2011120900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9147182900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2120603900,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Admin enters \"%@!^\u0026\",\"2021-04-23\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin varifies the result \"%@!^\u0026\",\"2021-04-23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 4896380900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2131050900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2121653200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1141234900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1124498300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%@!^\u0026",
      "offset": 14
    },
    {
      "val": "2021-04-23",
      "offset": 22
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 567176700,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:195)\r\n\tat ✽.When Admin enters \"%@!^\u0026\",\"2021-04-23\" in the start date and end date fields(Uniform.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "%@!^\u0026",
      "offset": 27
    },
    {
      "val": "2021-04-23",
      "offset": 35
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 97859600,
  "status": "passed"
});
formatter.before({
  "duration": 2389390700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 5863002900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 245985800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 11704350200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2092503400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2097296800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2122243800,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Admin enters \"acfbhydt\",\"something\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin varifies the result \"acfbhydt\",\"something\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 4913317300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2195577500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2152551500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1132708900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1168524600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "acfbhydt",
      "offset": 14
    },
    {
      "val": "something",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 463023600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:200)\r\n\tat ✽.When Admin enters \"acfbhydt\",\"something\" in the start date and end date fields(Uniform.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "acfbhydt",
      "offset": 27
    },
    {
      "val": "something",
      "offset": 38
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 171462900,
  "status": "passed"
});
formatter.before({
  "duration": 2546582700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6489613600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 376718300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1960631300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2018388800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9756564900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2104451700,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin varifies the result \"21-12-2021\",\"20-12-2021\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 5080969600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2355651000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2110472000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1143209700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1583603300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21-12-2021",
      "offset": 14
    },
    {
      "val": "20-12-2021",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 674195000,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:200)\r\n\tat ✽.When Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields(Uniform.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21-12-2021",
      "offset": 27
    },
    {
      "val": "20-12-2021",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 345087800,
  "status": "passed"
});
formatter.before({
  "duration": 4511197600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6187473800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 257061200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1823600500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2012435000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9704293300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2090950100,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin varifies the result \"2021-10-08\",\"2021-06-18\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 5022522800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2155689000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2179245600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1130131900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1118407700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-08",
      "offset": 14
    },
    {
      "val": "2021-06-18",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 482478600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:223)\r\n\tat ✽.When Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields(Uniform.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-10-08",
      "offset": 27
    },
    {
      "val": "2021-06-18",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 91284900,
  "status": "passed"
});
formatter.before({
  "duration": 2401145900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 5988888400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 316759300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1796268900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2019501100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9568388100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2086607200,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 104,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "Admin selects the calendar icon from date start field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Admin is able to select a startdate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Admin selects the calendar icon from date end field",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Admin is able to select a enddate from the calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Admin enters \"2021-04-23\",\"2021-10-07\" in the start date and end date fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Admin varifies the result \"2021-04-23\",\"2021-10-07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 5405602000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2135359900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2260265800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1125171800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1084269900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-04-23",
      "offset": 14
    },
    {
      "val": "2021-10-07",
      "offset": 27
    }
  ],
  "location": "UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(String,String)"
});
formatter.result({
  "duration": 760612300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 849800100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-04-23",
      "offset": 27
    },
    {
      "val": "2021-10-07",
      "offset": 40
    }
  ],
  "location": "UniformDefinition.admin_varifies_the_result(String,String)"
});
formatter.result({
  "duration": 68883500,
  "status": "passed"
});
formatter.after({
  "duration": 100788300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 121,
  "name": "Validate Group by and shipping status functionality in Shipping page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "Admin selects an \"\u003coption\u003e\" in Group by field",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "Admin selects an option \"\u003coption1\u003e\"in Orders status field",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.examples({
  "line": 127,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page;",
  "rows": [
    {
      "cells": [
        "option",
        "option1"
      ],
      "line": 128,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page;;1"
    },
    {
      "cells": [
        "Weeks",
        "Pending"
      ],
      "line": 129,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page;;2"
    },
    {
      "cells": [
        "Days",
        "All Statuses"
      ],
      "line": 130,
      "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2411909200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6057997100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 596693100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1766985700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2017554000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9469119700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2105521000,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Validate Group by and shipping status functionality in Shipping page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "Admin selects an \"Weeks\" in Group by field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "Admin selects an option \"Pending\"in Orders status field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 4905996400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Weeks",
      "offset": 18
    }
  ],
  "location": "UniformDefinition.admin_selects_an_in_Group_by_field(String)"
});
formatter.result({
  "duration": 1111586000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_selects_an_option_in_Orders_status_field(String)"
});
formatter.result({
  "duration": 2189988000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 925440800,
  "status": "passed"
});
formatter.after({
  "duration": 166516300,
  "status": "passed"
});
formatter.before({
  "duration": 2493996200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6335900100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 429279900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1965999400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2018148400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9162757800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2104387300,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Validate Group by and shipping status functionality in Shipping page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-group-by-and-shipping-status-functionality-in-shipping-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "Admin selects an \"Days\" in Group by field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "Admin selects an option \"All Statuses\"in Orders status field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 4845963800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Days",
      "offset": 18
    }
  ],
  "location": "UniformDefinition.admin_selects_an_in_Group_by_field(String)"
});
formatter.result({
  "duration": 1150001900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Statuses",
      "offset": 25
    }
  ],
  "location": "UniformDefinition.admin_selects_an_option_in_Orders_status_field(String)"
});
formatter.result({
  "duration": 2096115000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1341229000,
  "status": "passed"
});
formatter.after({
  "duration": 2119263500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 133,
  "name": "Validate pagination for Shipping page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagination-for-shipping-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 134,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "Admin enters \"\u003cstdate\u003e\",\"\u003cendate\u003e\",\"\u003cgrpby\u003e\",\"\u003cordersts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Admin checks if pagination exists",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Admin checks for the total page count",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Admin checks the next button",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Admin checks for previous button",
  "keyword": "Then "
});
formatter.examples({
  "line": 141,
  "name": "",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagination-for-shipping-page;",
  "rows": [
    {
      "cells": [
        "stdate",
        "endate",
        "grpby",
        "ordersts"
      ],
      "line": 142,
      "id": "automation-testing-for-uniform-website;validate-pagination-for-shipping-page;;1"
    },
    {
      "cells": [
        "2019-03-04",
        "2021-10-12",
        "Weeks",
        "All Statuses"
      ],
      "line": 143,
      "id": "automation-testing-for-uniform-website;validate-pagination-for-shipping-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2298323900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin enters \"admin\" and \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Admin clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin is redirected to the dashboard of UniformStore page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Admin navigates to the Reports section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin navigates to the Sales section",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 6078669500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "UniformDefinition.admin_enters_and(String,String)"
});
formatter.result({
  "duration": 233147900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 1781754700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2018031500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 9459619800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2162300900,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "Validate pagination for Shipping page",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-pagination-for-shipping-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 134,
  "name": "Admin navigates to the shipping page on clicking shipping",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "Admin enters \"2019-03-04\",\"2021-10-12\",\"Weeks\",\"All Statuses\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "Admin clicks the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Admin checks if pagination exists",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Admin checks for the total page count",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "Admin checks the next button",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Admin checks for previous button",
  "keyword": "Then "
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_shipping_page_on_clicking_shipping()"
});
formatter.result({
  "duration": 5035785700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-03-04",
      "offset": 14
    },
    {
      "val": "2021-10-12",
      "offset": 27
    },
    {
      "val": "Weeks",
      "offset": 40
    },
    {
      "val": "All Statuses",
      "offset": 48
    }
  ],
  "location": "UniformDefinition.admin_enters(String,String,String,String)"
});
formatter.result({
  "duration": 2699579300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 863207000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_if_pagination_exists()"
});
formatter.result({
  "duration": 25552700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_the_total_page_count()"
});
formatter.result({
  "duration": 44836600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_the_next_button()"
});
formatter.result({
  "duration": 6240569400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_previous_button()"
});
formatter.result({
  "duration": 6460145600,
  "status": "passed"
});
formatter.after({
  "duration": 221129500,
  "status": "passed"
});
});