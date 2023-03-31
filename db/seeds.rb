# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.create(email:"shobhitian@gmail.com", password: "123456");
profile = Profile.create(first_name:"shobhit",last_name:"pandey",country:
    "india",phone:1234567890,user_id:1)
    