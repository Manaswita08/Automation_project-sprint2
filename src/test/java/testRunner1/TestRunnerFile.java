package testRunner1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= "src/test/java/Feature1"
			,glue ={"stepDefinition1","hook"},
			dryRun=false,
			monochrome=true,
			//tags={"@tag1"},//single tag
			plugin={"html:target/cucumber-pretty"}
)

public class TestRunnerFile {

}
