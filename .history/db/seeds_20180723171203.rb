# coding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
User.create({user_id:"test_admin",name:"test_admin_name",email:"test@test.com",password:"mcmht507",role_type:"admin"})
Category.create({content:"Mathematics"})
Category.create({content:"English"})
Category.create({content:"Other"})
Question.create({question_id:100,content:"test question",user_id:"test_admin",answer:"1",category_id:1})
Question.create({question_id:1,content:"How many prefectures in Japan are there?",user_id:"test_admin",answer:"47",category_id:3})
Question.create({question_id:2,content:"1+10=?",user_id:"test_admin",answer:"11",category_id:1})
Question.create({question_id:3,content:"What goes around the world but stays in a corner?",user_id:"test_admin",answer:"stamp",category_id:1})
