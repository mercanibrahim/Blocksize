$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/requestDemo.feature");
formatter.feature({
  "name": "Request A Demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check the Dates for Demo Availability",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Blocksize Capital page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.MainPageStepDefinitions.the_user_is_on_the_Blocksize_Capital_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Request A Demo button",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.RequestDemoStepDefinitions.the_user_clicks_on_Request_A_Demo_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects August 30th",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.RequestDemoStepDefinitions.the_user_selects_August_30th()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//tr[@class\u003d\u0027extraWeek\u0027])[6]//td[1]//button\"}\n  (Session info: chrome\u003d92.0.4515.107)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MERCANs-iMac.local\u0027, ip: \u0027192.168.8.103\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: /var/folders/cd/0fst5fkn4rx...}, goog:chromeOptions: {debuggerAddress: localhost:55364}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0594cc1f2dc434f7a36057b475a1c9b2\n*** Element info: {Using\u003dxpath, value\u003d(//tr[@class\u003d\u0027extraWeek\u0027])[6]//td[1]//button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.stepDefinitions.RequestDemoStepDefinitions.the_user_selects_August_30th(RequestDemoStepDefinitions.java:24)\n\tat ✽.the user selects August 30th(file:///Users/mercan/Desktop/BlocksizeCapital/src/test/resources/features/requestDemo.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user faces that August 30th is clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.RequestDemoStepDefinitions.the_user_faces_that_August_30th_is_clickable()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});