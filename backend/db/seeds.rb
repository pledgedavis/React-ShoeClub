# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Shoe.create(name: 'Fire red',  size: '10',  price: '2')
Shoe.create(name: 'Yeezy1',  size: '9',  price: '560')
Shoe.create(name: 'Yeezy2',  size: '11',  price: '390')
Shoe.create(name: 'Yeezy3',  size: '7',  price: '340')


Comment.create(description: "Cool", shoe_id: "1")
Comment.create(description: "Looks good", shoe_id: "2")