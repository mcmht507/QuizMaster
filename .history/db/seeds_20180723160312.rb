# coding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
User.create({user_id:"test_admin",name:"test_admin_name",email:"test@test.com",password:"265859ab",role_type:"admin"})
Category.create({content:"Math"})
Category.create({content:"English"})
Category.create({content:"Other"})

Question.create({question_id:100,content:"test",user_id:"test_admin","answer":"test_answer",category_id:1})
