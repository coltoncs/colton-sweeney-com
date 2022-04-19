---
template: Post
path: /market-ready-painting
type: portfolio
date: 2022-04-19T16:11:13.239Z
title: Market Ready Painting
metaDescription: >-
  Market Ready Painting, a local home repair and paint specialist in North
  Carolina, was previously paying over $200 annually for a website from
  Squarespace. On top of that, the website itself was very poorly put together
  and did not offer a good design or experience.
thumbnail: /assets/mrp.png
---
> This post is a carry-over for my new website, I'm actually in the process of redesigning Market Ready Painting's website with an all-new WordPress backend. Stay tuned for the accompanying blog post!

Market Ready Painting, a local home repair and paint specialist in North Carolina, was previously paying over $200 annually for a website from Squarespace. On top of that, the website itself was very poorly put together and did not offer a good design or experience. I took it upon myself to redesign and reimagine the client experience, and two weeks later I had rebuilt the website from the ground up at a cost of only $12 annually.

While Squarespace offers enticing options for small business owners without development experience, nowadays there's no excuse to pay such ridiculous pricing options when there are so many easy, free frameworks to leverage. Market Ready Painting, a local paint specialist in North Carolina, had previously setup a simple website on Squarespace to advertise their business. A homepage with some bio and testimonials, some previously completed projects, a contact page with a form - the basics of any SMB's website. However, MRP was paying over $200/year for the website hosting and services - a ridiculous amount when*developing*a website in 2020 is practically free. I took it upon myself to rebuild the frontend for a better user experience. 

Seeing as the website doesn't require much server interaction, I chose to create a serverless React app styled with Bulma CSS - a recent favorite combination of mine. For image hosting, I opted to use Sirv CDN's free hosting tier, and for the SMTP server for the email contact form I chose to use MailJS for their generour free tier. I took off building the frontend - using React and react-router-dom, I created a simple application with 4 pages, copied the content over from the website, and began designing. I integrated Bulma and node-sass to redesign the website's entire look. I then moved onto Animate.css for the frontend CSS animations. 

Once the frontend was set up, I simply had to integrate with MailJS for the contact form and used Sirv's custom CDN URL's for my images and*voila -*the website I had imagined had become a reality in two short weeks. I hosted the code onto Heroku and set up Google Domains to handle the transfer from Squarespace to them. Now, Market Ready Painting only has to pay $12 a year for website hosting, an entire $200 decrease from before.
