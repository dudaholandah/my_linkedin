# Required Imports
from selenium import webdriver
from bs4 import BeautifulSoup as bs
import time
import pandas as pd
import re as re
import json

#Get the Company's Linkedin URL from User
page = "https://www.linkedin.com/in/duda-mholanda/recent-activity/all/"

#See if existing user credential file exists or create one 
try:
    f= open("linkedin_credentials.txt","r")
    contents = f.read()
    username = contents.replace("=",",").split(",")[1]
    password = contents.replace("=",",").split(",")[3]
except:
    f= open("linkedin_credentials.txt","w+")
    username = input('Enter your linkedin username: ')
    password = input('Enter your linkedin password: ')
    f.write("username={}, password={}".format(username,password))
    f.close()

#access Webriver
browser = webdriver.Chrome()

#Open login page
browser.get('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')

#Enter login info:
elementID = browser.find_element(value='username')
elementID.send_keys(username)

elementID = browser.find_element(value='password')
elementID.send_keys(password)
elementID.submit()

# Enter the post page
browser.get(page)

company_page = browser.page_source   

soup = bs(company_page.encode("utf-8"), "html.parser")
soup.prettify()

# Append posts
post_texts = []
media_links = []
media_type = []

posts = soup.findAll("li", {"class":"profile-creator-shared-feed-update__container"})

for post in posts:

  # Append text from the post 
  try:
    text_container = post.find("div", {"class":"feed-shared-update-v2__description-wrapper mr2"})
    text = text_container.find("span", {"dir":"ltr"})
    post_texts.append(text.text)
  except:
    post_texts.append(None)

  # Append imgs from the post
  try:
    photo_container = post.find("div", {"class":"update-components-image"})
    all_imgs = [img["src"] for img in photo_container.find_all("img")]
    media_links.append(all_imgs)
    media_type.append("Photo")
  except:
    # Append celebration
    try:
      celebration_container = post.find("div", {"class":"update-components-celebration"})
      all_celeb = [img["src"] for img in celebration_container.find_all("img")]
      media_links.append(all_celeb)
      media_type.append("Celebration")
    except:
      media_links.append("None")
      media_type.append("None")

data = {
  "Post Text": post_texts,
  "Media Links": media_links,
  "Media Type": media_type
}

# Dump to file
with open("../public/scrapper.json", "w", encoding='utf8') as outfile: 
  json.dump(data, outfile, ensure_ascii=False)
  

