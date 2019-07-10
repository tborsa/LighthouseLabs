# Rails Nested Resources

rails can seem magic

nested resources and namespaces

creates form / reddit app 

error driven development 

rails new reddit
default no tests flag
and default potgres db flag

rails s 

no database
what do i do to fix error

rake db:create 

two terminals
one to run rails s continually
one to use command line rails tools 

edit readme to be a dream version of what the app should be 
get/topics
tru route
add
resources: topics

can manually add new controller or

rails generate controller topics 

try route again error
no index method 


add index method 

next error 
missing template

add template/view

default tries to render index.erb in topics folder after thr method is called


rails 1 to 6 
rauls does more and more for you

view template is inside the html stub
dont need to include html head body tags

would like to 
for each topic render li element with topic name 

undefined method for each

have to define tooics for use in view from tooics controller 

same as what topic in erd's?

ideally in controller

@topics = Topic.all

error cant fint topic

need to add topic model 

can manualky create or 

rails g model topics key lairs
generates model and migration

try site again
error: migration has not been run 

check migrations edit if we want to 
then 
rake:db migrate

now app runs see all of our 0 topics 

could make a form to add new topics
could use rail console to add topics
make sees file to generate seeds

we will go with console for fast dynamic development yhat we
can test quicklu

make 1 tooic in console refresh page and see topic 

add tooic made in consile to seed file
add delete all topics at the top of file 

rake db:seed to see if it works

check home page 

delete_all vs destroy_all

this has all been review 

i want to get nested resources now

topics/id/posts

have to create a route
want all crud for conversations

declare resources conversations
run rake routes
see that it is not nested

to nest we use
resources:topics do
   resources:posts
 end 
 
 try nested route
 error
 
 generate conversation controlled 
 try
 create index 
 try
 create template 
 
 conversations live in routes
  want to show conversations
 
maybe we can do
conversations.findby topic id 

add @topic.name 
to nested template 

@topic = Topic.first 

  instead use the params 
  in jungle you had 
  
 can see the params that come through with get requests
 can also puts params in the controller method


 jungle you have 
 private
 def allowed_params
  params require

adds stricter rules on what params can be passed

use params for find
topic_id = params[topicid]
@topic = Topic.find(topic_id)

want @post = topicget post // and where code 
post doesent exist

generate model 

go into migration and edit so that it represents 
posts better
have to add FK to reference topics (dont have to add verrification)

try page

create new post in console. 

error unknown attribute topic from post
when passing a topic object as params for a post

have to add the relation into the topic and posts model 

add posts to seed data

add @posts to controller 

try code 
no erros but have to add loop to display posts in template

add loop in template to show 

add more posts seeds

add @conversatoins = @topic.Conversations to controller
could do it in view

url for each topic topis/id/posts

changes everytime we re seed 

add link from topics page to a specific topic

<a href="/topics/<%= topic.id =>">topic.name</a>

instead link to 

<=% link_to "stuff", url>

<=% link_to "stuff", topic_url(topic)>

run rake routes it gives you a prefix

use these prefixes for routes. 

topic_url(topic) takes you to topics/id

dont want to go there want to go topics/id/posts

look at routes prefix
topic_conversations_url(topic)

your lecture yesterday you saw url helpers

Namespace

add routes under a namespace 
admin/topics
admin/posts

similar looking routes as nested routes thing/thing2
but with namespace you dont have to have a resource associated with the new route path

you dont need to add an admin controller/model/view ect

use 
namespace 'admin' do 
  resources: topics
end

get a new prefix

have to do some extra work :(

new controller under the folder path admin
class Admin::Topics < ApplicatoinController

end

new view under folder
views/admin/view

rails generate admin/topiics controller
copy code over from topics view for now 


delete topics 
create topics
delete posts


button_to "name",  admin_topc_url(topic), :method => :delete

link helper has a lot of meaning it conveys

use premade delete pattern



form for helpers

could make html form by hand

or

form_for :conversations, url: topic_conversations_path(@topic) do |f|
f.label :subject
f.text_field :title

error

have to add method to the 
def create
end

many form_helper options 
use this one it is the simplist


finally add destroy route for posts in 
admin 