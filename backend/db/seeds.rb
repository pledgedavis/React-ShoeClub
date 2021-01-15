# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Shoe.create(name: 'Fire red', image: 'https://www.kicksonfire.com/wp-content/uploads/2020/03/Air-Jordan-5-Fire-Red-2020-1-2.jpg', description: "The first of its model.")
Shoe.create(name: 'Yeezy Turtle Dove', image:'https://sneakernews.com/wp-content/uploads/2016/12/adidas-yeezy-boost-350-turtle-dove-release-info-history.jpg', description: 'The first Yeezy Adidas created.')
Shoe.create(name: 'Yeezy Solar Red', image:'https://i.ytimg.com/vi/guCMp3-UVD0/maxresdefault.jpg', description: 'Nikes first yeezy to release.')
Shoe.create(name: 'Nike Air Mag', image:'https://i.ebayimg.com/images/g/HQcAAOSwlsZfJf~2/s-l640.jpg', description: 'The hoverboard shoes from back to the future Worn by Mcfly')
Shoe.create(name: 'Nike cortez', image:'https://i.pinimg.com/originals/96/e7/08/96e708a9396cdb4bfcc01c94692154b9.png', description: 'The shoes worn by Forrest Gump in 1994')
Shoe.create(name: 'Last shot', image:'https://sneakerbardetroit.com/wp-content/uploads/2018/04/Air-Jordan-14-Last-Shot-2018-Release-Info.jpg', description: 'The shoes that Micheal jordan took his last shot in as a Chicago Bull')
Shoe.create(name: 'Jordan 1', image:'https://i.guim.co.uk/img/media/2339a7023805b333bb38ddc49704333d9c529662/153_459_2576_1545/master/2576.jpg?width=1200&quality=85&auto=format&fit=max&s=6aa6d6a9915ec5fc83eb20231d5b5ffa', description: "Micheal jordans signiture shoe from the 90's.")

Comment.create(description: "Cool", shoe_id: "1")
Comment.create(description: "Looks good", shoe_id: "2")
