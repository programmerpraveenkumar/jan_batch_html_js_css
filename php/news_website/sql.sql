news_magazine
news_content
	id(pk)
	title(varchar(50))
	content(text)
	time_posted(timestamp)
	posted_by_id
	posted_by_name
	city_id
	tags(text)
city
	id
	name
	pincode
	

USER
	id
	name
	email
	address
	mobile

comments
 	comment_id
	post_id
	user_id
	comment_content
	posted_by
	time_posted(timestamp)





