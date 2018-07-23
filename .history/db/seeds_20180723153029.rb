# coding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
User.create({user_id:"test_admin",name:"test_admin_name",email:"test@test.com",password:"265859ab"})
Question.create({content:"test",user_id:"test_admin","answer":"test_answer",category_id:1})
Category.create({content:"math"})