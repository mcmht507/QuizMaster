# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_15_024358) do

  create_table "answers", primary_key: "answer_id", force: :cascade do |t|
    t.string "user_id"
    t.integer "question_id"
    t.string "content"
    t.boolean "is_correct"
    t.string "created_user"
    t.string "updated_user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["user_id"], name: "index_answers_on_user_id"
  end

  create_table "questions", primary_key: "question_id", force: :cascade do |t|
    t.string "user_id"
    t.string "content"
    t.integer "category"
    t.string "answer"
    t.string "created_user"
    t.string "updated_user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "users", primary_key: "user_id", id: :string, force: :cascade do |t|
    t.string "name"
    t.string "email", default: "", null: false
    t.string "access_token"
    t.string "created_user"
    t.string "updated_user"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["user_id"], name: "sqlite_autoindex_users_1", unique: true
  end

end
