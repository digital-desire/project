from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

def test_1 ():
  options = webdriver.ChromeOptions()
  options.add_argument('--headless')
  driver = webdriver.Remote("http://selenium:4444/wd/hub", DesiredCapabilities.CHROME, options=options)
  driver.close()
  var1 = 2
  var2 = 2
  assert (var1 + var2) == 4