import pytest
from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By
import requests
import random


@pytest.fixture(scope="module")
def browser():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Remote("http://selenium:4444/wd/hub", options=options)
    yield driver
    driver.close()


@pytest.fixture(scope="module")
def random_user_name():
    random_user = f"{random.randint(1, 99999)}@example.com"
    yield random_user


@pytest.fixture
def user_data(random_user_name):
    user = {"email": random_user_name, "password": "helohelo123"}
    return user


@pytest.fixture
def new_password():
    passwords = {"page": "zlombol2011", "link": "likeaforest2022"}
    return passwords


def test_main_page_before_creating_user(browser):
    browser.get("http://django:8012/")
    assert "Document" in browser.title
    assert "You are not logged in." in browser.page_source


def test_create_and_activate_user(browser, user_data):
    browser.get("http://django:8012/accounts/register/")

    # create user
    browser.find_element(By.NAME, "email").send_keys(user_data["email"])
    browser.find_element(By.NAME, "password1").send_keys(user_data["password"])
    browser.find_element(By.NAME, "password2").send_keys(user_data["password"])

    browser.find_element(By.TAG_NAME, "button").click()
    assert "Please check your email for activation link" in browser.page_source

    # check if proper message arrived on email and get activation link
    email_api_response = requests.get("http://sendria:1080/api/messages/").json()
    assert (
        user_data["email"] == email_api_response["data"][0]["recipients_message_to"][0]
    )
    assert (
        "Digital-Desire account activation link"
        == email_api_response["data"][0]["subject"]
    )

    # extract activation link from email msg
    activation_link = (
        email_api_response["data"][0]["source"]
        .split("your registration\n\n")[1]
        .split("\n")[0]
    )

    # activate account using activation link
    browser.get(activation_link)
    assert (
        "Thank you for your email confirmation. You are now logged in."
        in browser.page_source
    )

    # user should be logged in after using activation link
    browser.get("http://django:8012/")
    logged_in_user_msg = f"You are logged with email: {user_data['email']}"
    assert logged_in_user_msg in browser.page_source


def test_change_password_with_logged_user(browser, user_data, new_password):
    # check if user is logged in, if not log in
    browser.get("http://django:8012/")
    logged_in_user_msg = f"You are logged with email: {user_data['email']}"
    if logged_in_user_msg not in browser.page_source:
        browser.get("http://django:8012/accounts/login/")
        browser.find_element(By.NAME, "username").send_keys(user_data["email"])
        browser.find_element(By.NAME, "password").send_keys(user_data["password"])
        browser.find_element(By.TAG_NAME, "button").click()
    assert logged_in_user_msg in browser.page_source

    # go to change password change
    browser.find_element(By.LINK_TEXT, "Change password").click()
    assert "Change your password" in browser.page_source

    # set new password
    browser.find_element(By.NAME, "old_password").send_keys(user_data["password"])
    browser.find_element(By.NAME, "new_password1").send_keys(new_password["page"])
    browser.find_element(By.NAME, "new_password2").send_keys(new_password["page"])
    browser.find_element(By.TAG_NAME, "button").click()
    assert "Your password has been changed." in browser.page_source

    # login with new password but logout first
    browser.get("http://django:8012/accounts/logout/")
    assert "You are not logged in." in browser.page_source

    browser.find_element(By.LINK_TEXT, "Login").click()
    browser.find_element(By.NAME, "username").send_keys(user_data["email"])
    browser.find_element(By.NAME, "password").send_keys(new_password["page"])
    browser.find_element(By.TAG_NAME, "button").click()
    assert logged_in_user_msg in browser.page_source


def test_reset_password_with_email_link(browser, user_data, new_password):
    # force to logout
    browser.get("http://django:8012/accounts/logout/")
    assert "You are not logged in." in browser.page_source

    # enter reset password page and put email
    browser.find_element(By.LINK_TEXT, "Login").click()
    browser.find_element(By.LINK_TEXT, "Forgot password?").click()
    assert "Forgotten your password?" in browser.page_source

    browser.find_element(By.NAME, "email").send_keys(user_data["email"])
    browser.find_element(By.TAG_NAME, "button").click()
    assert (
        "We've emailed you instructions for setting your password"
        in browser.page_source
    )

    # check if proper message arrived on email and get activation link
    email_api_response = requests.get("http://sendria:1080/api/messages/").json()
    assert (
        user_data["email"] == email_api_response["data"][0]["recipients_message_to"][0]
    )
    assert "Digital-Desire password reset" == email_api_response["data"][0]["subject"]

    # extract reset password link from email message
    reset_password_link = (
        email_api_response["data"][0]["source"]
        .split("click the link below.\n\n")[1]
        .split("\n\nThis link")[0]
    )

    # go to reset password change
    browser.get(reset_password_link)
    assert "Please enter your new password." in browser.page_source

    # set new password
    browser.find_element(By.NAME, "new_password1").send_keys(new_password["link"])
    browser.find_element(By.NAME, "new_password2").send_keys(new_password["link"])
    browser.find_element(By.TAG_NAME, "button").click()
    assert "Your password has been set." in browser.page_source

    # log in with new password
    browser.find_element(By.LINK_TEXT, "Log in").click()
    browser.find_element(By.NAME, "username").send_keys(user_data["email"])
    browser.find_element(By.NAME, "password").send_keys(new_password["link"])
    browser.find_element(By.TAG_NAME, "button").click()
    logged_in_user_msg = f"You are logged with email: {user_data['email']}"
    assert logged_in_user_msg in browser.page_source
