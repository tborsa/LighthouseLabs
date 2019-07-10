$ rails new railsdemo --database=postgresql

$ rals --help

$ rails s
$ bin/rails s
# yay your on rails 

$ rails g controller monsters

$ rails g model monster name:string

$ rake db:setup
$ rake db: migrate

# show route and flow
$ rails s

#have nothing in our db at this point though

$ rails g scaffold users

$ rails c
$ Monster.create( name: "Lochness" )
$ Monster.create( name: "Cthulu" )
$ puts Monster.all

$ rails db

# add to template
<% @monsters.each do |monster| %>
  <h2><%= monster.name %></h2>
<% end %>

#to controller
@monsters = Monster.all

$ rake routes


#/cars/id

puts params






