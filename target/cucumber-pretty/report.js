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
  "duration": 6609432700,
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
  "duration": 10932349100,
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
  "duration": 4055329300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2551248100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2029500000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2132325100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2131553400,
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
  "duration": 5107397000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2237165800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 3865824700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1123957900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1119505800,
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
  "duration": 580980600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:193)\r\n\tat ✽.When Admin enters \"!%$#\",\"2021-10-06\" in the start date and end date fields(Uniform.feature:18)\r\n",
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
  "duration": 60063189500,
  "status": "passed"
});
formatter.before({
  "duration": 2763975600,
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
  "duration": 9672270500,
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
  "duration": 404845200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2173568400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2008990100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2110136800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2156658500,
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
  "duration": 5095567100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2133641100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2119298500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1098007900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1126941900,
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
  "duration": 1518073700,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:198)\r\n\tat ✽.When Admin enters \"acfdefrt\",\"aaswered\" in the start date and end date fields(Uniform.feature:18)\r\n",
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
  "duration": 1223748800,
  "status": "passed"
});
formatter.before({
  "duration": 4330678600,
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
  "duration": 9941199100,
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
  "duration": 390001200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2239469300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2021850600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2110258500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2137959500,
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
  "duration": 5135272700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2160369800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2334399600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1209360800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1183046300,
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
  "duration": 567408200,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:198)\r\n\tat ✽.When Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields(Uniform.feature:18)\r\n",
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
  "duration": 164425400,
  "status": "passed"
});
formatter.before({
  "duration": 2549953200,
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
  "duration": 9759338000,
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
  "duration": 447940800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2262357400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2021556000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2500016100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2111414000,
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
  "duration": 5014728700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2143888500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2140291600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1110727600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1124729800,
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
  "duration": 607818700,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:221)\r\n\tat ✽.When Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields(Uniform.feature:18)\r\n",
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
  "duration": 412198700,
  "status": "passed"
});
formatter.before({
  "duration": 2607860300,
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
  "duration": 9266366600,
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
  "duration": 368463500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2343984400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2005971100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2117877400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2248235400,
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
  "duration": 5140981300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2163518900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2151058600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1106757500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1113621000,
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
  "duration": 607775800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1030355300,
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
  "duration": 122867500,
  "status": "passed"
});
formatter.after({
  "duration": 526128900,
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
  "duration": 3359247400,
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
  "duration": 10333768600,
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
  "duration": 367738000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2259496600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2020448600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2117454900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2112870600,
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
  "duration": 6366923700,
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
  "duration": 1174235300,
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
  "duration": 2188739000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1098367600,
  "status": "passed"
});
formatter.after({
  "duration": 1043258000,
  "status": "passed"
});
formatter.before({
  "duration": 2412566100,
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
  "duration": 10139460600,
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
  "duration": 438302700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2712350400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2131384900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2101827500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2128245500,
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
  "duration": 5060884300,
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
  "duration": 1194568200,
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
  "duration": 2114903900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1099662400,
  "status": "passed"
});
formatter.after({
  "duration": 371263200,
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
  "duration": 2250525400,
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
  "duration": 9141864100,
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
  "duration": 416677100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2179442200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2016630900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2102039100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2117639500,
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
  "duration": 5017314500,
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
  "duration": 3169530700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1059462600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_if_pagination_exists()"
});
formatter.result({
  "duration": 53776600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_the_total_page_count()"
});
formatter.result({
  "duration": 45192700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_the_next_button()"
});
formatter.result({
  "duration": 4728172000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_previous_button()"
});
formatter.result({
  "duration": 3289399500,
  "status": "passed"
});
formatter.after({
  "duration": 518485800,
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
  "duration": 2484953200,
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
  "duration": 10148805900,
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
  "duration": 330268200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2444294300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2016912900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2102457900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2117077500,
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
  "duration": 5369052200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2166395600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2134492700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1118090000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1120259700,
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
  "duration": 642715200,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:193)\r\n\tat ✽.When Admin enters \"%@!^\u0026\",\"2021-04-23\" in the start date and end date fields(Uniform.feature:64)\r\n",
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
  "duration": 496364300,
  "status": "passed"
});
formatter.before({
  "duration": 2665701600,
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
  "duration": 9485599400,
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
  "duration": 369995800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2237140200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2022711100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2140947900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2125508400,
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
  "duration": 5069401800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2245700600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2124946900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1128134100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1151096400,
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
  "duration": 624562100,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:198)\r\n\tat ✽.When Admin enters \"acfdefrt\",\"aaswered\" in the start date and end date fields(Uniform.feature:64)\r\n",
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
  "duration": 378097300,
  "status": "passed"
});
formatter.before({
  "duration": 2614550300,
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
  "duration": 9591215200,
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
  "duration": 388935200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2632023900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2015705500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2219247900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2118103700,
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
  "duration": 4952230400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2167199600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2130596200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1127157400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1219266900,
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
  "duration": 572388000,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:198)\r\n\tat ✽.When Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields(Uniform.feature:64)\r\n",
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
  "duration": 306037400,
  "status": "passed"
});
formatter.before({
  "duration": 2670918000,
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
  "duration": 9455639100,
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
  "duration": 357498700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2220654400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2015890300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2101420400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2122485900,
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
  "duration": 5453707000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2162183400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2125448700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1117016500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1149450900,
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
  "duration": 675582400,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:221)\r\n\tat ✽.When Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields(Uniform.feature:64)\r\n",
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
  "duration": 363570900,
  "status": "passed"
});
formatter.before({
  "duration": 2537745800,
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
  "duration": 9481572900,
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
  "duration": 313693400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2560942100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2016551200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2103764100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2122325300,
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
  "duration": 5048822100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2200636000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2149725000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1131191000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1125839900,
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
  "duration": 670514000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1032787100,
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
  "duration": 124426200,
  "status": "passed"
});
formatter.after({
  "duration": 451584600,
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
  "duration": 4276788300,
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
  "duration": 10107248500,
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
  "duration": 354864400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2808176000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2011604500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2098427900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2124280000,
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
  "duration": 5077988700,
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
  "duration": 1141110700,
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
  "duration": 2158376400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 933700500,
  "status": "passed"
});
formatter.after({
  "duration": 554313000,
  "status": "passed"
});
formatter.before({
  "duration": 2708768200,
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
  "duration": 10079169900,
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
  "duration": 405785100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2399107200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2454113000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2142594300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2122731900,
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
  "duration": 5098506500,
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
  "duration": 2028025200,
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
  "duration": 2120977400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 945432900,
  "status": "passed"
});
formatter.after({
  "duration": 676796700,
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
  "duration": 3555848900,
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
  "duration": 10787901400,
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
  "duration": 385139500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2184937600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2018278400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2096328800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2128740500,
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
  "duration": 5292443200,
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
  "duration": 2877088000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 1000187500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_if_pagination_exists()"
});
formatter.result({
  "duration": 40731400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_the_total_page_count()"
});
formatter.result({
  "duration": 52037100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_the_next_button()"
});
formatter.result({
  "duration": 4227514500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_previous_button()"
});
formatter.result({
  "duration": 2906752300,
  "status": "passed"
});
formatter.after({
  "duration": 645608900,
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@tag1"
    }
  ]
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
  "duration": 2481131100,
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
  "duration": 9226236200,
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
  "duration": 362898500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2629784000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2010892800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2098838500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2118792400,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@tag1"
    }
  ]
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
  "duration": 5101135200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2183147400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2126513100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1120911800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1129158200,
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
  "duration": 526004000,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:193)\r\n\tat ✽.When Admin enters \"%@!^\u0026\",\"2021-04-23\" in the start date and end date fields(Uniform.feature:109)\r\n",
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
  "duration": 332154200,
  "status": "passed"
});
formatter.before({
  "duration": 2568928500,
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
  "duration": 9374262700,
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
  "duration": 340093400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2162203300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2019819700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2102680200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2122866100,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@tag1"
    }
  ]
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
  "duration": 5608106600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2330505100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2139610900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1123126200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1119051000,
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
  "duration": 628169200,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:198)\r\n\tat ✽.When Admin enters \"acfbhydt\",\"something\" in the start date and end date fields(Uniform.feature:109)\r\n",
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
  "duration": 279885900,
  "status": "passed"
});
formatter.before({
  "duration": 2487445700,
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
  "duration": 9463390700,
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
  "duration": 342438300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2195855800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2023019400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2102120100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2116625200,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@tag1"
    }
  ]
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
  "duration": 5138131400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2156965300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2132811400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1121595000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1110685500,
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
  "duration": 701519400,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:198)\r\n\tat ✽.When Admin enters \"21-12-2021\",\"20-12-2021\" in the start date and end date fields(Uniform.feature:109)\r\n",
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
  "duration": 562839700,
  "status": "passed"
});
formatter.before({
  "duration": 2406281500,
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
  "duration": 9470132100,
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
  "duration": 347969900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2182456200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2027685600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2122302200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2126384400,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@tag1"
    }
  ]
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
  "duration": 5067557900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2188702000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2118870300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1097912300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1115519900,
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
  "duration": 627625900,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepDefinition1.UniformDefinition.admin_enters_in_the_start_date_and_end_date_fields(UniformDefinition.java:221)\r\n\tat ✽.When Admin enters \"2021-10-08\",\"2021-06-18\" in the start date and end date fields(Uniform.feature:109)\r\n",
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
  "duration": 342406700,
  "status": "passed"
});
formatter.before({
  "duration": 2798541400,
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
  "duration": 9747262200,
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
  "duration": 346330800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2422427500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2015385800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2098711300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2126486700,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Validate Sales Shipping start date and end date functionality",
  "description": "",
  "id": "automation-testing-for-uniform-website;validate-sales-shipping-start-date-and-end-date-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@tag1"
    }
  ]
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
  "duration": 5408362800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_start_field()"
});
formatter.result({
  "duration": 2146405800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_startdate_from_the_calendar()"
});
formatter.result({
  "duration": 2115582300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_selects_the_calendar_icon_from_date_end_field()"
});
formatter.result({
  "duration": 1117845000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_able_to_select_a_enddate_from_the_calendar()"
});
formatter.result({
  "duration": 1127120700,
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
  "duration": 613225500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 930699700,
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
  "duration": 89461700,
  "status": "passed"
});
formatter.after({
  "duration": 334975600,
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
  "duration": 6584611500,
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
  "duration": 11171802200,
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
  "duration": 336206600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2468535600,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2016557100,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2103982700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2137033400,
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
  "duration": 5347074400,
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
  "duration": 1119755300,
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
  "duration": 2129376700,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 964740000,
  "status": "passed"
});
formatter.after({
  "duration": 306288100,
  "status": "passed"
});
formatter.before({
  "duration": 2385659100,
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
  "duration": 9646995200,
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
  "duration": 382406900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2308069400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2013996900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2093575500,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2110493200,
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
  "duration": 5058733100,
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
  "duration": 1189817600,
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
  "duration": 2125029300,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 933093000,
  "status": "passed"
});
formatter.after({
  "duration": 368082000,
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
  "duration": 2549093500,
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
  "duration": 9814880100,
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
  "duration": 327718400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 2240126400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_is_redirected_to_the_dashboard_of_UniformStore_page()"
});
formatter.result({
  "duration": 2010481800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Reports_section()"
});
formatter.result({
  "duration": 2097964900,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_navigates_to_the_Sales_section()"
});
formatter.result({
  "duration": 2118652100,
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
  "duration": 5081082500,
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
  "duration": 2812602800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_clicks_the_filter_button()"
});
formatter.result({
  "duration": 952929200,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_if_pagination_exists()"
});
formatter.result({
  "duration": 38346800,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_the_total_page_count()"
});
formatter.result({
  "duration": 34351400,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_the_next_button()"
});
formatter.result({
  "duration": 7737715000,
  "status": "passed"
});
formatter.match({
  "location": "UniformDefinition.admin_checks_for_previous_button()"
});
formatter.result({
  "duration": 5970177000,
  "status": "passed"
});
formatter.after({
  "duration": 333206800,
  "status": "passed"
});
});