# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create( username: 'Pledge')
 
Brand.create([{ company_name: 'Nike' }, { company_name: 'Air Jordan' }, { company_name: 'Reebok' }, { company_name: 'New Balance' }, { company_name: 'Puma' }, { company_name: 'Yeezy' }, { company_name: 'Other' }])

Shoe.create(name: 'Fire red',  size: '10',  price: '2',  brand_id: '1')
Shoe.create(name: 'Yeezy1',  size: '9',  price: '560',  brand_id: '12')
Shoe.create(name: 'Yeezy2',  size: '11',  price: '390',  brand_id: '12')
Shoe.create(name: 'Yeezy3',  size: '7',  price: '340',  brand_id: '12')
#  byebug